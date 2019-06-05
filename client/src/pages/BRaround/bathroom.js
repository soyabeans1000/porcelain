import React, { Component } from 'react'
import Bathrooms from '../../utils/bathroom'
import Likes from '../../utils/likes'
import Bathroomform from '../../components/bathroom'
import Comments from '../../utils/comment'
import User from '../../utils/user'

// Need to create a add icon

class BRAroundMe extends Component {
    state = {
        likecount: null,
        newcomment: '',
        comments: [],
        bathroom: [],
        isliked: null,
        getBR: false
    }
    handleOnClick = _ => {
        this.setState({ bathroom: [], comments: [], newcomment: '', isliked: null, likecount: null, getBR: true }, _ => {

            let likecount = 0
            Bathrooms.getOne(10)
                .then(({ data }) => {
                    likecount = data.likecount
                    let commentsarr = this.state.comments
                    data.comments.forEach(({ comments, user, userId, id, createdAt }) => {
                        commentsarr.push({
                            username: user.username,
                            comment: comments,
                            userId: userId,
                            id: id,
                            createdAt
                        })
                    })
    
                    let i = data.comments.length
                    this.setState({ comments: commentsarr })
                    let bathroom = this.state.bathroom
                    bathroom.push({
                        location: `${data.street} ${data.city}, ${data.state} ${data.zipcode}`,
                        image: data.image,
                        gender: data.gender,
                        stalls: data.stalls,
                        level: data.level,
                        cleanliness: data.cleanliness,
                        caption: data.caption,
                        bathroomId: data.id,
                    })
                    Likes.getOne(localStorage.getItem('userId'), this.state.bathroomId)
                    .then(({data}) => {
                        if (data === null) {
                            this.setState({isliked: false})
                        } else {
                            this.setState({isliked: true})
                        }
                    })
                    .catch(e => console.log(e))
                    this.setState({
                        likecount,
                        bathroom
                    })
                })
                .catch(e => console.log(e))
        })

    }
    handleLikebutton = _ => {
        Likes.getOne(localStorage.getItem('userId'), this.state.bathroom[0].bathroomId)
            .then(({ data }) => {
                if (data === null) {
                    let like = {
                        bathroomId: this.state.bathroom[0].bathroomId,
                        userId: parseInt(localStorage.getItem('userId'))
                    }
                    Likes.postOne(like)
                        .catch(e => console.log(e))
                    let likes = this.state.likecount
                    this.setState({ 
                        likecount: likes += 1,
                        isliked: true 
                    })
                    Bathrooms.putOneIncrease(this.state.bathroom[0].bathroomId)
                } else {
                    Likes.deleteOne(data.id)
                        .catch(e => console.log(e))
                    let likes = this.state.likecount
                    this.setState({ 
                        likecount: likes -= 1,
                        isliked: false 
                    })
                    Bathrooms.putOneDecrease(this.state.bathroom[0].bathroomId)
                }
            })
            .catch(e => console.log(e))

    }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        let adComments = {
            comments: this.state.newcomment,
            bathroomId: this.state.bathroom[0].bathroomId,
            userId: localStorage.getItem('userId'),
        
        }
        Comments.postOne(adComments)
        .then(({ data: comment }) => {
            User.getOne(localStorage.getItem('userId'))
        
            .then(({ data }) => {
                let commentobj = {
                    username: data.username,
                    comment: this.state.newcomment,
                    userId: parseInt(localStorage.getItem('userId')),
                    id: comment.id
                }
                this.setState({
                    ...this.state,
                    newcomment: '',
                    comments: [
                        ...this.state.comments,
                        commentobj
                    ]
                })
                document.getElementById("commentform").reset()
            })
            .catch(e => console.log(e))
        })

        
    }

    handledelete = (e) => {
        let value = e.target.value
        Comments.deleteOne(e.target.id)
            .then(_ => this.setState({comments: this.state.comments.filter(comment => Number(comment.id) !== Number(value))}))
            .catch(e => console.log(e))

    }
    togglegetBR = _ => {
        this.setState({getBR: false})
    }

    handlegetBR = () => {
        if (this.state.getBR === false) {
            return (
                <div>
                    <h5 className="subtitle">When ya gotta go, ya gotta know!</h5>
                    <button onClick={this.handleOnClick}>get bathroom</button>
                </div>
            )
        } else {
            return (
                <div>
                    <Bathroomform 
                        togglegetBR={this.togglegetBR}
                        bathroom={this.state.bathroom} 
                        comments={this.state.comments} 
                        handledelete={this.handledelete} 
                        likecount={this.state.likecount} 
                        handleLikebutton={this.handleLikebutton} 
                        handleSubmit={this.handleSubmit} 
                        handleInputChange={this.handleInputChange} 
                        newcomment={this.state.newcomment}
                        isliked={this.state.isliked}
                    />
                </div>
            )
        }
    }

    render() {

        return (
            <div>
                {this.handlegetBR()}
                {/* <h5 className="subtitle">When ya gotta go, ya gotta know!</h5>
                <button onClick={this.handleOnClick}>get bathroom</button>
                <Bathroomform 
                    bathroom={this.state.bathroom} 
                    comments={this.state.comments} 
                    handledelete={this.handledelete} 
                    likecount={this.state.likecount} 
                    handleLikebutton={this.handleLikebutton} 
                    handleSubmit={this.handleSubmit} 
                    handleInputChange={this.handleInputChange} 
                    newcomment={this.state.newcomment}
                    isliked={this.state.isliked}
                /> */}
            </div>
        )
    }
}

export default BRAroundMe;
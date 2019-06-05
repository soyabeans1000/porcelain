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
        bathroom: []
    }
    handleOnClick = _ => {
        this.setState({ bathroom: [], comments: [] })
        let likecount = 0
        Bathrooms.getOne(1)
            .then(({ data }) => {
                likecount = data.likecount
                let commentsarr = this.state.comments
                console.log(data)
                data.comments.forEach(({ comments, user, userId, id, createdAt }) => {
                    commentsarr.push({
                        username: user.username,
                        comment: comments,
                        userId: userId,
                        id: id,
                        createdAt
                    })
                })
                // i will be the amount of comments for each post
                let i = data.comments.length
                console.log(i)
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
                this.setState({
                    likecount,
                    bathroom
                })
            })
            .catch(e => console.log(e))
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
                    this.setState({ likecount: likes += 1 })
                    Bathrooms.putOneIncrease(this.state.bathroom[0].bathroomId)
                } else {
                    Likes.deleteOne(data.id)
                        .catch(e => console.log(e))
                    let likes = this.state.likecount
                    this.setState({ likecount: likes -= 1 })
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
        Comments.postOne(adComments).then(r => {
            User.getOne(localStorage.getItem('userId'))
        
            .then(({ data }) => {
                let commentobj = {
                    username: data.username,
                    comment: this.state.newcomment,
                    userId: parseInt(localStorage.getItem('userId')),
                
                }
                // comments.push(commentobj)
                this.setState({
                    ...this.state,
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
        .then(_ => {
            let newarr = this.state.comments
            newarr.splice(value, 1)
            this.setState({comments: newarr})
        })
        .catch(e => console.log(e))

    }


    render() {
        return (
            <div>
                <h1>Bathroom Around Me</h1>
                <button onClick={this.handleOnClick}>get bathroom</button>
                <Bathroomform bathroom={this.state.bathroom} comments={this.state.comments} handledelete={this.handledelete} likecount={this.state.likecount} handleLikebutton={this.handleLikebutton} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />
            </div>
        )
    }
}

export default BRAroundMe;
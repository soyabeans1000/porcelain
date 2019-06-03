
import React, { Component } from 'react'
import Bathrooms from '../../utils/bathroom'
import Likes from '../../utils/likes'
import Bathroomform from '../../components/bathroom'
import Comments from '../../utils/comment'
import User from '../../utils/user'

// Need to create a add icon

class BRAroundMe extends Component {
    state = {
        userstatus: null,
        likecount: null,
        addCount: '',
        bathroom: []
    }
    componentWillMount() {
        let id = localStorage.getItem('userId')
        User.getOne(id)
        .then(({data}) => {
            console.log(data)
            this.setState({userstatus: data})
        })
        .catch(e => console.log(e))
    }
    handleOnClick= _ => {
        this.setState({bathroom: []})
        let likecount = 0
        Bathrooms.getOne(1)
        .then(({data}) => {
            likecount = data.likecount
            let commentsarr = []
            data.comments.forEach(({comments, user}) => {
                commentsarr.push({
                    username: user.username,
                    comment: comments
                })
            });
            let bathroom = this.state.bathroom
            bathroom.push({
                location:`${data.street} ${data.city}, ${data.state} ${data.zipcode}`,
                image: data.image,
                gender: data.gender,
                stalls: data.stalls,
                level: data.level,
                caption: data.caption,
                bathroomId: data.id,
                comments: commentsarr
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
        .then(({data}) => {
            if (data === null) {
                let like = {
                    bathroomId: this.state.bathroom[0].bathroomId,
                    userId: parseInt(localStorage.getItem('userId'))
                }
                Likes.postOne(like)
                .catch(e => console.log(e))
                let likes = this.state.likecount
                this.setState({likecount: likes +=1})
                Bathrooms.putOneIncrease(this.state.bathroom[0].bathroomId)
            } else {
                Likes.deleteOne(data.id)
                .catch(e => console.log(e))
                let likes = this.state.likecount
                this.setState({likecount: likes -=1})
                Bathrooms.putOneDecrease(this.state.bathroom[0].bathroomId)
            }
        })
        .catch(e => console.log(e))

    }

    handleInputChange = event => {
            this.setState({ [event.target.id]: event.target.value })
    }
    
    handleCommentBtn = event => {
        event.preventDefault()
        let addComments = {
            comments: this.state.newcomment,
            bathroomId: this.state.bathroom[0].bathroomId,
            userId: localStorage.getItem('userId')
        }
        Comments.postOne(addComments)



        // Comment.postOne(this.props.cmt, localStorage.getItem('userId'), this.state.bathroom[0].bathroomId)
        console.log(addComments)
    }
    render() {
        let state = this.state
        return (
            <div>
                <h1>Bathroom Around Me</h1>
                <button onClick={this.handleOnClick}>get bathroom</button>
                <Bathroomform 
                handleInputChange={this.handleInputChange}
                handleCommentBtn={this.handleCommentBtn} 
                bathroom={this.state.bathroom} 
                likecount={this.state.likecount} 
                handleLikebutton={this.handleLikebutton}
                />
            </div>
        )
    }
}

export default BRAroundMe;
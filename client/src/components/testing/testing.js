import React, { Component } from 'react';
import Bathrooms from '../../utils/bathroom.js'
import Comments from '../../utils/comment'
import User from '../../utils/user'
import Likes from '../../utils/likes'


class Testing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: this.props.toggleredirect,
            bathroomId: this.props.bathroomId,
            location: '',
            image: '',
            gender: '',
            stalls: '',
            level: '',
            cleanliness: '',
            caption: '',
            likecount: null,
            comments: [],
            newcomment: ''
        }
    }
    componentDidMount () {
        Bathrooms.getOne(this.state.bathroomId)
        .then(({data}) => {
            let commentsarr = this.state.comments
            data.comments.forEach(({comments, user, userId}) => {
                commentsarr.push({
                    username: user.username,
                    comment: comments,
                    userId: userId
                })
            })
            this.setState({
                location:`${data.street} ${data.city}, ${data.state} ${data.zipcode}`,
                image: data.image,
                gender: data.gender,
                stalls: data.stalls,
                level: data.level,
                cleanliness: data.cleanliness,
                caption: data.caption,
                likecount: data.likecount,
                comments: commentsarr
            })
        })
        .catch(e => console.log(e))
    }
    handleLikebutton = _ => {
        Likes.getOne(localStorage.getItem('userId'), this.state.bathroomId)
        .then(({data}) => {
            if (data === null) {
                let like = {
                    bathroomId: this.state.bathroomId,
                    userId: parseInt(localStorage.getItem('userId'))
                }
                Likes.postOne(like)
                .catch(e => console.log(e))
                let likes = this.state.likecount
                this.setState({likecount: likes +=1})
                Bathrooms.putOneIncrease(this.state.bathroomId)
            } else {
                Likes.deleteOne(data.id)
                .catch(e => console.log(e))
                let likes = this.state.likecount
                this.setState({likecount: likes -=1})
                Bathrooms.putOneDecrease(this.state.bathroomId)
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
            bathroomId: this.state.bathroomId,
            userId: localStorage.getItem('userId')
        }
        Comments.postOne(adComments)
        User.getOne(localStorage.getItem('userId'))
        .then(({data}) => {
            let commentobj = {
                username: data.username,
                comment: this.state.newcomment,
                userId: localStorage.getItem('userId')
            }
            let comments = this.state.comments
            comments.push(commentobj)
            this.setState({comments})
            document.getElementById("commentform").reset()
        })
        .catch(e => console.log(e))
    }

    render () {
        return (
            <div>
                <h1>hello world</h1>
                <button onClick={_ => {this.props.toggleredirect()}}>back</button>
                <h5>{this.state.location}</h5>
                <img src={this.state.image} />
                <span>Gender: {this.state.gender}</span>
                <span>Stall(s): {this.state.stalls}</span>
                <span>On level: {this.state.level}</span>
                <span>cleanliness: {this.state.cleanliness}</span>
                <p>{this.state.caption}  </p> 
                <div>
                    <button onClick={this.handleLikebutton}>like this</button>
                    {this.state.likecount}
                </div>
                <div>
                    {this.state.comments.map(({username, comment}) => (
                        <div>
                            <span>{username}: </span>
                            <span>{comment}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <form className="comment-form" id="commentform">
                        <div className="comment-form-fields">
                                {/* need to pull in username from sign-in */}
                                {/* <input placeholder="Name" required ref={(input) => this._author = input}></input><br /> */}
                            <textarea placeholder="Comment" rows="2" id="newcomment" onChange={this.handleInputChange}></textarea>
                        </div>
                        <div className="comment-form-actions">
                            <button type="submit" onClick={this.handleSubmit}>Post</button>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }

}

export default Testing
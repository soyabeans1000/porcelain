import React, { Component } from 'react'
import Bathrooms from '../../utils/bathroom'
import Likes from '../../utils/likes'
import Comments from '../../utils/comment'
// import CommentBox from './Comments'
// Need to create a add icon

class BRAroundMe extends Component {
    state = {
        location: '',
        image: '',
        likecount: null,
        gender: '',
        stalls: '',
        level: '',
        caption: '',
        comments: []
    }
    handleOnClick = _ => {
        let location = ''
        let image = ''
        let gender = ''
        let stalls = ''
        let level = ''
        let caption = ''
        let bathroomId = null
        let likecount = 0
        let commentsarr = []
        Bathrooms.getOne(1)
            .then(({ data }) => {
                location = `${data.street} ${data.city}, ${data.state} ${data.zipcode}`
                image = data.image
                likecount = data.likecount
                gender = data.gender
                stalls = data.stalls
                level = data.level
                caption = data.caption
                bathroomId = data.id
                data.comments.forEach(({ comments, user }) => {
                    commentsarr.push({
                        username: user.username,
                        comment: comments
                    })
                });
                this.setState({
                    location,
                    image,
                    likecount,
                    gender,
                    level,
                    stalls,
                    caption,
                    bathroomId,
                    comments: commentsarr
                })
            })
            .catch(e => console.log(e))
    }
    handleLikebutton = _ => {
        Likes.getOne(localStorage.getItem('userId'), this.state.bathroomId)
            .then(({ data }) => {
                if (data === null) {
                    let like = {
                        bathroomId: this.state.bathroomId,
                        userId: parseInt(localStorage.getItem('userId'))
                    }
                    Likes.postOne(like)
                        .catch(e => console.log(e))
                    let likes = this.state.likecount
                    this.setState({ likecount: likes += 1 })
                    Bathrooms.putOneIncrease(this.state.bathroomId)
                } else {
                    Likes.deleteOne(data.id)
                        .catch(e => console.log(e))
                    let likes = this.state.likecount
                    this.setState({ likecount: likes -= 1 })
                    Bathrooms.putOneDecrease(this.state.bathroomId)
                }
            })
            .catch(e => console.log(e))

    }

    _handleSubmit(event) {
        event.preventDefault();
        let author = this._author;
        let body = this._body;
        // this.props.addComment(body);
        let adComments = {
            comments: body.value,
            // bathroom: this.state.bathroom,
            userId: localStorage.getItem('userId')
        }
        console.log(body.value)

        Comments.postOne(adComments)
        const comment = {
            author,
            body
        }
        let newobj = {
            comments: this.state.comments.concat([comment])
        }
        this.setState({
            comments: newobj
        })
    }

    // componentDidUpdate () {
    //     console.log(this.state)
    // }
    render() {
        return (
            <div>
                <h1>Bathroom Around Me</h1>
                <button onClick={this.handleOnClick}>get bathroom</button>
                <div>
                    <h5>{this.state.location}</h5>
                    <img src={this.state.image} />
                    <span>Gender: {this.state.gender};  </span>
                    <span>Stall(s): {this.state.stalls};  </span>
                    <span>On level: {this.state.level};  </span>
                    <p>{this.state.caption}  </p>
                    <div>
                        <button onClick={this.handleLikebutton}>like this</button>
                        {this.state.likecount}
                    </div>
                    <div>
                        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
                            <div className="comment-form-fields">
                                {/* need to pull in username from sign-in */}
                                {/* <input placeholder="Name" required ref={(input) => this._author = input}></input><br /> */}
                                <textarea placeholder="Comment" rows="2" required ref={(textarea) => this._body = textarea}></textarea>
                            </div>
                            <div className="comment-form-actions">
                                <button type="submit">Post</button>
                            </div>
                        </form>
                    </div>


                    <div>
                        {this.state.comments.map(({ username, comment }) => (
                            <div>
                                <span>{username}: </span>
                                <span>{comment}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        )
    }
}

export default BRAroundMe;
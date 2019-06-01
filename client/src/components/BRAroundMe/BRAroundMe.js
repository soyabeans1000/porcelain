import React, { Component } from 'react'
import Bathrooms from '../../utils/bathroom'
import Likes from '../../utils/likes'
// Need to create a add icon

class BRAroundMe extends Component {
    state = {
        location: '',
        image: '',
        likecount: null,
        gender: '',
        stalls: '',
        level:  '',
        caption: '', 
        comments: []
    }
    handleOnClick= _ => {
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
        .then(({data}) => {
            location = `${data.street} ${data.city}, ${data.state} ${data.zipcode}`
            image = data.image
            likecount = data.likecount
            gender = data.gender
            stalls = data.stalls
            level = data.level
            caption = data.caption
            bathroomId = data.id
            data.comments.forEach(({comments, user}) => {
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
                        {this.state.comments.map(({username, comment}) => (
                            <div>
                                <span>{username}: </span>
                                <span>{comment}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default BRAroundMe;
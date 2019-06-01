import React, { Component } from "react";
import User from '../../utils/user.js';
import Comments from '../../utils/comment.js'



class CommentForm extends Component {

    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
              {/* need to pull in username from sign-in */}
            {/* <input placeholder="Name" required ref={(input) => this._author = input}></input><br /> */}
            <textarea placeholder="Comment" rows="2" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit" onclick={this.clear}>Post</button>
          </div>
        </form>
      );
    }
  
    _handleSubmit(event) {
      event.preventDefault();
      let author = this._author;
      let body = this._body;
      this.props.addComment(body.value);
      let adComments = {
        comments: body.value,
        // bathroom: this.state.bathroom,
        userId: localStorage.getItem('userId')
    }
    console.log(body.value)
        Comments.postOne(adComments)
    }
  }

  export default CommentForm;
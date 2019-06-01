import React, { Component } from "react";
import axios from "axios"
import Comments from "../../utils/comment.js"
import User from '../../utils/user.js'


// put user info in the form below

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <p className="comment-body">{this.props.body}</p>
        <p className="comment-header">{this.props.author}</p>
        <div className="comment-footer">
          <a href="#" className="comment-footer-delete" onClick={this._deleteComment}>Delete</a>
        </div>
      </div>
    );
  }
  _deleteComment(event) {
    event.preventDefault();
    let userId = localStorage.getItem('userId')
    Comments.deleteOne(userId)

  }
}



export default Comment;
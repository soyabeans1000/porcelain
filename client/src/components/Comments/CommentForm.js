import React, { Component } from "react";
import User from '../../utils/user.js'

class CommentForm extends Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
              {/* need to pull in username from sign-in */}
            <input placeholder="Name" required ref={(input) => this._author = input}></input><br />
            <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit">Post</button>
          </div>
        </form>
      );
    }
  
    _handleSubmit(event) {
      event.preventDefault();
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
  
    }
  }

  export default CommentForm;
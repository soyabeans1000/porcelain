import React, { Component } from "react";
import axios from "axios"
import Comments from "../../utils/comment.js"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

class CommentBox extends Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [

      ]
    };
  }

  render() {
    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show Comments';

    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }

    return (
      <div className="comment-box">
        <CommentForm addComment={this._addComment.bind(this)} />
        <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this._getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>
    );
  } 

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) });
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }


//   retrieve comments from db
  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id} />
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
}

export default CommentBox;
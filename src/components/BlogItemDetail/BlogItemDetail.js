import React, { Component } from "react";
import CommentText from "../Comments/Comment";
import * as blogsActions from "./../../actions/blog";
import * as commentActions from "./../../actions/commnent";

import { connect } from "react-redux";
class BlogItemDetail extends Component {
  constructor(props) {
    super(props);
    this.postId = parseInt(this.props.match.params.id, 10);
    this.state = {
      post: {},
      listComments: []
    };
  }

  componentDidMount() {
    this.props.getListBlogsById(this.postId);
    this.props.getCommentsById(this.postId)
    this.props.getUserById(this.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentPost) {
      this.setState({
        post: nextProps.currentPost,
        listComments: nextProps.currentComment
      });
    }
  }

  render() {
    
    return (
      <div className="blog-item">
        <h1 style={{ textAlign: "center" }}>{this.state.post.title}</h1>
        <p>Author: Truongvu</p>
        <p>Created at: {(new Date(this.state.post.created_at)).toLocaleDateString("vn")}</p>
        <p>{this.state.post.content}</p>
        <CommentText comments={this.state.listComments} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPost: state.blog.currentPost,
    currentComment: state.comment.currentComment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListBlogsById: postId => {
      dispatch(blogsActions.getBlogDetailById(postId));
    },
    getCommentsById: postId => {
      dispatch(commentActions.getCommentByPostId(postId))
    },
    getUserById: id => {
      dispatch(commentActions.getUserById(id))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogItemDetail);

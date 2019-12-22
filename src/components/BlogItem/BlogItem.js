import React, { Component } from "react";

class BlogItem extends Component {
  render() {
    const {post} = this.props; 
    return (
      <div className="blog-item">
        <h1 style={{ textAlign: "center" }}>{post.title}</h1>
        <p>Author: Truongvu</p>
        <p>Created at: {(new Date(post.created_at)).toLocaleDateString("vn")}</p>
        <p>
          {`${post.content.substr(0, 250)}...`}
        </p>
      </div>
    );
  }
}

export default BlogItem;

import React, { Component } from "react";
import { Comment, List } from "antd";

class CommentText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.comments) {
      this.setState({
        comments: nextProps.comments
      });
    }
  }

  render() {
    return (
      <List
        className="comment-list"
        header={`${this.state.comments.length} replies`}
        itemLayout="horizontal"
        dataSource={this.state.comments}
        renderItem={item => (
          <li>
            <Comment
              actions={[]}
              author={"item.author"}
              avatar={
                "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              }
              content={item.content}
              datetime={new Date(item.created_at).toLocaleDateString("vn")}
            />
          </li>
        )}
      />
    );
  }
}

export default CommentText;

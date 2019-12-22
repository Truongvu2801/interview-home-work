import React, { Component } from "react";
import BlogItem from "../../components/BlogItem/BlogItem";
import { connect } from "react-redux";
import * as blogsActions from "./../../actions/blog";
import { NavLink } from "react-router-dom";
import SearchBox from "../../components/SearchBox/index";
import BlogForm from "../../components/BlogForm/BlogForm";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listBlogs: []
    };
  }

  componentDidMount() {
    this.props.getListBlogs();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      listBlogs: nextProps.listBlogs
    });
  }

  render() {
    const { match } = this.props;
    const url = match.url;
    const result = this.state.listBlogs.map((item, index) => {
      return (
        <NavLink to={`${url}/${item.id}`} key={index}>
          <BlogItem post={item} />
        </NavLink>
      );
    });

    return (
      <div>
        <SearchBox />
        <BlogForm />
        {result}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listBlogs: state.blog.listBlogs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListBlogs: () => {
      dispatch(blogsActions.fetchListBlog());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);

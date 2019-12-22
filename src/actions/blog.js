import * as blogConstants from "../constants/blog";
import Api from "../services/api";

export const fetchListBlog = data => {
  const posts = Api.getPosts();
  return {
    type: blogConstants.FETCH_BLOG,
    payload: {
      data: posts
    }
  };
};

export const getBlogDetailById = postId => {
  const post = Api.getPostById(postId);
  return {
    type: blogConstants.GET_BLOG_DETAIL_BY_ID,
    payload: {
      data: post
    }
  };
};

export const createPost = data => {
  return {
    type: blogConstants.CREATE_POST,
    payload: {
      data
    }
  };
};

export const searchPost = (searchStr) => {
  return {
    type: blogConstants.SEARCH_POST,
    payload: {
      data: searchStr
    }
  }
}

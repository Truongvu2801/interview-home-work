import * as blogConstants from "../constants/blog";

const initialState = {
  listBlogs: [],
  backupList: [],
  searchResults: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case blogConstants.FETCH_BLOG: {
      const { data } = action.payload;
      const listBlogs = state.listBlogs.filter(blog => !!blog);
      data.forEach(d => {
        if(!listBlogs.find(blog => d.id === blog.id)){
          listBlogs.push(d);
        }
      })
      return {
        ...state,
        listBlogs: [...listBlogs],
        backupList: [...listBlogs]
      };
    }
    case blogConstants.GET_BLOG_DETAIL_BY_ID: {
      const { data } = action.payload;
      return {
        ...state,
        currentPost: data
      }
    }
    case blogConstants.CREATE_POST: {
      const { data } = action.payload;
      const { listBlogs } = state;
      return {
        ...state,
        listBlogs: [...listBlogs, data],
        backupList: [...listBlogs, data]
      }
    }
    case blogConstants.SEARCH_POST: {
      const { data } = action.payload;
      const { listBlogs, backupList } = state;
      let searchResults = [];
      if (data.length > 0) {
        searchResults = listBlogs.filter(blog => blog.title.toLowerCase().search(data.toLowerCase()) >= 0);
      } else {
        searchResults = backupList;
      }
      return {
        ...state,
        listBlogs: searchResults
      }
    }
    default:
      return state;
  }
};

export default reducer;

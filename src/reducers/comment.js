import * as commentConstants from "../constants/comments";
import * as userConstants from "../constants/users";

const initialState = {
  listComment: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case commentConstants.GET_COMMENT_BY_ID: {
      const { data } = action.payload;
      return {
        ...state,
        currentComment: data
      };
    }
    case userConstants.GET_USER_BY_ID: {
      const { data } = action.payload;
      return {
        ...state,
        currentUser: data
      }
    }
    default:
      return state;
  }
};

export default reducer;

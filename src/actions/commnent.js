import * as commentConstant from '../constants/comments';
import * as userConstants from '../constants/users';
import Api from '../services/api';

export const getCommentByPostId = (postId) => {
    const comments = Api.getCommentsByPostId(postId);
    return {
        type: commentConstant.GET_COMMENT_BY_ID,
        payload: { 
            data:comments
        }
    }
}

export const getUserById = id => {
    const user = Api.getUserById(id);
    return {
        type: userConstants.GET_USER_BY_ID,
        payload: {
            data: user
        }
    }
}
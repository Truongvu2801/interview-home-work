import { combineReducers } from 'redux';
import blogReducer from './blog';
import commentReducer from './comment';

const rootReducer = combineReducers({
    blog: blogReducer,
    comment: commentReducer
});

export default rootReducer;

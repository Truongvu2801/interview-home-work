import { fork, take, call, put } from "redux-saga/effects";
import * as blogTypes from "../constants/blog";
import Api from "../services/api";
import { fetchListBlog } from "../actions/blog";

function* watchFetchListBlogAction() {
  while (true) {
    yield take(blogTypes.FETCH_BLOG);
    const resp = yield call(Api.getPosts);
    // console.log("watch resp: ", resp);
    if (resp) {
      yield put(fetchListBlog(resp));
    }
  }
}

// function* addPostSagas(){
//     const { data } = payload;
//     const resp = yield call(createPost, {
//        data
//       });
//       const { postData } = resp;
//       if(postData){
//           yield put(createPostItem)
//       }
// }

function* rootSaga() {
  yield fork(watchFetchListBlogAction);
  //   yield takeEvery(blogTypes.CREATE_POST, addPostSagas)
}

export default rootSaga;

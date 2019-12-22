import comments from '../data/comments';
import posts from '../data/posts';
import users from '../data/users';

class Api {
    static getPosts() {
        return posts;
    } 

    static getCommentsByPostId(postId) {
        return comments.filter((comment) => comment.post === postId);
    }

    static getPostById(postId) {
        return posts.find((post) => post.id === postId);
    }
    
    static getUserById(id){
        return users.find((user) => user.id === id)
    }

    static createPost(data){
        return true;
    }

}

export default Api;

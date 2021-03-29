import NewPosts from "./NewPosts/NewPosts";
import PostWall from "./PostWall/PostWall";
import s from "./posts.module.css"
import NewPostsContainer from "./NewPosts/NewPostsContainer";
import PostWallContainer from "./PostWall/PostWallContainer";


let Posts = (props) => {
    return (
        <div className={s.content}>
            <NewPostsContainer/>
            <PostWallContainer/>
        </div>
    )
}

export default Posts;
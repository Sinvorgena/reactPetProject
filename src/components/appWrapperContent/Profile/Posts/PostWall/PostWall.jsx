import Post from "./Post/Post";
import s from "./PostWall.module.css";

const PostWall = (props) => {

    return (
        <div className={s.wall}>
            {props.postMessage}
        </div>

    )
}

export default PostWall;
import s from "./posts.module.scss"
import React from "react";
import PostWall from "./posts_components/PostWall";
import NewPosts from "./posts_components/NewPosts";


let Posts:React.FC = () => {
    return (
        <div className={s.content}>
            <NewPosts/>
            <PostWall/>
        </div>
    )
}

export default React.memo(Posts);
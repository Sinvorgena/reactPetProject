import s from "./PostWall.module.scss";
import React from "react";
import {useSelector} from "react-redux";
import {getPostMessageData_selector} from "../../../../../Selectors/Selectors";
import Post from "./Post";
import {appStateType} from "../../../../../redux/redux-store";
import {postType} from "../../../../../types/types";

const PostWall:React.FC = () => {
    let postMessage = useSelector((state: appStateType) =>
        getPostMessageData_selector(state).map((post:postType) => <Post message={post.message} like={post.likesCount}/>))
    return (
        <div className={s.wall}>
            {postMessage}
        </div>

    )
}


export default React.memo(PostWall);
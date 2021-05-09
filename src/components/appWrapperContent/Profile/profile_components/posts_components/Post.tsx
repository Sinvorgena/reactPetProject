import s from "./post.module.css";
import React from "react";

type props = {
    message: string
    like: number
}
let Post: React.FC<props> = (props) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}/>
            <div className={s.text}>{props.message}
                <div>Like {props.like}</div>
            </div>
        </div>
    )
}

export default Post;
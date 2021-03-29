import s from "./post.module.css";


let Post = (props)=>{
    return (

    <div className={s.item}>
        <div className={s.avatar}></div>
        <div className={s.text}>{props.message}<div>Like {props.like}</div></div>
    </div>
)
}

export default Post;
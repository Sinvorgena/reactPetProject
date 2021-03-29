import s from "./NewPosts.module.css"
import React from "react";



let NewPosts = (props) => {
    let newPostElement = React.createRef()

    let niceScroll = (e) => {
        e.target.style.height = "5px"
        e.target.style.height = e.target.scrollHeight + "px"
    }
    let newTextPost = () => {
        props.newTextPost(newPostElement.current.value)
    }

    return (
        <form className={s.form}>
            <label
                htmlFor={"textFieldId"}
                className={s.textFieldLabel}>My posts</label>

            <textarea className={s.textField}
                      placeholder={"your news..."}
                      onInput={niceScroll}
                      ref={newPostElement}
                      onChange={newTextPost}
                      value={props.newPostText}
                      id={"textFieldId"}/>

            <button className={s.sendBtn}
                    type={"button"}
                    onClick={props.addPost}>Send</button>
        </form>
    )
}

export default NewPosts;
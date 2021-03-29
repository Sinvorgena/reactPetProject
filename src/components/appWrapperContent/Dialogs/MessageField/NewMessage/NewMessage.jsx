import s from "./NewMessage.module.css"
import React from "react";


let NewMessage = (props) => {
    let MessageText = React.createRef()
    let niceScroll = (e) => {
        e.target.style.height = "5px"
        e.target.style.height = e.target.scrollHeight + "px"
    }
    let newTextMessage = () => {
        props.newTextMessage(MessageText.current.value)
    }
    return (
        <div className={s.newMessage}>
                <textarea className={s.textField}
                          id={"textFieldId"}
                          placeholder={"Write a message..."}
                          onInput={niceScroll}
                          ref={MessageText}
                          onKeyPress={(e) => {
                              if (e.key == "Enter") {
                                  props.addNewMessageValue()
                              }
                          }} value={props.newMessageText}
                          onChange={newTextMessage}/>
            <button className={s.sendNewMessage}
                    onClick={props.addNewMessageValue}></button>
        </div>

    )
}


export default NewMessage;
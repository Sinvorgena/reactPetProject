import s from "./NewMessage.module.css"
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../../common/FormsControls/FormControl";
import {maxLegthCreator, required} from "../../../../../utils/validators/validator";

let maxLength10 = maxLegthCreator(10)
let NewMessageForm = (props) => {
    let niceScroll = (e) => {
        e.target.style.height = "5px"
        e.target.style.height = e.target.scrollHeight + "px"
    }
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field className={s.textField}
                   component={Textarea}
                   name={"newMessageField"}
                   id={"textFieldId"}
                   placeholder={"Write a message..."}
                   onInput={niceScroll}
                   validate={[required, maxLength10]}
            />
            <button className={s.sendNewMessage}></button>
        </form>

    )
}
let NewMessageReduxForm = reduxForm({form:"newMessage"})(NewMessageForm)

let NewMessage = (props) => {
    let onSubmit = (value)=>{
        props.addNewMessageValue(value.newMessageField)
    }
    return (
        <NewMessageReduxForm onSubmit={onSubmit}/>

    )
}


export default NewMessage;
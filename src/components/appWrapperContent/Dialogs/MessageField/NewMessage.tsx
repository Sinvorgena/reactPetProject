import s from './NewMessage.module.scss'
import React from "react";

import {createField, Textarea} from "../../../common/FormsControls/FormControl";
import {maxLengthCreator, required} from "../../../../validators/validator";
import {actions} from "../../../../redux/dialogsReducer";
import {useDispatch} from "react-redux";
import {reduxForm} from "redux-form";




let maxLength10 = maxLengthCreator(10)
let NewMessageForm = (props:any) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            {createField("Write a message...", 'newMessageField',
                [required, maxLength10], Textarea, {className: s.textField})}
            <button className={s.sendNewMessage}/>
        </form>

    )
}
let NewMessageReduxForm = reduxForm({form: "newMessage"})(NewMessageForm)

let NewMessage: React.FC = () => {
    const dispatch = useDispatch()
    let onSubmit = (value:any) => {
        dispatch(actions.addMessage_action(value.newMessageField))
    }
    return (
        <NewMessageReduxForm onSubmit={onSubmit}/>

    )
}


export default React.memo(NewMessage);
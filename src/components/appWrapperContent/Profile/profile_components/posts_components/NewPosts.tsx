import s from "./NewPosts.module.scss"
import React from "react";
import {Field, reduxForm} from "redux-form";

import {Textarea} from "../../../../common/FormsControls/FormControl";
import {useDispatch} from "react-redux";
import {profileActions} from "../../../../../redux/profileReducer";
import {maxLengthCreator, required} from "../../../../../validators/validator";

let maxLength10 = maxLengthCreator(10)
let NewPostsForm = (props:any) => {

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <label
                htmlFor={"textFieldId"}
                className={s.textFieldLabel}>My posts</label>

            <div className={s.textField}>
                <Field className={s.textarea}
                       placeholder={"your news..."}
                       name={"postText"}
                       id={"textFieldId"} component={Textarea}
                       validate={[required, maxLength10]}/></div>
            <button className={s.sendBtn}>Send</button>
        </form>
    )
}
let NewPostsReduxForm = reduxForm({
    form: "newPost"
})(NewPostsForm)

let NewPosts = (props:any) => {
    let dispatch = useDispatch()
    let onSubmit = (formData:any) => {
        dispatch(profileActions.addPost_action(formData.postText))
    }
    return (
        <NewPostsReduxForm onSubmit={onSubmit} {...props}/>
    )
}


export default React.memo(NewPosts);
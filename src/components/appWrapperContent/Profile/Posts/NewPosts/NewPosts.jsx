import s from "./NewPosts.module.css"
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLegthCreator, required} from "../../../../../utils/validators/validator";
import {Textarea} from "../../../../common/FormsControls/FormControl";

let maxLength10 = maxLegthCreator(10)
let NewPostsForm = (props) => {

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

let NewPosts = (props) => {
    let onSubmit = (formData) => {
        props.addPost(formData.postText)
    }
    return (
        <NewPostsReduxForm onSubmit={onSubmit} {...props}/>
    )
}

export default NewPosts;
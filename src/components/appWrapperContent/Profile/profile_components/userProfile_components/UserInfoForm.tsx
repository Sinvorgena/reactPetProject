import s from "../UserProfile.module.scss";
import {createField, Input} from "../../../../common/FormsControls/FormControl";
import {InjectedFormProps, reduxForm} from "redux-form";
import React, {useEffect} from "react";
import formS from "../../../../common/FormsControls/FormControl.module.scss"
import {useDispatch} from "react-redux";
import {setNewProfileInfo_thunkC} from "../../../../../redux/profileReducer";
import {contactsType, profileType} from "../../../../../types/types";

type userInfoFormProps = {
    profile: profileType | null
    initialValues: profileType | null
}
type formDataType = {
    fullName: string
    aboutMe: string
    lookingForAJob:boolean
    lookingForAJobDescription: string
    contacts: contactsType
}
type formDataTypeKeys = Extract<keyof formDataType, string>

let UserInfoForm:React.FC<InjectedFormProps<formDataType, userInfoFormProps>&userInfoFormProps>  = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            {props.error && <div className={formS.allFormError}>{props.error}</div>}
            <div>
                <label
                    htmlFor={"textFieldId"}
                    className={s.textFieldLabel}>FullName:
                </label>
                {createField<formDataTypeKeys>("Full name", "fullName", [], Input)}
            </div>
            <div>
                <label
                    htmlFor={"textFieldId"}
                    className={s.textFieldLabel}>About me:
                </label>
                {createField<formDataTypeKeys>("About me", "aboutMe", [], Input)}
            </div>
            <div>
                <label
                    htmlFor={"textFieldId"}
                    className={s.textFieldLabel}>Looking for a job:
                </label>
                {createField<formDataTypeKeys>("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <label
                    htmlFor={"textFieldId"}
                    className={s.textFieldLabel}>My professional skills:
                </label>
                {createField<formDataTypeKeys>("", "lookingForAJobDescription", [], Input)}
            </div>
            <div>
                {props.profile? (Object.keys(props.profile.contacts)).map(contactTitle =>
                    <div key={contactTitle}>{contactTitle}: {createField(contactTitle, "contacts." + contactTitle, [], Input)}</div>)
                : ""}
            </div>
            <button type="submit" className={s.editProfileInfoBtn} onClick={() => {
            }}>Save
            </button>
        </form>
    )

}

let UserInfoFormReduxForm = reduxForm<formDataType, userInfoFormProps>({
    form: "userInfo"
})(UserInfoForm)

type changeUserInfoProps = {
    profileEditStatus: string
    setEditMode: (editMode: boolean)=>void
    editMode: boolean
    profile: profileType | null
}
let ChangeUserInfo:React.FC<changeUserInfoProps> = (props) => {
    let dispatch = useDispatch()
    let onSubmit = (formData:formDataType) => {
        dispatch(setNewProfileInfo_thunkC(formData.aboutMe, formData.fullName, formData.contacts,formData.lookingForAJob, formData.lookingForAJobDescription))
    }
    useEffect(() => {
        if (props.profileEditStatus) {
            props.setEditMode(!props.editMode)
        }
    }, [props.profileEditStatus])
    return (
        <UserInfoFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
    )
}

export default React.memo(ChangeUserInfo);
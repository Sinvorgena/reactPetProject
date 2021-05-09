import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormControl";
import {required} from "../../validators/validator";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {logIn_thunkC} from "../../redux/authReducer";
import s from "../common/FormsControls/FormControl.module.scss"
import {appStateType} from "../../redux/redux-store";
import {getCaptchaUrl_selector, getIsAuth_selector} from "../../Selectors/Selectors";


type loginFormProps = {
    captchaUrl: string | null
}
type formDataType = {
    email: string
    password: string
    rememberMe:boolean
    captcha: string
}
type formDataTypeKeys = Extract<keyof formDataType, string>

let LoginForm:React.FC<InjectedFormProps<formDataType, loginFormProps>&loginFormProps> = ({handleSubmit, captchaUrl, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            {createField<formDataTypeKeys>("Login", "email", [required], Input)}
            {createField<formDataTypeKeys>("Password", "password", [required], Input)}
            {createField<formDataTypeKeys>(undefined, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}


            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField<formDataTypeKeys>("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={s.allFormError}>{error}</div>}
            <div>
                <button type="submit" placeholder={"login"}>log in</button>
            </div>
        </form>
    )
}
let LoginReduxForm = reduxForm<formDataType, loginFormProps>({
    form: "Login"
})(LoginForm)



let Login:React.FC = ()=>{
    let isAuth = useSelector((state:appStateType) => getIsAuth_selector(state))
    let captchaUrl = useSelector((state:appStateType) => getCaptchaUrl_selector(state))
    let dispatch = useDispatch()
    let onSubmit = (formData:formDataType)=>{
        dispatch(logIn_thunkC(formData.email, formData.password, formData.rememberMe ,formData.captcha))
    }

        if (isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return(
            <div>
                <div><h1>Login</h1></div>
                <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
            </div>
        )

}

export default React.memo(Login)
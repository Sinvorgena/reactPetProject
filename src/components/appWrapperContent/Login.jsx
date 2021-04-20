import React from "react";
import {Field, reduxForm} from "redux-form";
import {Api} from "../../api/api";
import {Input} from "../common/FormsControls/FormControl";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {logIn, setAuthUserData} from "../../redux/authReducer";
import s from "../common/FormsControls/FormControl.module.css"


let LoginForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" name={"login"} validate={[required]} component={Input} placeholder={"login"}/>
            </div>
            <div>
                <Field type="text" name={"password"} validate={[required]} component={Input} placeholder={"password"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input}/>remember me
            </div>
            {props.error && <div className={s.allFormError}>{props.error}</div>}
            <div>
                <button type="submit" placeholder={"login"}>log in</button>
            </div>
        </form>
    )
}
let LoginReduxForm = reduxForm({
    form: "Login"
})(LoginForm)

class Login extends React.Component{
    onSubmit = (formData)=>{
       this.props.logIn(formData.login, formData.password)
    }
    render() {
        if (this.props.isAuth) {
            return <Redirect to={'/profile'}/>
        }
        return(
            <div>
                <div><h1>Login</h1></div>
                <LoginReduxForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
let mapStateToProps = state =>{
    return{
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps,{setAuthUserData,logIn})(Login)
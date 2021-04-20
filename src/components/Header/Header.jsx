import s from "./Header.module.css"
import {NavLink, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../redux/authReducer";
import React from "react";

class Header extends React.Component {


    render() {
        if (this.props.isAuth) {
            return (
                <header className={s.header}>
                    <div className={s.img}><img src="" alt=""/></div>
                    <div className={s.loginBtn}>
                        {this.props.isAuth ? <span>{this.props.login}
                                <NavLink to={"/login"} onClick={() => this.props.logOut()}>Log Out</NavLink></span> :
                            <NavLink to={"/login"}>Login</NavLink>}
                    </div>
                </header>
            )
        }
        return (
            <header className={s.header}>
                <div className={s.img}><img src="" alt=""/></div>
                <div className={s.loginBtn}>
                    {this.props.isAuth ? <span>{this.props.login}
                            </span> :
                        <NavLink to={"/login"}>Login</NavLink>}
                </div>
            </header>)
    }


}


const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {logOut})(Header);
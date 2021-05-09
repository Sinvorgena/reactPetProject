import s from "./Header.module.scss"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut_thunkC} from "../../redux/authReducer";
import React from "react";
import {getIsAuth_selector, getLogin_selector} from "../../Selectors/Selectors";
import {appStateType} from "../../redux/redux-store";


let Header:React.FC = () => {
    let isAuth = useSelector((state:appStateType) => getIsAuth_selector(state))
    let login = useSelector((state:appStateType) => getLogin_selector(state))
    let dispatch = useDispatch()
    return (
        <header className={s.header}>
            <div className={s.img}><img src="" alt=""/></div>
            <div className={s.loginBtn}>
                {isAuth
                    ? <span>{login}
                        <NavLink to={"/login"} onClick={() => dispatch(logOut_thunkC())}>
                            Log Out
                        </NavLink></span>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}


export default React.memo(Header);
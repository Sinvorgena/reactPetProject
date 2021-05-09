import {Redirect} from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
import React from "react";
import {useSelector} from "react-redux";
import {getIsAuth_selector, getIsLoading_selector} from "../Selectors/Selectors";

let withAuthRedirect = (Component) => {
    let RedirectComponent = (props) => {
        let isAuth = useSelector(state => getIsAuth_selector(state))
        let isLoading = useSelector(state => getIsLoading_selector(state))
        if ((!isAuth) || (!isAuth && Component == "Dialogs")) {
            return <Redirect to={'/login'}/>
        }
        return (
            <>
                {isLoading ? <Preloader/> : ""}
                <Component {...props}/>
            </>
        )
    }
    return RedirectComponent;
}

export default (withAuthRedirect);
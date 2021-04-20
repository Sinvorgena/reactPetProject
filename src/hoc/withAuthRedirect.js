import {Redirect, withRouter} from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
import Profile from "../components/appWrapperContent/Profile/Profile";
import React from "react";
import {connect} from "react-redux";



const mapStateToProps = (state)=>{
    return{
        isAuth: state.auth.isAuth,
        isLoading: state.Users.isLoading,
        anotherUserId: state.auth.anotherUserId
    }
}

let withAuthRedirect = (Component)=> {
    class RedirectComponent extends React.Component {
        render() {
            if ((!this.props.isAuth && this.props.anotherUserId == null) || (!this.props.isAuth && Component == "Dialogs")) {
                return <Redirect to={'/login'}/>
            }
            return (
                <>
                    {this.props.isLoading ? <Preloader/> : ""}
                    <Component {...this.props}/>
                </>
            )
        }

    }

    return connect(mapStateToProps, {})(RedirectComponent);

}

export default (withAuthRedirect);
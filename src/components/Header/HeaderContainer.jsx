import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import React from "react";
import {compose} from "redux";
import {toogleIsLoading} from "../../redux/UsersReducer";
import {setUserProfile} from "../../redux/ProfileReducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {getIsAuth, getLogin} from "../../Selectors/Selectors";


class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        login: getLogin(state)
    }
}

export default compose(
    connect(mapStateToProps, {setAuthUserData})
)(HeaderContainer);
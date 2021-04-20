import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {toogleIsLoading} from "../../../redux/UsersReducer";
import {withRouter} from "react-router-dom";
import {getUserProfileStatus, setUserProfile} from "../../../redux/ProfileReducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getMainId} from "../../../Selectors/Selectors";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        if(this.props.match.params.userId){
            this.props.setUserProfile(this.props.match.params.userId, this.props.toogleIsLoading)
        }
    }

    render() {
        return (
                <Profile/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mainUserId: getMainId(state)
    }
}

export default compose(
    connect(mapStateToProps, {toogleIsLoading, setUserProfile, getUserProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
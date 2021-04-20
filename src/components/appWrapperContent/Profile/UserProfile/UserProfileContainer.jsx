import React from "react";
import {
    addAvatarActionCreator,
    changeAvatarActionCreator, getUserProfileStatus,
    nextAvatarActionCreator,
    prevAvatarActionCreator
} from "../../../../redux/ProfileReducer";

import UserProfile from "./UserProfile";
import {connect} from "react-redux";
import {
    getAnothersUserInfo,
    getAnotherUserMainAvatar, getAvatarUrlData,
    getIsWatchNow, getMainAvatar, getMainId,
    getStatus,
    getUserId,
    getUserInfoDate
} from "../../../../Selectors/Selectors";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


class userProfileContainer extends React.Component {
    componentDidMount() {

            if (this.props.match.params.userId) {
                this.props.getUserProfileStatus(this.props.match.params.userId)
            } else {
                debugger
                this.props.getUserProfileStatus(this.props.mainUserId)
            }

    }

    render() {
        return (
            <UserProfile isWatchNow={this.props.isWatchNow}
                         mainAvatar={this.props.mainAvatar}
                         anothersUserInfo={this.props.anothersUserInfo}
                         avatarUrlData={this.props.avatarUrlData}
                         userId={this.props.userId}
                         status={this.props.status}
                         userInfoDate={this.props.userInfoDate}
            />
        )

    }
}

const mapStateToProps = (state) => {
    if (state.Profile.anothersUserInfo[0].isWatchNow) {
        return {
            isWatchNow: getIsWatchNow(state),
            mainAvatar: getAnotherUserMainAvatar(state),
            anothersUserInfo: getAnothersUserInfo(state)
        }
    } else {
        return {
            mainAvatar: getMainAvatar(state),
            mainUserId: getMainId(state),
            isWatchNow: getIsWatchNow(state),
            avatarUrlData: getAvatarUrlData(state),
            userId: getUserId(state),
            status: getStatus(state),
            userInfoDate: getUserInfoDate(state)
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addAvatar: (url) => {
            dispatch(addAvatarActionCreator(url))
        },
        changeAvatar: () => {
            dispatch(changeAvatarActionCreator())
        },
        nextAvatar: (element) => {
            dispatch(nextAvatarActionCreator(element))
        },
        prevAvatar: (element) => {
            dispatch(prevAvatarActionCreator(element))
        },
        getUserProfileStatus
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(userProfileContainer);

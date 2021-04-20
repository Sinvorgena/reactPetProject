import React from "react";
import {connect} from "react-redux";
import {
    getUsers,
    setCurrentPage,
    setUserData,
    toogleFollowingInProgressUser,
    toogleFollowStatus,
} from "../../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../../Preloader/Preloader";
import {setAnotherUserIdSucsess} from "../../../redux/authReducer";
import {
    getCurrentPage,
    getIsAuth, getIsFollowingInProgress,
    getIsLoading,
    getNumberOfUsersOnPage,
    getTotalUsersCount, getUsersInProgressFollowing
} from "../../../Selectors/Selectors";

class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.numberOfUsersOnPage, this.props.currentPage)

    }

    getUsers = () => {
        setTimeout(() => {
            this.props.getUsers(this.props.numberOfUsersOnPage, this.props.currentPage)}, 100)
    }
    render = () => {

        return <>
            {this.props.isLoading ?
                <Preloader/> : ""}
            <Users getUsers={this.getUsers}
                   usersData={this.props.usersData}
                   setCurrentPage={this.props.setCurrentPage}
                   currentPage={this.props.currentPage}
                   numberOfPages={this.props.numberOfPages}
                   toogleFollowStatus={this.props.toogleFollowStatus}
                   isLoading={this.props.isLoading}
                   usersInProgressFollowing={this.props.usersInProgressFollowing}
                   setAnotherUserIdSucsess={this.props.setAnotherUserIdSucsess}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.Users.usersData,
        numberOfPages: Math.ceil(getTotalUsersCount(state) / getNumberOfUsersOnPage(state)),
        numberOfUsersOnPage: getNumberOfUsersOnPage(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isLoading: getIsLoading(state),
        isAuth: getIsAuth(state),
        isFollowingInProgress: getIsFollowingInProgress(state),
        usersInProgressFollowing: getUsersInProgressFollowing(state)
    }
}
const UsersContainer = connect(mapStateToProps, {
    toogleFollowingInProgressUser,
    setCurrentPage,
    getUsers,
    toogleFollowStatus,
    setUserData,
    setAnotherUserIdSucsess
})(UsersApiContainer);

export default UsersContainer;

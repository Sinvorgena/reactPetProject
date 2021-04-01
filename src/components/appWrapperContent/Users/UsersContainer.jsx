import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toogleIsLoadingAC,
    unfollowAC
} from "../../../redux/UsersReducer";
import * as axios from "axios"
import Users from "./Users";
import preloader from "../../../assets/829.gif";
import s from "./UsersContainer.module.css"
import Preloader from "../../Preloader/Preloader";

class UsersApiContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numberOfUsersOnPage}&page=${this.props.currentPage}`, {
            headers: {
                'API-KEY': '818b16ba-6497-42b1-8359-46d83b14e351'
            }
        })
            .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.toogleIsLoading(true)
                }
            )

    }

    getUsers = () => {
        setTimeout(() => {
            this.props.toogleIsLoading(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.numberOfUsersOnPage}&page=${this.props.currentPage}`, {
                headers: {
                    'API-KEY': '818b16ba-6497-42b1-8359-46d83b14e351'
                }
            })
                .then(response => {
                        this.props.setUsers(response.data.items)
                        this.props.toogleIsLoading(false)
                    }
                )
        }, 100)
    }
    render = () => {

        return <>
            {this.props.isLoading?
                <Preloader/>:""}
            <Users getUsers={this.getUsers}
                   usersData={this.props.usersData}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   setCurrentPage={this.props.setCurrentPage}
                   currentPage={this.props.currentPage}
                   numberOfPages={this.props.numberOfPages}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.Users.usersData,
        numberOfPages: Math.ceil(state.Users.totalUsersCount / state.Users.numberOfUsersOnPage),
        numberOfUsersOnPage: state.Users.numberOfUsersOnPage,
        currentPage: state.Users.currentPage,
        totalUsersCount: state.Users.totalUsersCount,
        isLoading: state.Users.isLoading
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (count) => {
            dispatch(setTotalUsersCountAC(count))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        toogleIsLoading: (isLoading) => {
            dispatch(toogleIsLoadingAC(isLoading))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiContainer);

export default UsersContainer;

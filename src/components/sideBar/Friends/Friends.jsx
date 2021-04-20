import s from "./Friends.module.css"
import FriendItem from "./FriendItem/FriendItem";
import {connect} from "react-redux";

import React from "react";
import {setUserData} from "../../../redux/UsersReducer";

class Friends extends React.Component {
    componentDidMount() {
        this.props.setUserData()
    }

    state = {
        friendTrueData: this.props.followingUsersData.map((el) => (<FriendItem avatar={el.photos.small} name={el.name}/>))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.followingUsersData.length !== this.props.followingUsersData.length){
            this.setState({
                friendTrueData: this.props.followingUsersData.map((el) => (<FriendItem avatar={el.photos.small} name={el.name}/>))
            })
        }
    }

    render() {
        return (
            <div className={s.content}>
                <div className={s.label}>Friends</div>
                <div className={s.Box}>
                    {this.state.friendTrueData}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        followingUsersData: state.Users.followingUsersData,
        usersData: state.Users.usersData
    }
}
export default connect(mapStateToProps, {setUserData})(Friends);
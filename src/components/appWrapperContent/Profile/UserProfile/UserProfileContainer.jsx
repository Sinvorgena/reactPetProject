
import React from "react";
import {
    addAvatarActionCreator,
    changeAvatarActionCreator,
    nextAvatarActionCreator,
    prevAvatarActionCreator
} from "../../../../redux/ProfileReducer";

import UserProfile from "./UserProfile";
import {connect} from "react-redux";




const mapStateToProps = (state)=>{
    return{
        mainAvatar:  state.Profile.mainAvatar,
        avatarUrlData: state.Profile.avatarUrlData,
        userInfoDate: state.Profile.userInfoDate
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addAvatar: (url)=> {
            dispatch(addAvatarActionCreator(url))
        },
        changeAvatar:() => {
            dispatch(changeAvatarActionCreator())
        },
        nextAvatar: (element)=>{
            dispatch(nextAvatarActionCreator(element))
        },
        prevAvatar: (element)=>{
            dispatch(prevAvatarActionCreator(element))
        }
    }
}
const UserProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

export default UserProfileContainer;

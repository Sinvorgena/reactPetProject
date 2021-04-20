import s from "./UserInfo.module.css"
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getUserProfileStatus, setUserProfile, setUserProfileStatus} from "../../../../../redux/ProfileReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


let ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.mainStatus)

    let activateEditMode = ()=>{
        if(props.isWatchNow){
        } else {
            setEditMode(true)
        }
    }
    useEffect(()=>{
        setStatus(props.mainStatus)
    }, [props.mainStatus])
    let deactivateEditMode = ()=>{
        if(props.isWatchNow){
        } else {
            debugger
            setEditMode(false)
            props.setUserProfileStatus(status)
        }
    }
    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.statusBox}>
            {!editMode &&
            <div>
                    <span onClick={activateEditMode}>{props.isWatchNow?props.anotherUserStatus : (props.mainStatus?props.mainStatus : "-----")}</span>
            </div>
            }
            {editMode &&
            <div>
                <input value={status} autoFocus={true}
                    onBlur={deactivateEditMode}
                    onChange={onChangeStatus}
                    type="text"/>
            </div>
            }
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        isWatchNow: state.Profile.anothersUserInfo[0].isWatchNow,
        mainUserId: state.auth.mainUserId,
        mainStatus: state.Profile.userInfoDate[0].status,
        anotherUserStatus: state.Profile.anothersUserInfo[0].status
    }
}


export default compose(
    connect(mapStateToProps, {
        getUserProfileStatus,
        setUserProfileStatus
    }),
    withRouter
)(ProfileStatus);
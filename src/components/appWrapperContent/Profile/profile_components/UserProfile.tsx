import s from "./UserProfile.module.scss"
import UserInfo from "./userProfile_components/UserInfo";
import React, {useState} from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import userAvatar from "../../../../assets/profile-02-512.png";
import ChangeUserInfo from "./userProfile_components/UserInfoForm";
import ProfileStatus from "./userProfile_components/ProfileStatus";
import { savePhoto_thunkC } from "../../../../redux/profileReducer";
import {getIsAuth_selector, getMainId_selector, getProfile_selector, getProfileEditStatus_selector, getStatus_selector} from "../../../../Selectors/Selectors";
import {useDispatch, useSelector} from "react-redux";
import {appStateType} from "../../../../redux/redux-store";
import {profileType} from "../../../../types/types";

type props ={
    isOwner: boolean
}

let UserProfile:React.FC<props> = (props) => {
    let authorizedUserId = useSelector((state:appStateType)=>getMainId_selector(state))
    let isAuth = useSelector((state:appStateType) => getIsAuth_selector(state))
    let profileEditStatus = useSelector((state:appStateType) => getProfileEditStatus_selector(state))
    let profile:profileType | null = useSelector((state:appStateType) => getProfile_selector(state))
    let status = useSelector((state:appStateType) => getStatus_selector(state))
    let [editMode, setEditMode] = useState(false)
    let dispatch = useDispatch()
    return (
        <div className={s.content}>
            <div className={s.avatarBox}>
                <div className={s.avatar}>
                    <img src={profile?.photos.small || userAvatar} alt=""/>
                </div>
                {props.isOwner ? <input className={s.changeAvatarBox} onChange={(event) => {
                    dispatch(savePhoto_thunkC(event.target.files?event.target.files[0]:''))
                }
                } type="file"/> : ""}
            </div>

            {props.isOwner ? editMode ? "" : <button className={s.editProfileInfoBtn} onClick={() => {
                setEditMode(!editMode)
            }}>Edit profile info</button> : ""}
            <ProfileStatus/>
            {editMode
                ? <ChangeUserInfo editMode={editMode}
                                  setEditMode={setEditMode}
                                  profile={profile}
                  />
                : <UserInfo profile={profile}/>}
        </div>
    )
}

export default compose(
    withRouter,
    React.memo
)(UserProfile);


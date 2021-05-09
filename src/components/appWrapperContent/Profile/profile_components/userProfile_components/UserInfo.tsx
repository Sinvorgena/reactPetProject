import s from "./UserInfo.module.scss"
import React from "react";
import {profileType} from "../../../../../types/types";
import Contact from "../../../../common/Contact";
import {useSelector} from "react-redux";
import {appStateType} from "../../../../../redux/redux-store";
import {getProfile_selector} from "../../../../../Selectors/Selectors";


let UserInfo: React.FC = () => {
    let profile = useSelector((state: appStateType) => getProfile_selector(state))
    return (
        <div className={s.content}>
            <div className={s.name}>{profile?.fullName}</div>
            <div className={s.status}/>
            <div className={s.info}>
                <div className={s.aboutMe}>
                    <span>About me:</span>{profile?.aboutMe}
                </div>
                <div className={s.LookForAJob}>
                    <span>Looking for a job:</span>{profile?.lookingForAJob ? "yes" : "no"}</div>
                <div className={s.LookForAJobDesc}>
                    <span>My professional skills:</span>{profile?.lookingForAJobDescription}</div>
                <div className={s.Contacts}>
                    <span>Contacts:</span>
                    <div className={s.contactFields}>

                        {profile ? (Object.keys(profile.contacts)).map(contactTitle =>
                                <Contact contactTitle={contactTitle}
                                         contactValue={contactTitle}/>)
                            : ""}
                    </div>
                </div>
            </div>

        </div>
    )
}


export default React.memo(UserInfo);
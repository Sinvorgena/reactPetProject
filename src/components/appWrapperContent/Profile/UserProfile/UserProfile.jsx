import s from "./UserProfile.module.css"
import UserInfo from "./UserInfo/UserInfo";
import React from "react";
import ChangeAvatar from "./ChangeAvatar/ChangeAvatar";
import {getUserProfileStatus} from "../../../../redux/ProfileReducer";


let UserProfile = (props) => {
    console.log(props)
    let changeAvatarBox = React.createRef()
    let avatarElement = React.createRef()
    let urlInput = React.createRef()
    let allAvatarElement = React.createRef()

    let allAvatar
    if (props.isWatchNow) {
        allAvatar = ""
    } else {
        allAvatar =
            props.avatarUrlData.map(el => <ChangeAvatar avatarUrl={el.url}/>
            )
    }
    let addAvatar = () => {
        if (!props.isWatchNow) {
            props.addAvatar(urlInput.current.value)
            urlInput.current.value = ""
        }
    }

    let changeAvatar = () => {
        if (!props.isWatchNow) {
            props.changeAvatar()
            if (changeAvatarBox.current.style.opacity === "1") {
                changeAvatarBox.current.style.opacity = "0"
            } else {
                changeAvatarBox.current.style.opacity = "1"

            }
        }
    }


    let nextAvatar = () => {
        if (!props.isWatchNow) {
            props.nextAvatar(avatarElement.current.attributes.src.nodeValue)
        }
    }
    let prevAvatar = () => {
        if (!props.isWatchNow) {
            props.prevAvatar(avatarElement.current.attributes.src.nodeValue)
        }
    }
    let MainUserInfo
    if(props.isWatchNow){
        MainUserInfo=""
    } else{
        debugger
        MainUserInfo = props.userInfoDate
            .map(el => <UserInfo
                name={el.name}
                status={props.status}
                birthdate={el.birthdate}
                city={el.city}
                userId={props.userId}
                education={el.education}
                webSite={el.webSite}/>)
    }
    let AnotherUserInfo
    if(props.isWatchNow){
        AnotherUserInfo = props.anothersUserInfo
            .map(el => <UserInfo
                name={el.fullName}
                id={el.id}
            />)
    } else {
        AnotherUserInfo=""
    }

    return (
        <div className={s.content}>
            <div className={s.avatarBox}>
                <div className={s.avatar} onClick={changeAvatar}>
                    <img ref={avatarElement} src={props.mainAvatar} alt=""/>
                </div>

                <div className={s.changeAvatarBox} ref={changeAvatarBox}>
                    <div className={s.allAvatar}
                         ref={allAvatarElement}>{allAvatar}</div>
                    <input type="text" placeholder={"New avatar url..."}
                           className={s.urlInput} ref={urlInput}/>
                    <button className={s.prevBtn} onClick={prevAvatar}>prev
                    </button>
                    <button className={s.nextBtn} onClick={nextAvatar}>next
                    </button>
                    <button className={s.addBtn} onClick={addAvatar}>add
                    </button>
                </div>
            </div>
            {props.isWatchNow ? AnotherUserInfo : MainUserInfo}
        </div>
    )
}

export default UserProfile;



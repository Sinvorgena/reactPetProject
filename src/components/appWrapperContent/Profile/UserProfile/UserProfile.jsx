import s from "./UserProfile.module.css"
import UserInfo from "./UserInfo/UserInfo";
import React from "react";
import ChangeAvatar from "./ChangeAvatar/ChangeAvatar";



let UserProfile = (props) => {
    let changeAvatarBox = React.createRef()
    let avatarElement = React.createRef()
    let urlInput = React.createRef()
    let allAvatarElement = React.createRef()



    let allAvatar =
        props.avatarUrlData.map(el=><ChangeAvatar avatarUrl = {el.url} />
        )
    let addAvatar = ()=> {
        props.addAvatar(urlInput.current.value)
        urlInput.current.value = ""
    }

    let changeAvatar = () => {
        props.changeAvatar()
            if (changeAvatarBox.current.style.opacity === "1") {
                changeAvatarBox.current.style.opacity = "0"
            } else {
                changeAvatarBox.current.style.opacity = "1"

            }
        }

    let nextAvatar = ()=>{
        props.nextAvatar(avatarElement.current.attributes.src.nodeValue)
    }
    let prevAvatar = ()=>{
        props.prevAvatar(avatarElement.current.attributes.src.nodeValue)
    }

    let userInfo = props.userInfoDate
        .map(el => <UserInfo
            name={el.name}
            birthdate={el.birthdate}
            city={el.city}
            education={el.education}
            webSite={el.webSite}/>)
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
            {userInfo}
        </div>
    )
}

export default UserProfile;

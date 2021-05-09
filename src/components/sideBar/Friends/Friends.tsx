import s from "./Friends.module.scss"
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getFollowingUsersData_selector} from "../../../Selectors/Selectors";
import {appStateType} from "../../../redux/redux-store";
import FriendItem from "./FriendItem";


let Friends: React.FC = () => {
    let followingUsersData = useSelector((state: appStateType) => getFollowingUsersData_selector(state).map((el: any) => (
        <FriendItem key={el} avatar={el.photos.small} name={el.name}/>)))
    let [friendTrueData, setFriendTrueData] = useState(followingUsersData)

    useEffect(() => {
        setFriendTrueData(followingUsersData)
    }, [followingUsersData])

    return (
        <div className={s.content}>
            <div className={s.label}>Friends</div>
            <div className={s.Box}>
                {friendTrueData}
            </div>
        </div>
    )

}

export default React.memo(Friends);
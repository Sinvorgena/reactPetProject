import s from "./Users.module.scss";
import {NavLink} from "react-router-dom";
import userAvatar from "../../../assets/profile-02-512.png";
import React from "react";
import cn from "classnames"
import {toggleFollowStatus_thunkC} from "../../../redux/usersReducer";
import {useDispatch} from "react-redux";
import {userType} from "../../../types/types";

type props = {
    user: userType
    usersInProgressFollowing: Array<number>
}
let User:React.FC<props> = (props) => {
    let dispatch = useDispatch()
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img src={props.user.photos.small != null ?
                        props.user.photos.small : userAvatar} alt=""/>
                </NavLink>
            </div>
            <div className={s.ToggleFollowBtn}>
                <button disabled={props.usersInProgressFollowing.some(id =>
                    id === props.user.id)}
                        className={cn(s.ToggleFollowBtn,
                            {[s.follow]: props.user.followed},
                            {[s.unfollow]: !props.user.followed})}
                        onClick={() => {
                            dispatch(toggleFollowStatus_thunkC(props.user))
                        }}>
                    <span>{props.user.followed?"Unfollow":"Follow"}</span>
                </button>
            </div>
            <div className={s.userInfo}>
                <div className={s.fullName}>{props.user.name}</div>
                <div className={s.status}>{"el.status"}</div>
                <div className={s.country}>{"el.country"}</div>
                <div className={s.city}>{"el.city"}</div>
            </div>
        </div>
    )
}

export default React.memo(User)
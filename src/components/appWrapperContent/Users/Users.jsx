import React from "react";
import s from "./Users.module.css";
import * as axios from "axios"


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                    this.props.setUsers(response.data.items)
                }
            )
    }
    render = () => {
        return (
            <div className={s.UsersPage}>
                <div className={s.title}>Users</div>
                <div className={s.UsersField}>
                    <div className={s.UsersField}>
                        {this.props.usersData.map(el=>
                        <div className={s.item}>
                            <div className={s.avatar}>
                                <img src={el.userAvatarUrl} alt=""/>
                            </div>
                            <div className={s.ToogleFollowbox}>
                                <button
                                    className={el.followed ?
                                        `${s.ToogleFollowBtn + " " + s.follow}`:
                                        `${s.ToogleFollowBtn + " " + s.unfollow}`}
                                    onClick={(e) => {
                                        if (el.followed) {
                                            this.props.unfollow(el.id)
                                        } else {
                                            this.props.follow(el.id)
                                        }
                                    }}>
                                    {el.followed?<span>Unfollow</span>
                                        :<span>Follow</span>}
                                </button>
                            </div>
                            <div className={s.userInfo}>
                                <div className={s.fullname}>{el.name}</div>
                                <div className={s.status}>{"el.status"}</div>
                                <div className={s.country}>{"el.country"}</div>
                                <div className={s.city}>{"el.city"}</div>
                            </div>
                        </div>)}
                    </div>
                </div>
                <button className={s.ShowMbutton}>Show more</button>
            </div>
        )
    }
}

export default Users;



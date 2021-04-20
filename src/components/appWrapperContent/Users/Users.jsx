import React from "react";
import s from "./Users.module.css";
import userAvatar from "../../../assets/profile-02-512.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    return (
        <div className={s.UsersPage}>
            <div className={s.title}>Users</div>
            <div className={s.UsersField}>
                <div className={s.UsersField}>
                    {props.usersData.map(el =>
                        <div className={s.item}>
                            <div className={s.avatar}>
                                <NavLink onClick={()=>{props.setAnotherUserIdSucsess(el.id)}} to={`/profile/${el.id}`}>
                                    <img src={el.photos.small != null ?
                                        el.photos.small : userAvatar} alt=""/>
                                </NavLink>
                            </div>
                            <div className={s.ToogleFollowbox}>
                                <button disabled={props.usersInProgressFollowing.some(id => id == el.id)}
                                        className={el.followed ?
                                            `${s.ToogleFollowBtn + " " + s.follow}` :
                                            `${s.ToogleFollowBtn + " " + s.unfollow}`}
                                        onClick={(e) => {
                                            props.toogleFollowStatus(el)
                                        }}>
                                    {el.followed ? <span>Unfollow</span>
                                        : <span>Follow</span>}
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
            <div className={s.paginnatorBox}>
                <div className={s.goLeftPage}>
                    {props.currentPage === 1 ?
                        <button disabled={props.isLoading} className={s.MaxToLeft} onClick={() => {
                            props.setCurrentPage(1)
                            props.getUsers()
                        }}><span></span></button> :
                        <button disabled={props.isLoading} className={s.MaxToLeft} onClick={() => {
                            props.setCurrentPage(1)
                            props.getUsers()
                        }}><span></span></button>}
                    {props.currentPage === 1 ?
                        <button disabled={props.isLoading} className={s.OneToLeft} onClick={() => {
                            if (props.currentPage > 1) {
                                props.setCurrentPage(props.currentPage - 1)
                                props.getUsers()
                            }
                        }}></button> : <button className={s.OneToLeft} disabled={props.isLoading} onClick={() => {
                            if (props.currentPage > 1) {
                                props.setCurrentPage(props.currentPage - 1)
                                props.getUsers()
                            }
                        }}></button>}

                </div>
                <div className={s.pagesBox}>
                    <span>
                        {props.currentPage}
                    </span>
                    <span>
                        .
                        .
                        .
                    </span>
                    <span>
                        {props.numberOfPages}
                    </span>
                </div>
                <div className={s.goRigthPage}>
                    {props.currentPage === props.numberOfPages ?
                        <button disabled={props.isLoading} className={s.OneToRigth}
                                onClick={() => {
                                    if (props.currentPage < props.numberOfPages) {
                                        props.setCurrentPage(props.currentPage + 1)
                                        props.getUsers()
                                    }
                                }}>

                        </button> :
                        <button className={s.OneToRigth} disabled={props.isLoading}
                                onClick={() => {
                                    if (props.currentPage < props.numberOfPages) {
                                        props.setCurrentPage(props.currentPage + 1)
                                        props.getUsers()
                                    }
                                }}>

                        </button>
                    }
                    {props.currentPage === props.numberOfPages ?
                        <button disabled className={s.MaxToRigth} disabled={props.isLoading}
                                onClick={() => {
                                    props.setCurrentPage(props.numberOfPages)
                                    props.getUsers()
                                }}>
                            <span></span>
                        </button> :
                        <button className={s.MaxToRigth} disabled={props.isLoading} onClick={() => {
                            props.setCurrentPage(props.numberOfPages)
                            props.getUsers()
                        }}>
                            <span></span>
                        </button>}
                </div>
            </div>
        </div>
    )
}

export default Users;

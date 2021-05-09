import s from "./Users.module.scss";
import Paginator from "../../common/Paginator";
import User from "./User";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage_selector,
    getNumberOfPages_selector,
    getNumberOfUsersOnPage_selector,
    getUsersData_selector,
    getUsersInProgressFollowing_selector
} from "../../../Selectors/Selectors";
import {getUsers_thunkC, usersActions} from "../../../redux/usersReducer";
import {userType} from "../../../types/types";
import {appStateType} from "../../../redux/redux-store";


let Users: React.FC = () => {
    let usersData: Array<userType> = useSelector((state: appStateType) => getUsersData_selector(state))
    let numberOfPages: number = useSelector((state: appStateType) => getNumberOfPages_selector(state))
    let numberOfUsersOnPage: number = useSelector((state: appStateType) => getNumberOfUsersOnPage_selector(state))
    let currentPage: number = useSelector((state: appStateType) => getCurrentPage_selector(state))
    let usersInProgressFollowing: Array<number> = useSelector((state: appStateType) => getUsersInProgressFollowing_selector(state))
    let dispatch = useDispatch()
    useEffect(() => {
        debugger
        dispatch(getUsers_thunkC(numberOfUsersOnPage, currentPage))
    }, [currentPage])
    return (
        <div className={s.UsersPage}>
            <div className={s.title}>Users</div>
            <div className={s.UsersField}>
                <div className={s.UsersField}>
                    {usersData.map(user =>
                        <User user={user} usersInProgressFollowing={usersInProgressFollowing}
                        />
                    )}
                </div>
            </div>
            <Paginator numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={usersActions.setCurrentPage_action}
            />
        </div>
    )
}
export default React.memo(Users);

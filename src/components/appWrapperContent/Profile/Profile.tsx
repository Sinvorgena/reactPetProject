import s from "./Profile.module.scss"
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatus_thunkC, getUserProfile_thunkC} from "../../../redux/profileReducer";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getMainId_selector} from "../../../Selectors/Selectors";
import MainScreen from "./profile_components/MainScreen";
import Posts from "./profile_components/Posts";
import UserProfile from "./profile_components/UserProfile";
import {appStateType} from "../../../redux/redux-store";

type props={
    match:{
        params:{
            userId: number
        }
    }
    history:Array<any>
}

let Profile:React.FC<props> = (props) => {
    let userId:number = props.match.params.userId;
    let isOwner = !userId
    let authorizedUserId = useSelector((state:appStateType)=>getMainId_selector(state))
    let dispatch = useDispatch()

    useEffect(() => {
        if (!userId && authorizedUserId!==null) {

            userId = authorizedUserId
            if (!userId) {
                props.history.push("/login")
            }
        }
        dispatch(getUserProfile_thunkC(userId))
        dispatch(getStatus_thunkC(userId))
    }, [props.match.params.userId])
    return (
        <div className={s.content}>
            <MainScreen/>
            {/*<UserProfile isOwner={isOwner}/>*/}
            <Posts/>
        </div>
    )
}

export default compose(
    withRouter,
    withAuthRedirect,
    React.memo
)(Profile);
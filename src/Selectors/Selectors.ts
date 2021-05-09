import {appStateType} from "../redux/redux-store";


export let getInitialized_selector = (state:appStateType) =>{
    return state.app.initialized
}
export let getIsAuth_selector = (state:appStateType) =>{
    return state.auth.isAuth
}
export let getLogin_selector = (state:appStateType)  =>{
    return state.auth.login
}
export let getMainId_selector = (state:appStateType)  =>{
    return state.auth.mainUserId
}
export let getPostMessageData_selector = (state:appStateType)  =>{
    return state.profile.posts
}
export let getDialogsData_selector = (state:appStateType)  =>{
    return state.dialogs.dialogsData
}
export let getMessageData_selector = (state:appStateType)  =>{
    return state.dialogs.messageData
}
export let getTotalUsersCount_selector = (state:appStateType)  =>{
    return state.users.totalUsersCount
}
export let getNumberOfUsersOnPage_selector = (state:appStateType)  =>{
    return state.users.numberOfUsersOnPage
}
export let getCurrentPage_selector = (state:appStateType)  =>{
    return state.users.currentPage
}
export let getIsLoading_selector = (state:appStateType)  =>{
    return state.users.isLoading
}
export let getIsFollowingInProgress_selector = (state:appStateType)  =>{
    return state.users.isFollowingInProgress
}
export let getUsersInProgressFollowing_selector = (state:appStateType)  =>{
    return state.users.usersInProgressFollowing
}
export let getCaptchaUrl_selector = (state:appStateType)  =>{
    return state.auth.captchaUrl
}
export let getProfile_selector = (state:appStateType)  =>{
    return state.profile.profile
}
export let getStatus_selector = (state:appStateType)  =>{
    return state.profile.status
}
export let getProfileEditStatus_selector = (state:appStateType)  =>{
    return state.profile.profileEditStatus
}
export let getUsersData_selector = (state:appStateType)  =>{
    return state.users.usersData
}
export let getNumberOfPages_selector = (state:appStateType)  =>{
    return Math.ceil(getTotalUsersCount_selector(state) / getNumberOfUsersOnPage_selector(state))
}
export let getFollowingUsersData_selector= (state:appStateType)  =>{
    return state.users.followingUsersData
}






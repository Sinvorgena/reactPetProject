export let getInitialized = state =>{
    return state.app.initialized
}
export let getIsAuth = state =>{
    return state.auth.isAuth
}
export let getLogin = state =>{
    return state.auth.login
}
export let getMainId = state =>{
    return state.auth.mainUserId
}
export let getIsWatchNow = state =>{
    return state.Profile.anothersUserInfo[0].isWatchNow
}
export let getAnotherUserMainAvatar = state =>{
    return state.Profile.anothersUserInfo[0].photos.small
}
export let getAnothersUserInfo = state =>{
    return state.Profile.anothersUserInfo
}
export let getMainAvatar = state =>{
    return state.Profile.mainAvatar
}
export let getAvatarUrlData = state =>{
    return state.Profile.avatarUrlData
}
export let getUserId = state =>{
    return state.Profile.userInfoDate.status
}
export let getStatus = state =>{
    return state.Profile.anothersUserInfo
}
export let getUserInfoDate = state =>{
    return state.Profile.userInfoDate
}
export let getPostMessageData = state =>{
    return state.Profile.postMessageData
}
export let getDialogsData = state =>{
    return state.Dialogs.dialogsData
}
export let getMesasageData = state =>{
    return state.Dialogs.messageData
}
export let getTotalUsersCount = state =>{
    return state.Users.totalUsersCount
}
export let getNumberOfUsersOnPage = state =>{
    return state.Users.numberOfUsersOnPage
}
export let getCurrentPage = state =>{
    return state.Users.currentPage
}
export let getIsLoading = state =>{
    return state.Users.isLoading
}
export let getIsFollowingInProgress = state =>{
    return state.Users.isFollowingInProgress
}
export let getUsersInProgressFollowing = state =>{
    return state.Users.usersInProgressFollowing
}





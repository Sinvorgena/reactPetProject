import {Api} from "../api/api";

let addPost = "ADD-POST"
let changeAvatar = "CHANGE-AVATAR"
let nextAvatar = "NEXT-AVATAR"
let prevAvatar = "PREV-AVATAR"
let addAvatar = "ADD-AVATAR"
let TOOGLE_IS_WATCHING_ANOTHER_USER_NOW = "TOOGLE_IS_WATCHING_ANOTHER_USER_NOW"
let SET_ANOTHERS_USER_INFO = "SET_ANOTHERS_USER_INFO"
let SET_MAIN_USER_INFO = "SET_MAIN_USER_INFO"
let GET_USER_PROFILE_STATUS_SUCSESS = "GET_USER_PROFILE_STATUS_SUCSESS"
// name: "Dmitry K.",
//     birthdate: "2 january",
//     city: "Minsk",
//     education: "BSU'11",
//     webSite: "https://it-kamasutra.com",
//     status: ""

let ProfileDefaulState = {
    userInfoDate: [
        {
            name: "",
            birthdate: "",
            city: "",
            education: "",
            webSite: "",
            status: ""
        }
    ],
    anothersUserInfo: [{
        isWatchNow: false,
        fullName: "",
        aboutMe: "",
        photos: {
            large: "",
            small: ""
        },
        status: ""
    }],
    postMessageData: [
        {id: 1, message: "Hi, how are you?", likeCounter: "20", user: "vlad"},
        {id: 2, message: "Привет, как ты?", likeCounter: "15", user: "vlad"},
        {id: 3, message: "Пgdgdfgdf?", likeCounter: "12", user: "vlad"}
    ],
    avatarUrlData: [
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU"
        },
        {id: 2, url: "https://html5css.ru/css/img_lights.jpg"},
        {
            id: 3,
            url: "https://external-preview.redd.it/wl_OMEWEzDWAyDGU8-k469mI89a0HvNryasEQHxfceQ.jpg?auto=webp&s=f739d6643f9a51389369f9bdd248443f7bca68ab"
        }
    ],
    mainAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU",
}

export const ProfileReducer = (state = ProfileDefaulState, action) => {
    let copyState;
    switch (action.type) {
        case addPost:
            let newPost = {
                message: action.text,
                likeCounter: 5,
                user: "vlad"
            }
            copyState = {
                ...state,
                postMessageData: [...state.postMessageData, newPost],
            }
            return copyState
        case nextAvatar:
            copyState = {
                ...state,
                avatarUrlData: [...state.avatarUrlData]
            }
            for (let key of copyState.avatarUrlData) {
                if (action.avatarUrl === key.url) {
                    if (copyState.avatarUrlData[key.id]) {
                        copyState.mainAvatar = copyState.avatarUrlData[key.id].url
                    }
                }
            }
            return copyState
        case prevAvatar:
            copyState = {
                ...state,
                avatarUrlData: [...state.avatarUrlData]
            }
            for (let key of copyState.avatarUrlData) {
                if (action.avatarUrl === key.url) {
                    if (copyState.avatarUrlData[key.id - 2]) {
                        copyState.mainAvatar = copyState.avatarUrlData[key.id - 2].url
                    }

                }
            }
            return copyState

        case addAvatar:
            copyState = {
                ...state,
                avatarUrlData: [...state.avatarUrlData]
            }
            if (action.avatarUrl) {
                let newAvatar = {
                    id: copyState.avatarUrlData[copyState.avatarUrlData.length - 1].id + 1,
                    url: action.avatarUrl
                }
                copyState.mainAvatar = newAvatar.url
                copyState.avatarUrlData.push(newAvatar)
            }

            return copyState
        case TOOGLE_IS_WATCHING_ANOTHER_USER_NOW:
            copyState = {
                ...state
            }
            copyState.anothersUserInfo[0].isWatchNow = action.isWatchNow
            return copyState
        case SET_MAIN_USER_INFO:
            copyState = {
                ...state
            }
            debugger
            copyState.userInfoDate[0].name = action.mainUserInfo.fullName
            copyState.userInfoDate[0].aboutMe = action.mainUserInfo.aboutMe
            copyState.userInfoDate[0].status = action.mainUserInfo.responseStatus
            return copyState
        case SET_ANOTHERS_USER_INFO:
            copyState = {
                ...state
            }
            copyState.anothersUserInfo[0].fullName = action.anothersUserInfo.fullName
            copyState.anothersUserInfo[0].aboutMe = action.anothersUserInfo.aboutMe
            copyState.anothersUserInfo[0].photos.small = action.anothersUserInfo.photos.small
            copyState.anothersUserInfo[0].status = action.anothersUserInfo.status
            return copyState

        case GET_USER_PROFILE_STATUS_SUCSESS:
            copyState = {
                ...state
            }
            copyState.userInfoDate[0].status = action.UserTextStatus
            return copyState
    }
    return state
}

export let addPostActionCreator = (text) => ({
    type: addPost,
    text
})
export let changeAvatarActionCreator = (url) => ({
    type: changeAvatar,
    avatarUrl: url
})
export let nextAvatarActionCreator = (url) => ({
    type: nextAvatar,
    avatarUrl: url
})
export let prevAvatarActionCreator = (url) => ({
    type: prevAvatar,
    avatarUrl: url
})
export let addAvatarActionCreator = (url) => ({
    type: addAvatar,
    avatarUrl: url
})

export let toogleIsWatchingAnotherUserNow = (isWatchNow) => ({
    type: TOOGLE_IS_WATCHING_ANOTHER_USER_NOW,
    isWatchNow
})
export let setAnotherUsetInfo = (anothersUserInfo) => ({
    type: SET_ANOTHERS_USER_INFO,
    anothersUserInfo
})
export let setMainUserInfo = (mainUserInfo) => ({
    type: SET_MAIN_USER_INFO,
    mainUserInfo
})
export let setUserProfileStatusSucsess = (UserTextStatus) => ({
    type: GET_USER_PROFILE_STATUS_SUCSESS,
    UserTextStatus
})


export let setUserProfile = (userId, toogleIsLoading) => {
    return (dispatch) => {
        if (userId) {
            dispatch(toogleIsWatchingAnotherUserNow(true))
            dispatch(toogleIsLoading(true))
            Api.profile.getUserProfile(userId)
                .then(response => {
                        Api.profile.getUserProfileStatus(userId).then(status=>{
                            debugger
                            dispatch(setAnotherUsetInfo({...response, status}))
                            dispatch(toogleIsLoading(false))
                        })

                    }
                )
        } else {
            dispatch(toogleIsWatchingAnotherUserNow(false))
        }
    }
}
export let getUserProfileStatus = (mainUserId) => {
    return (dispatch) => {
        if (mainUserId) {
            Api.profile.getUserProfileStatus(mainUserId)
                .then(response => {
                        dispatch(setUserProfileStatusSucsess(response))
                    }

                )

        }
    }
}
export let setUserProfileStatus = (text) => {
    return (dispatch) => {
        Api.profile.setUserProfileStatus(text)
            .then(response => {
                debugger
                    dispatch(setUserProfileStatusSucsess(text))
                }
            )
    }
}

window.ProfileDefaulState = ProfileDefaulState



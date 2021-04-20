import {Api} from "../api/api";
import {stopSubmit} from "redux-form";
import {setMainUserInfo} from "./ProfileReducer";

let SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"
let SET_ANOTHER_USER_ID = "SET_ANOTHER_USER_ID"

let authDefaulState = {
    login: null,
    mainUserId: null,
    email: null,
    isAuth: false,
    anotherUserId: null
}

export const authReducer = (state = authDefaulState, action) => {
    let copyState;
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            copyState = {
                ...state,
                ...action.userAuthdata
            }
            return copyState
        case SET_ANOTHER_USER_ID:
            copyState = {
                ...state,
                anotherUserId: action.userId
            }
            return copyState
        default:
            return state
    }
}

export let setAuthUserDataSucsess = (login, email, mainUserId, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    userAuthdata: {login, mainUserId, email, isAuth}
})
export let setAnotherUserIdSucsess = (userId) => ({
    type: SET_ANOTHER_USER_ID,
    userId
})

export let setAuthUserData = () => {
    return (dispatch) => {
        return Api.auth.getAuthMe().then(response => {
                if (response.resultCode === 0) {
                    Api.profile.getUserProfile(response.data.id).then((responsUser)=>{
                        Api.profile.getUserProfileStatus(response.data.id).then((responseStatus)=>{
                            dispatch(setMainUserInfo({...responsUser, responseStatus}))
                        })


                    })
                    dispatch(setAuthUserDataSucsess(response.data.login, response.data.email, response.data.id, true))
                }
            })
        }
}
export let logIn = (login, password) => {
    return (dispatch) => {
        Api.auth.logIn(login, password).then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData())
                } else {
                    dispatch(stopSubmit("Login", {_error: response.data.messages}))
                }

            }
        )
    }
}
export let logOut = () => {
    return (dispatch) => {
        Api.auth.logOut().then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserDataSucsess(null, null, null, false))
                }

            }
        )
    }
}


window.authDefaulState = authDefaulState



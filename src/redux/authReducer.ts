import {Api, ResultCodeEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {appActions, setInitialized_thunkC} from "./appReducer";
import {getStatus_thunkC, getUserProfile_thunkC} from "./profileReducer";
import {setUserData_thunkC} from "./usersReducer";
import {baseThunkAction, inferActionsTypes} from "./redux-store";

export type initialStateType = typeof initialState

let initialState = {
    login: null as null | string,
    mainUserId: null as null | number,
    email: null as null | string,
    isAuth: false,
    captchaUrl: null as null | string
}

const authReducer = (state:initialStateType = initialState, action:authActionsType ) => {
    let copyState;
    switch (action.type) {
        case "sn/auth/SET_AUTH_USER_DATA":
            copyState = {
                ...state,
                ...action.userAuthData
            }
            return copyState
        case "sn/auth/GET_CAPTCHA_URL":
            copyState = {
                ...state,
                captchaUrl: action.captchaUrl
            }
            return copyState
        default:
            return state
    }
}

type authActionsType = inferActionsTypes<typeof authActions | typeof importActions>


export const authActions = {
    setAuthUserDataSuccess_action: (login: string |null, email:string| null, mainUserId:number|null, isAuth:boolean) => ({
        type: "sn/auth/SET_AUTH_USER_DATA",
        userAuthData: {login, mainUserId, email, isAuth}
    } as const),
    getCaptchaUrlSuccess_action: (captchaUrl:string) => ({
        type: "sn/auth/GET_CAPTCHA_URL",
        captchaUrl
    } as const)
}
const importActions = {
    setInitializedSuccess_action: appActions.setInitializedSuccess_action
}


export let setAppData_thunkC = ():baseThunkAction<authActionsType> => async (dispatch) => {
    dispatch(appActions.setInitializedSuccess_action(true))
    let responseUserAuth = await Api.auth.getAuthMe_api()
    if (responseUserAuth.resultCode === 0) {
        await dispatch(authActions.setAuthUserDataSuccess_action(responseUserAuth.data.login, responseUserAuth.data.email, responseUserAuth.data.id, true))
        await dispatch(getStatus_thunkC(responseUserAuth.data.id))
        await dispatch(getUserProfile_thunkC(responseUserAuth.data.id))
        await dispatch(setUserData_thunkC())
    }
    dispatch(appActions.setInitializedSuccess_action(false))
}
export let setAuthUserData_thunkC = () => async (dispatch: Function) => {
    let response = await Api.auth.getAuthMe_api()
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(authActions.setAuthUserDataSuccess_action(response.data.login, response.data.email, response.data.id, true))
    }
}

export let logIn_thunkC = (login:string, password:string, rememberMe:boolean = false,captcha:string):baseThunkAction<authActionsType | FormAction>  => async (dispatch) => {
    let response = await Api.auth.logIn_api(login, password, rememberMe, captcha)
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(setInitialized_thunkC())
    } else {
        if(response.data.resultCode === ResultCodeEnum.CaptchaIsRequired){
            debugger
            dispatch(getCaptchaUrl_thunkC())
        }
        dispatch(stopSubmit("Login", {_error: response.data.messages}))
    }
}
export let getCaptchaUrl_thunkC = ():baseThunkAction<authActionsType> => async (dispatch) => {
    let response = await Api.security.getCaptchaUrl_api()
    debugger
    dispatch(authActions.getCaptchaUrlSuccess_action(response.data.url))
}
export let logOut_thunkC = () => async (dispatch:Function) => {
    let response = await Api.auth.logOut_api()
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(authActions.setAuthUserDataSuccess_action(null, null, null, false))
    }
}



export default authReducer
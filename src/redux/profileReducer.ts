import {Api, ResultCodeEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {contactsType, photosType, postType, profileType} from "../types/types";
import {baseThunkAction, inferActionsTypes} from "./redux-store";




type initialStateType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Bla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<postType>,
    profile: null as profileType | null,
    status: '',
    profileEditStatus: null as boolean | null
};


const profileReducer = (state = initialState, action: profileActionsTypes): initialStateType => {
    switch (action.type) {
        case "ADD_POST": {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        }
        case "SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SET_USER_PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SAVE_PHOTO_SUCCESS": {
            return {...state, profile: {...state.profile, photos: action.photos} as profileType}
        }

        case "DELETE_POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case "TOGGLE_PROFILE_EDIT_STATUS":
            return {...state, profileEditStatus: action.profileEditStatus}
        default:
            return state;
    }
}
type profileActionsTypes = inferActionsTypes<typeof profileActions>
type importActionsTypes = inferActionsTypes<typeof importActions>

export const profileActions = {
    addPost_action : (newPostText:string) => ({type: "ADD_POST", newPostText} as const),
    setUserProfile_action  : (profile:profileType) => ({type: "SET_USER_PROFILE", profile} as const),
    setStatus_action  : (status:string) => ({type: "SET_STATUS", status} as const),
    deletePost_action  : (postId:number) => ({type: "DELETE_POST", postId} as const),
    savePhoto_action  : (photos:photosType) => ({type: "SAVE_PHOTO_SUCCESS", photos} as const),
    toggleProfileEditStatus_action  : (profileEditStatus:boolean) => ({type: "TOGGLE_PROFILE_EDIT_STATUS", profileEditStatus} as const)
}
const importActions = {
    setInitializedSuccess_action: (boolean: boolean) => ({
        type: "SET_INITIALIZED",
        boolean
    })
}




export const getUserData_thunkC = (userId:number):baseThunkAction<profileActionsTypes | importActionsTypes>=> async (dispatch) => {
    dispatch(importActions.setInitializedSuccess_action(true))
    await dispatch(getUserProfile_thunkC(userId))
    await dispatch(getStatus_thunkC(userId))
    dispatch(importActions.setInitializedSuccess_action(false))
}

export const getUserProfile_thunkC = (userId:number|null):baseThunkAction<profileActionsTypes> => async (dispatch) => {
    const response = await Api.profile.getUserProfile_api(userId);
    dispatch(profileActions.setUserProfile_action(response));
}
export const savePhoto_thunkC = (filePhoto:any):baseThunkAction<profileActionsTypes> => async (dispatch) => {
    debugger
    const response = await Api.profile.setProfilePhoto_api(filePhoto);
    debugger
    dispatch(profileActions.savePhoto_action(response.data));
}

export const getStatus_thunkC = (userId:number):baseThunkAction<profileActionsTypes> => async (dispatch) => {
    let response = await Api.profile.getUserProfileStatus_api(userId);
    dispatch(profileActions.setStatus_action(response));
}

export const updateStatus_thunkC = (status:string):baseThunkAction<profileActionsTypes> => async (dispatch) => {
    let response = await Api.profile.setUserProfileStatus_api(status);

    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(profileActions.setStatus_action(status));
    }
}
export const setNewProfileInfo_thunkC = (aboutMe:string, fullName:string, contacts: contactsType,lookingForAJob:boolean, lookingForAJobDescription:string):baseThunkAction<profileActionsTypes | FormAction> => async (dispatch, getState) => {
    let profile = {
        aboutMe, fullName, contacts,
        lookingForAJob, lookingForAJobDescription
    }
    let response = await Api.profile.setProfile_api(profile);
    const userId = getState().auth.mainUserId
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(profileActions.toggleProfileEditStatus_action(true))
        dispatch(getUserProfile_thunkC(userId))
        debugger
    } else {
        dispatch(profileActions.toggleProfileEditStatus_action(false))
        let errorField = (response.data.messages[0].slice((response.data.messages[0].indexOf(">")+1), response.data.messages[0].length-1)).toLowerCase()
        dispatch(stopSubmit("userInfo", {"contacts":{[`${errorField}`]: response.data.messages[0].slice(0, response.data.messages[0].indexOf("("))}}))
    }
}

export default profileReducer;
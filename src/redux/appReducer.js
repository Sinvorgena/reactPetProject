import {Api} from "../api/api";
import {stopSubmit} from "redux-form";
import {setAuthUserData} from "./authReducer";

let SET_INITIALIZIED = "SET_INITIALIZIED"


let appDefaulState = {
    initialized: false
}

export const appReducer = (state = appDefaulState, action) => {
    let copyState;
    switch (action.type) {
        case SET_INITIALIZIED:
            copyState = {
                ...state,
                initialized: true
            }
            return copyState
        default:
            return state
    }
}

export let setInitializedSucsess = () => ({
    type: SET_INITIALIZIED
})

export let setInitialized = () => (dispatch) => {
        let promise = dispatch(setAuthUserData())
        Promise.all([promise]).then((response)=>{
            dispatch(setInitializedSucsess())
        })
}



window.appDefaulState = appDefaulState



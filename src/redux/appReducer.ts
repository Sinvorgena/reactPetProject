import {setAppData_thunkC} from "./authReducer";
import {appStateType, inferActionsTypes} from "./redux-store";
import {ThunkAction} from "redux-thunk";

type initialStateType = typeof initialState
let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action: appActionsTypes): initialStateType => {
    let copyState;
    switch (action.type) {
        case "sn/app/SET_INITIALIZED":
            copyState = {
                ...state,
                initialized: action.boolean,
            }
            return copyState
        default:
            return state
    }
}

export type appActionsTypes = inferActionsTypes<typeof appActions>

export const appActions = {
   setInitializedSuccess_action: (boolean: boolean) => ({
        type: "sn/app/SET_INITIALIZED",
        boolean
    } as const)
}


export let setInitialized_thunkC = ():ThunkAction<void, appStateType, unknown, appActionsTypes> => (dispatch) => {
    let promiseAuth = dispatch(setAppData_thunkC())
    Promise.all([promiseAuth])
    // Promise.all([promiseAuth]).then(() => {
    //
    // })
}

export default appReducer


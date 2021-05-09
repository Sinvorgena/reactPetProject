import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as reducerForm} from 'redux-form'
import appReducer from "./appReducer";

let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: reducerForm
})

export type baseThunkAction<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>


type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type appStateType = ReturnType<RootReducerType>

type propertiesTypes<T> = T extends  {[key: string]:infer U} ? U : never
export type inferActionsTypes<T extends {[key: string]:(...args: any[])=>any}> = ReturnType<propertiesTypes<T>>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store

export default store
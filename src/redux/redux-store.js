import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";
import {authReducer} from "./authReducer";
import thunkMidlewarenk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./appReducer";

let redusers = combineReducers({
    Profile: ProfileReducer,
    Dialogs: DialogsReducer,
    sideBar: SideBarReducer,
    Users: UsersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(redusers, applyMiddleware(thunkMidlewarenk))

window.store = store

export default store
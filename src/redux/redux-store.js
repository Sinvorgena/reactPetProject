import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {SideBarReducer} from "./SideBarReducer";
import {UsersReducer} from "./UsersReducer";

let redusers = combineReducers({
    Profile: ProfileReducer,
    Dialogs: DialogsReducer,
    sideBar: SideBarReducer,
    Users: UsersReducer
})

let store = createStore(redusers)

window.store = store

export default store
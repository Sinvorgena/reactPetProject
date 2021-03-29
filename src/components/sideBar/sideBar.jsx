import s from "./sideBar.module.css"
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const SideBar = (props) => {

    return (
        <nav className={s.nav}>
            <div className={s.box}>
                <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
            </div>
            <div className={s.box}>
                <NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.box}>
                <NavLink activeClassName={s.active} to="/feed">News</NavLink>
            </div>
            <div className={s.box}>
                <NavLink activeClassName={s.active} to="/music">Music</NavLink>
            </div>
            <div className={s.box}>
                <NavLink activeClassName={s.active} to="/setting">Settings</NavLink>
            </div>

            <Friends friendData={props.friendData}/>
            <div className={s.box}>
                <NavLink activeClassName={s.active} to="/users">Find users</NavLink>
            </div>
        </nav>
    )
}


export default SideBar;
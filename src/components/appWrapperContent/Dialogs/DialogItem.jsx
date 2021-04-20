import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";


let DialogItem = (props) => {
    return (
        <NavLink className={s.item} to={`/dialogs/${props.id}`}>
            <div className={s.avatar}></div>
            <div className={s.name}>{props.name}</div>
            <div className={`${s.status}`}></div>
        </NavLink>
    )
}


export default DialogItem;
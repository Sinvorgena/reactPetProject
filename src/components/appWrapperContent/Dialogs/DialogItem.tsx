import s from "./DialogItem.module.css"
import {NavLink} from "react-router-dom";
import React from "react";

type props = {
    id: number
    name: string
}
let DialogItem:React.FC<props> = (props) => {
    return (
        <NavLink className={s.item} to={`/dialogs/${props.id}`}>
            <div className={s.avatar}/>
            <div className={s.name}>{props.name}</div>
        </NavLink>
    )
}


export default React.memo(DialogItem);
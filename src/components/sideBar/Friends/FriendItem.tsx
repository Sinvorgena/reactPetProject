import s from "./Frienditem.module.scss"
import React from "react";

type props = {
    avatar: string
    name: string
}

let FriendItem:React.FC<props> = (props) => {

    return (
        <div className={s.Item}>
            <div className={s.avatar}><img src={props.avatar} alt=""/></div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default React.memo(FriendItem);
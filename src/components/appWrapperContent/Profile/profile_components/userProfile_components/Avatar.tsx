import s from "./Avatar.module.scss"
import React from "react";

type props = {
    avatarUrl: string
}

let Avatar:React.FC<props> = (props) => {

    return (
        <img src={props.avatarUrl} alt="avatar" className={s.avatar}/>

    )
}

export default React.memo(Avatar);



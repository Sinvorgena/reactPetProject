import s from "./MessagesItem.module.scss"
import React from "react";

type props = {
    img: string
    message: string
}
let MessagesItem:React.FC<props> = (props) => {
    return (
        <div className={s.content}>
            <div className={s.messageItem}>
                <div className={s.avatar}>
                    <img src={props.img} alt="avatar"/>
                </div>
                <div className={s.message}>{props.message}</div>
            </div>

        </div>

    )
}


export default React.memo(MessagesItem);

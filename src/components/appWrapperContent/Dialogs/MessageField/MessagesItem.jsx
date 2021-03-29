import s from "./MessagesItem.module.css"



let MessagesItem = (props) => {
    return (
        <div className={s.content}>
            <div className={s.messageItem}>
                <div className={s.avatar}><img src={props.img} alt=""/></div>
                <div className={s.message}>{props.message}</div>
            </div>

        </div>

    )
}


export default MessagesItem;

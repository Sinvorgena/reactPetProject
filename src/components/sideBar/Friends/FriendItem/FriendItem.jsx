import s from "./Frienditem.module.css"

let FriendItem = (props) => {

    return (
        <div className={s.Item}>
            <div className={s.avatar}></div>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}

export default FriendItem;
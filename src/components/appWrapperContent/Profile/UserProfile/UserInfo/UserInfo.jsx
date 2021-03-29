import s from "./UserInfo.module.css"


let UserInfo = (props) => {
    return (
        <div className={s.content}>
            <div className={s.name}>{props.name}</div>
            <div className={s.info}>
                <div className={s.dateB}>Date of Birth: {props.birthdate}</div>
                <div className={s.city}>City: {props.city}</div>
                <div className={s.education}>Education: {props.education}</div>
                <div className={s.webSite}>Web Site: {props.webSite}</div>
            </div>
        </div>
    )
}

export default UserInfo;
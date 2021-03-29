import s from "./ChangeAvatar.module.css"



let ChangeAvatar = (props) => {

    return (
        <img src={props.avatarUrl} alt="" className={s.avatar}/>

    )
}

export default ChangeAvatar;



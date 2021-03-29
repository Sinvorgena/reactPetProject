import s from "./Friends.module.css"
import FriendItem from "./FriendItem/FriendItem";

let Friends = (props) => {

    let friendTrueData = props.friendData.map((el)=>(<FriendItem name={el.name}/>))
    return (
        <div className={s.content}>
            <div className={s.label}>Friends</div>
            <div className={s.Box}>
                {friendTrueData}
            </div>
        </div>
    )
}

export default Friends;
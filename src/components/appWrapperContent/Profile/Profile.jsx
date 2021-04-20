import MainScreen from "./MainScreen"
import Posts from "./Posts/Posts";
import s from "./Profile.module.css"
import UserProfileContainer from "./UserProfile/UserProfileContainer";


let Profile = (props) => {
    return (
        <div className={s.content}>
            <MainScreen/>
            <UserProfileContainer/>
            <Posts/>
        </div>
    )
}

export default Profile;
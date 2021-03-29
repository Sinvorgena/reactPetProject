import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/appWrapperContent/Profile/Profile";
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import News from "./components/appWrapperContent/News/News";
import Music from "./components/appWrapperContent/Music/Music";
import Setting from "./components/appWrapperContent/Setting/Setting";
import DialogsContainer from "./components/appWrapperContent/Dialogs/DialogsContainer";
import UsersContainer from "./components/appWrapperContent/Users/UsersContainer";
import SideBarContainer from "./components/sideBar/sideBarContainer";


let App = () => {
    return (
        <div className="appWrapper">
            <Header/>
            <SideBarContainer/>
            <div className="appWrapperContent">
                <Route path={"/profile"} render={() =>
                    <Profile/>}
                />
                <Route path={"/dialogs"} render={() =>
                    <DialogsContainer/>}
                />
                <Route path={"/users"} render={() =>
                    <UsersContainer/>}
                />
                <Route path={"/feed"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/setting"} render={() => <Setting/>}/>
            </div>
            <Footer/>
        </div>
    )
}


export default App;







import './App.css';
import Footer from "./components/Footer/Footer";
import {Route, withRouter} from "react-router-dom";
import News from "./components/appWrapperContent/News/News";
import Music from "./components/appWrapperContent/Music/Music";
import Setting from "./components/appWrapperContent/Setting/Setting";
import DialogsContainer from "./components/appWrapperContent/Dialogs/DialogsContainer";
import UsersContainer from "./components/appWrapperContent/Users/UsersContainer";
import SideBarContainer from "./components/sideBar/sideBarContainer";
import ProfileContainer from "./components/appWrapperContent/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/appWrapperContent/Login";
import {Component} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {setInitialized} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
import {getInitialized} from "./Selectors/Selectors";


class App extends Component {
    componentDidMount() {
        this.props.setInitialized()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <SideBarContainer/>
                <div className="appWrapperContent">
                    <Route path={"/profile/:userId?"} render={() =>
                        <ProfileContainer/>}
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
                    <Route path={"/login"} render={() => <Login/>}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

let mapStateToProps = state => {
    return {
        initialized: getInitialized(state)
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setInitialized})
)(App);







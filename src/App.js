import './App.css';
import Footer from "./components/Footer/Footer";
import {Redirect, Route, withRouter, Switch} from "react-router-dom";
import News from "./components/appWrapperContent/News/News";
import Music from "./components/appWrapperContent/Music/Music";
import Setting from "./components/appWrapperContent/Setting/Setting";
import SideBar from "./components/sideBar/sideBar";
// import Login from "./components/appWrapperContent/Login";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {setInitialized_thunkC} from "./redux/appReducer";
import Preloader from "./components/Preloader/Preloader";
import {getInitialized_selector} from "./Selectors/Selectors";
import Header from "./components/Header/Header";
import Login from "./components/appWrapperContent/Login";


const Dialogs = React.lazy(() => import('./components/appWrapperContent/Dialogs/Dialogs'));
const Users = React.lazy(() => import('./components/appWrapperContent/Users/Users'));
const Profile = React.lazy(() => import('./components/appWrapperContent/Profile/Profile.tsx'));


let App = (props) => {
    let initialized = useSelector(state => getInitialized_selector(state))
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(setInitialized_thunkC())
    }, [])
    if (initialized) {
        return <Preloader/>
    }
    return (
        <div className="appWrapper">
            <Header/>
            <SideBar/>
            <div className="appWrapperContent">
                <React.Suspense fallback={<Preloader/>}>
                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        <Route path={"/profile/:userId?"} render={() =>
                            <Profile/>}
                        />
                        <Route path={"/dialogs"} render={() =>
                            <Dialogs/>}
                        />
                        <Route path={"/users"} render={() =>
                            <Users/>}
                        />
                        <Route path={"/feed"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/setting"} render={() => <Setting/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>
                        <Route path={"*"} render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </React.Suspense>
            </div>
            <Footer/>
        </div>
    )
}


export default withRouter(App);







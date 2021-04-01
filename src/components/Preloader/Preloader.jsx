import s from "./Preloader.module.css"
import preloader from "../../assets/829.gif";
import React from "react";

let Preloader = (props) => {

    return (
        <div className={s.preLoaders}>
            <img src={preloader} alt=""/>
            <div className={s.preLoaderBackground}></div>
        </div>
    )
}

export default Preloader;

import s from "./Preloader.module.scss"
import preloader from "../../assets/829.gif";
import React from "react";

let Preloader:React.FC = () => {

    return (
        <div className={s.preLoaders}>
            <img src={preloader} alt=""/>
            <div className={s.preLoaderBackground}/>
        </div>
    )
}

export default React.memo(Preloader);

import s from "./Footer.module.scss";
import React from "react";

let Footer:React.FC = () => {
    return (
        <div className={s.content}>
            <div className={s.name}>Vladimir</div>
            <div className={s.copyright}>Copyright</div>
            <div className={s.pet}>Pet react project</div>
        </div>

    )
}

export default React.memo(Footer);
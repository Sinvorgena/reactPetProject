import s from "../appWrapperContent/Profile/profile_components/UserProfile.module.scss";
import React from "react";

type props = {
    contactTitle: string
    contactValue: string
}

let Contact:React.FC<props> = ({contactTitle, contactValue}) => {
    return (
        <div>
            <span className={s.contactTitle}>{contactTitle}:</span>
            <span className={s.contactValue}>{contactValue}</span>
        </div>
    )
}

export default React.memo(Contact)
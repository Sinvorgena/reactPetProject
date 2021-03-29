import s from "./Footer.module.css";

let Footer = ()=>{
    return (
        <div className={s.content}>
            <div className={s.name}>Vladimir</div>
            <div className={s.copyright}>Copyright</div>
            <div className={s.pet}>Pet react project</div>
        </div>

    )
}

export default Footer;
import s from "./Dialogs.module.css"
import NewMessageContainer from "./MessageField/NewMessage/NewMessageContainer";

let Dialogs = (props) => {

    return (
        <div className={s.content}>
            <div className={s.dialogsItem}>
                {props.dialogItemData}
            </div>
            <div className={s.MessagesField}>
                {props.MessagesFieldData}
                <NewMessageContainer/>
            </div>
        </div>
    )
}


export default Dialogs;
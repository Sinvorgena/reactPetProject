import s from "./Dialogs.module.css"
import NewMessage from "./MessageField/NewMessage";
import React, {FC} from "react";
import {useSelector} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsData_selector, getMessageData_selector} from "../../../Selectors/Selectors";
import DialogItem from "./DialogItem";
import MessagesItem from "./MessageField/MessagesItem";
import {appStateType} from "../../../redux/redux-store";
import {dialogType, messageType} from "../../../types/types";

let Dialogs: FC = () => {
    let dialogItemData = useSelector((state: appStateType) => getDialogsData_selector(state).map((dialog:dialogType) => {
        return <DialogItem name={dialog.name} id={dialog.id}/>
    }))
    let messagesFieldData = useSelector((state: appStateType) => getMessageData_selector(state).map((messageItem:messageType) =>
        (<MessagesItem
            key={messageItem.id}
            message={messageItem.message}
            img={messageItem.avatar}
        />)))
    return (
        <div className={s.content}>
            <div className={s.dialogsItem}>
                {dialogItemData}
            </div>
            <div className={s.MessagesField}>
                {messagesFieldData}
                <NewMessage/>
            </div>
        </div>
    )
}

export default compose(
    withAuthRedirect,
    React.memo
)(Dialogs);


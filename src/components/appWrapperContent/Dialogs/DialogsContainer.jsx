import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem/DialogItem";
import MessagesItem from "./MessageField/MessagesItem";






const mapStateToProps = (state)=>{
    return{
        dialogItemData: state.Dialogs.dialogsData.map(el =>
            (<DialogItem
                name={el.name}
                id={el.id}
            />)),
        MessagesFieldData: state.Dialogs.messageData.map(el =>
            (<MessagesItem
                message={el.message}
                img={el.avatar}
            />))
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

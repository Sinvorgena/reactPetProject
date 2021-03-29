import React from "react";
import {addMessageActionCreator, updNewMessageTextActionCreator} from "../../../../../redux/DialogsReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";



const mapStateToProps = (state)=>{
    return{
        newMessageText: state.Dialogs.newMessageText
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addNewMessageValue: ()=>{
            dispatch(addMessageActionCreator())
        },
        newTextMessage:(elementValue) => {
            dispatch(updNewMessageTextActionCreator(elementValue))
        }
    }
}
const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
import React from "react";
import {addMessageActionCreator} from "../../../../../redux/DialogsReducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";



const mapStateToProps = (state)=>{
    return{
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addNewMessageValue: (text)=>{
            dispatch(addMessageActionCreator(text))
        }
    }
}
const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
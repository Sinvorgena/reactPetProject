import React from "react";
import {addPostActionCreator, updNewPostTextActionCreator} from "../../../../../redux/ProfileReducer";
import NewPosts from "./NewPosts";
import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return{
        updNewPostText: state.Profile.updNewPostText,
        newPostText: state.Profile.newPostText
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addPost:() => {
            dispatch(addPostActionCreator())
        },
        newTextPost: (elementValue) => {
            dispatch(updNewPostTextActionCreator(elementValue))
        }
    }
}
const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts);

export default NewPostsContainer;
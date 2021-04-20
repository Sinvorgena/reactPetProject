import React from "react";
import {addPostActionCreator} from "../../../../../redux/ProfileReducer";
import NewPosts from "./NewPosts";
import {connect} from "react-redux";



const mapStateToProps = (state)=>{
    return{
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addPost:(text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}
const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts);

export default NewPostsContainer;
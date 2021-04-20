import React from "react";
import {connect} from "react-redux";
import PostWall from "./PostWall";
import Post from "./Post/Post";
import {getPostMessageData} from "../../../../../Selectors/Selectors";

const mapStateToProps = (state)=>{
    return{
        postMessage: getPostMessageData(state)
            .map(post => <Post message={post.message} like={post.likeCounter}/>)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
const PostWallContainer = connect(mapStateToProps, mapDispatchToProps)(PostWall);

export default PostWallContainer;
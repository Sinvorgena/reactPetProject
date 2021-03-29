import React from "react";
import {connect} from "react-redux";
import PostWall from "./PostWall";
import Post from "./Post/Post";

const mapStateToProps = (state)=>{
    return{
        postMessage: state.Profile.postMessageData
            .map(post => <Post message={post.message} like={post.likeCounter}/>)
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{

    }
}
const PostWallContainer = connect(mapStateToProps, mapDispatchToProps)(PostWall);

export default PostWallContainer;
import React from "react";
import {connect} from "react-redux";
import sideBar from "./sideBar";


const mapStateToProps = (state)=>{
    return{
        friendData: state.sideBar.friendData
    }
}
const mapDispatchToProps = (dispatch) =>{

    return{

    }
}

const SideBarContainer = connect(mapStateToProps, mapDispatchToProps)(sideBar);

export default SideBarContainer;

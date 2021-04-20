import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import DialogItem from "./DialogItem";
import MessagesItem from "./MessageField/MessagesItem";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogsData, getMesasageData} from "../../../Selectors/Selectors";

const mapStateToProps = (state) => {

    return {
        dialogItemData: getDialogsData(state).map(el =>
            (<DialogItem
                name={el.name}
                id={el.id}
            />)),
        MessagesFieldData: getMesasageData(state).map(el =>
            (<MessagesItem
                message={el.message}
                img={el.avatar}
            />))
    }
}

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Dialogs);

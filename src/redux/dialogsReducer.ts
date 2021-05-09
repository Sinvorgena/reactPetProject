import {dialogType, messageType } from "../types/types"
import {inferActionsTypes} from "./redux-store";



type initialStateType = typeof initialState

let initialState = {
    messageData: [
        {id: 1, message: "Привет", avatar: "http://petszona.ru/wp-content/uploads/2018/06/karby-sh.jpg"},
        {
            id: 2,
            message: "Привет",
            avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
        },
        {id: 1, message: "Как дела?", avatar: "http://petszona.ru/wp-content/uploads/2018/06/karby-sh.jpg"},
        {
            id: 2,
            message: "Крута, а у тебя?",
            avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
        },
        {
            id: 2,
            message: "Крута, а у тебя?",
            avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
        }
    ] as Array<messageType>,
    dialogsData: [
        {id: 1, name: "Vladimir"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Vlad"},
        {id: 4, name: "Anya"},
        {id: 5, name: "Zina"}
    ] as Array<dialogType>,
}

const dialogsReducer = (state = initialState, action:actionsTypes):initialStateType => {
    let copyState
    switch (action.type) {
        case "ADD_MESSAGE":
            let newMessage = {
                id: (state.messageData[state.messageData.length-1].id)+1,
                message: action.text,
                avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
            }
            copyState = {
                ...state,
                messageData: [...state.messageData, newMessage]
            }
            return copyState
        default:
            return  state
    }
}

type actionsTypes = inferActionsTypes<typeof actions>

export const actions = {
    addMessage_action: (text:string) => ({
        type: "ADD_MESSAGE",
        text
    } as const)
}


export default dialogsReducer
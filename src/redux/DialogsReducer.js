let addMessage = "ADD-MESSAGE"
let updNewMessageText = "UPD-NEW-MESSAGE-TEXT"

let DialogsDefaulState = {
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
    ],
    dialogsData: [
        {id: 1, name: "Vladimir"},
        {id: 2, name: "Denis"},
        {id: 3, name: "Vlad"},
        {id: 4, name: "Anya"},
        {id: 5, name: "Zina"}
    ],
    newMessageText: ""
}

export const DialogsReducer = (state = DialogsDefaulState, action) => {
    let copyOfState
    switch (action.type) {
        case addMessage:
            let newMessage = {
                message: state.newMessageText,
                avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
            }
            copyOfState = {
                ...state,
                messageData: [...state.messageData, newMessage],
                newMessageText: "",
            }
            return copyOfState

        case updNewMessageText:
            copyOfState = {
                ...state,
                newMessageText: (action.userText)
            }
            return copyOfState
    }
    return state
}

export let addMessageActionCreator = (text) => ({
    type: addMessage,
    userText: text
})
export let updNewMessageTextActionCreator = (text) => ({
    type: updNewMessageText,
    userText: text
})
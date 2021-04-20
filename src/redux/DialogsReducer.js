let addMessage = "ADD-MESSAGE"

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
}

export const DialogsReducer = (state = DialogsDefaulState, action) => {
    let copyOfState
    switch (action.type) {
        case addMessage:
            let newMessage = {
                message: action.text,
                avatar: "https://cdnimg.rg.ru/img/content/187/94/47/iStock-644032024_d_850.jpg"
            }
            copyOfState = {
                ...state,
                messageData: [...state.messageData, newMessage]
            }
            return copyOfState
    }
    return state
}

export let addMessageActionCreator = (text) => ({
    type: addMessage,
    text
})

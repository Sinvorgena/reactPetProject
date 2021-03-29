let addPost = "ADD-POST"
let updNewPostText = "UPD-NEW-POST-TEXT"
let changeAvatar = "CHANGE-AVATAR"
let nextAvatar = "NEXT-AVATAR"
let prevAvatar = "PREV-AVATAR"
let addAvatar = "ADD-AVATAR"


let ProfileDefaulState = {
    userInfoDate: [
        {
            name: "Dmitry K.",
            birthdate: "2 january",
            city: "Minsk",
            education: "BSU'11",
            webSite: "https://it-kamasutra.com"
        }
    ],
    postMessageData: [
        {id: 1, message: "Hi, how are you?", likeCounter: "20", user: "vlad"},
        {id: 2, message: "Привет, как ты?", likeCounter: "15", user: "vlad"},
        {id: 3, message: "Пgdgdfgdf?", likeCounter: "12", user: "vlad"}
    ],
    newPostText: "",
    avatarUrlData: [
        {
            id: 1,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU"
        },
        {id: 2, url: "https://html5css.ru/css/img_lights.jpg"},
        {
            id: 3,
            url: "https://external-preview.redd.it/wl_OMEWEzDWAyDGU8-k469mI89a0HvNryasEQHxfceQ.jpg?auto=webp&s=f739d6643f9a51389369f9bdd248443f7bca68ab"
        }
    ],
    mainAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU"
}

export const ProfileReducer = (state = ProfileDefaulState, action) => {
    let copyState;
    switch (action.type) {
        case addPost:
            let newPost = {
                message: state.newPostText,
                likeCounter: 5,
                user: "vlad"
            }
            copyState = {
                ...state,
                postMessageData: [...state.postMessageData, newPost],
                newPostText: ""
            }
            return copyState

        case updNewPostText:
            copyState = {
                ...state,
                newPostText: (action.userText)
            }
            return copyState
        case nextAvatar:
            copyState = {
                ...state,
                avatarUrlData: [...state.avatarUrlData]
            }
            for (let key of copyState.avatarUrlData) {
                if (action.avatarUrl === key.url) {
                    if (copyState.avatarUrlData[key.id]) {
                        copyState.mainAvatar = copyState.avatarUrlData[key.id].url
                    }
                }
            }
            return copyState
        case prevAvatar:
            copyState = {
                ...state,
                avatarUrlData: [...state.avatarUrlData]
            }
            for (let key of copyState.avatarUrlData) {
                if (action.avatarUrl === key.url) {
                    if (copyState.avatarUrlData[key.id - 2]) {
                        copyState.mainAvatar = copyState.avatarUrlData[key.id - 2].url
                    }

                }
            }
            return copyState

        case addAvatar:
            copyState = {
                ...state,
                avatarUrlData: [...state.avatarUrlData]
            }
            if (action.avatarUrl) {
                let newAvatar = {
                    id: copyState.avatarUrlData[copyState.avatarUrlData.length - 1].id + 1,
                    url: action.avatarUrl
                }
                copyState.mainAvatar = newAvatar.url
                copyState.avatarUrlData.push(newAvatar)
            }

            return copyState
    }
    return state
}

export let addPostActionCreator = () => ({
    type: addPost
})
export let changeAvatarActionCreator = (url) => ({
    type: changeAvatar,
    avatarUrl: url
})
export let nextAvatarActionCreator = (url) => ({
    type: nextAvatar,
    avatarUrl: url
})
export let prevAvatarActionCreator = (url) => ({
    type: prevAvatar,
    avatarUrl: url
})
export let addAvatarActionCreator = (url) => ({
    type: addAvatar,
    avatarUrl: url
})

export let updNewPostTextActionCreator = (text) => ({
    type: updNewPostText,
    userText: text
})

window.ProfileDefaulState = ProfileDefaulState



let follow = "FOLLOW"
let unfollow = "UNFOLLOW"
let setUsers = "SET_USERS"


let UsersDefaulState = {
    usersData: [
        // {
        //     id: 1,
        //     userAvatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU",
        //     followed: true,
        //     fullname: "Dmitry K.",
        //     status: "gmkdpfgmdpg",
        //     location: {
        //         country: "Belarus",
        //         city: "Minsk"
        //     }
        // },
        // {
        //     id: 2,
        //     userAvatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU",
        //     followed: false,
        //     fullname: "Dmitry K.",
        //     status: "gmkdpfgmdpg",
        //     location: {
        //         country: "Belarus",
        //         city: "Minsk"
        //     }
        // },
        // {
        //     id: 3,
        //     userAvatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU",
        //     followed: true,
        //     fullname: "Dmitry K.",
        //     status: "gmkdpfgmdpg",
        //     location: {
        //         country: "Belarus",
        //         city: "Minsk"
        //     }
        // }
    ]
}

export const UsersReducer = (state = UsersDefaulState, action) => {
    console.log(action)
    let copyState;
    switch (action.type) {
        case follow:
            copyState = {
                ...state,
                usersData: [...state.usersData]
            }
            for(let u of copyState.usersData){
                if(action.userId === u.id){
                    u.followed = true
                }
            }
            return copyState

        case unfollow:
            copyState = {
                ...state,
                usersData: [...state.usersData]
            }
            for(let u of copyState.usersData){
                if(action.userId === u.id){
                    u.followed = false
                }
            }
            return copyState
        case setUsers:
            copyState = {
                ...state
            }
            copyState.usersData = action.users.map(el=>el)
            return copyState
        default:
            return state
    }
}

export let followAC = (userId) => ({
    type: follow,
    userId
})
export let unfollowAC = (userId) => ({
    type: unfollow,
    userId
})
export let setUsersAC = (users) => ({
    type: setUsers,
    users
})


window.UsersDefaulState = UsersDefaulState



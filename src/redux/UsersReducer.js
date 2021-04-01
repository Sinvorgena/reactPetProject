let follow = "FOLLOW"
let unfollow = "UNFOLLOW"
let setUsers = "SET_USERS"
let setTotalUsersCount = "SET_TOTAL_USERS_COUNT"
let setCurrentPage = "SET_CURRENT_PAGE"
let toogleIsLoading = "TOOGLE_IS_LOADING"

let UsersDefaulState = {
    totalUsersCount: 0,
    currentPage: 1,
    numberOfUsersOnPage: 5,
    isLoading: false,
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
                ...state,
                usersData: [...action.users]
            }
            return copyState
        case setTotalUsersCount:
            copyState = {
                ...state,
                totalUsersCount: action.count
            }
            return copyState
        case setCurrentPage:
            copyState = {
                ...state,
                currentPage: action.currentPage
            }
            return copyState
        case toogleIsLoading:
            copyState = {
                ...state,
                isLoading: action.isLoading
            }
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
export let setTotalUsersCountAC = (count) => ({
    type: setTotalUsersCount,
    count
})
export let setCurrentPageAC = (currentPage) => ({
    type: setCurrentPage,
    currentPage
})
export let toogleIsLoadingAC = (isLoading) => ({
    type: toogleIsLoading,
    isLoading
})

window.UsersDefaulState = UsersDefaulState



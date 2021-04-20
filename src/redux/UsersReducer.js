import {Api} from "../api/api";

let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SETUSERS = "SET_USERS"
let SETTOTALUSERSCOUNT = "SET_TOTAL_USERS_COUNT"
let SETCURRENTPAGE = "SET_CURRENT_PAGE"
let TOOGLEISLOADING = "TOOGLE_IS_LOADING"
let TOOGLE_IS_FOLLOWING_IN_PROGRESS_USER = "TOOGLE_IS_FOLLOWING_IN_PROGRESS_USER"
let SET_FRIEND_DATA = "SET_FRIEND_DATA"

let UsersDefaulState = {
    totalUsersCount: 0,
    currentPage: 1,
    numberOfUsersOnPage: 5,
    isLoading: false,
    isFollowingInProgress: null,
    usersInProgressFollowing: [],
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
    ],
    followingUsersData: []
}

export const UsersReducer = (state = UsersDefaulState, action) => {
    console.log(action)
    let copyState;
    switch (action.type) {
        case FOLLOW:
            copyState = {
                ...state,
                usersData: [...state.usersData]
            }
            for (let u of copyState.usersData) {
                if (action.userId === u.id) {
                    u.followed = true
                }
            }
            return copyState

        case UNFOLLOW:
            copyState = {
                ...state,
                usersData: [...state.usersData]
            }
            for (let u of copyState.usersData) {
                if (action.userId === u.id) {
                    u.followed = false
                }
            }
            return copyState
        case SETUSERS:
            copyState = {
                ...state,
                usersData: [...action.users]
            }
            return copyState
        case SETTOTALUSERSCOUNT:
            copyState = {
                ...state,
                totalUsersCount: action.count
            }
            return copyState
        case SETCURRENTPAGE:
            copyState = {
                ...state,
                currentPage: action.currentPage
            }
            return copyState
        case TOOGLEISLOADING:
            copyState = {
                ...state,
                isLoading: action.isLoading
            }
            return copyState
        case TOOGLE_IS_FOLLOWING_IN_PROGRESS_USER:
            copyState = {
                ...state,
                usersInProgressFollowing: action.isFollowingInProgress
                    ? [...state.usersInProgressFollowing, action.userId]
                    : state.usersInProgressFollowing.filter(id => id != action.userId)
            }
            return copyState
        case SET_FRIEND_DATA:
            copyState = {
                ...state,
                followingUsersData: action.data
            }
            console.log("setFriendData")
            return copyState
        default:
            return state
    }
}

export let followSucsess = (userId, user) => ({
    type: FOLLOW,
    userId,
    user
})
export let unfollowSucsess = (userId, user) => ({
    type: UNFOLLOW,
    userId,
    user
})
export let setUsers = (users) => ({
    type: SETUSERS,
    users
})
export let setTotalUsersCount = (count) => ({
    type: SETTOTALUSERSCOUNT,
    count
})
export let setCurrentPage = (currentPage) => ({
    type: SETCURRENTPAGE,
    currentPage
})
export let toogleIsLoading = (isLoading) => ({
    type: TOOGLEISLOADING,
    isLoading
})
export let toogleFollowingInProgressUser = (isFollowingInProgress, userId) => ({
    type: TOOGLE_IS_FOLLOWING_IN_PROGRESS_USER,
    isFollowingInProgress, userId
})
export let setFriendDataSucsess = (data) => ({
    type: SET_FRIEND_DATA,
    data
})
export const getUsers = (numberOfUsersOnPage, currentPage) => {
    return (dispatch) => {
        dispatch(toogleIsLoading(true))
        Api.users.getUsers(numberOfUsersOnPage, currentPage)
            .then(response => {
                    dispatch(setUsers(response.items))
                    dispatch(setTotalUsersCount(response.totalCount))
                    dispatch(toogleIsLoading(false))
                }
            )
    }
}
export const toogleFollowStatus = (el) => {
    return (dispatch) => {
        dispatch(toogleFollowingInProgressUser(true, el.id))
        if (el.followed) {
            Api.follow.unfollowUser(el.id).then(response => {
                dispatch(unfollowSucsess(el.id, el))
                dispatch(toogleFollowingInProgressUser(false, el.id))
                Api.users.getFollowingUsers()
                    .then(response => {
                            console.log(response)
                            dispatch(setFriendDataSucsess(response.items))
                        }
                    )
            })
        } else {
            Api.follow.followUser(el.id).then(response => {
                dispatch(followSucsess(el.id, el))
                dispatch(toogleFollowingInProgressUser(false, el.id))
                Api.users.getFollowingUsers()
                    .then(response => {
                            console.log(response)
                            dispatch(setFriendDataSucsess(response.items))
                        }
                    )
            })
        }
    }
}
export let setUserData = () => {
    return (dispatch) => {
        Api.users.getFollowingUsers()
            .then(response => {
                    console.log(response)
                    dispatch(setFriendDataSucsess(response.items))
                }
            )

    }
}


window.UsersDefaulState = UsersDefaulState




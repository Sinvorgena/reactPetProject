import {Api} from "../api/api";
import {userType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {appStateType, baseThunkAction, inferActionsTypes} from "./redux-store";




type initialState = typeof initialState


let initialState = {
    totalUsersCount: 0,
    currentPage: 1,
    numberOfUsersOnPage: 5,
    isLoading: false,
    isFollowingInProgress: null as boolean | null,
    usersInProgressFollowing: [] as Array<number>, //array of users ids
    usersData: [] as Array<userType>,
    followingUsersData: [] as Array<userType>
}


const usersReducer = (state = initialState, action: usersActionsTypes): initialState => {
    let copyState;
    switch (action.type) {
        case "FOLLOW":
            copyState = {
                ...state
            }
            for (let u of copyState.usersData) {
                if (action.userId === u.id) {
                    u.followed = true
                }
            }
            return copyState

        case "UNFOLLOW":
            copyState = {
                ...state
            }
            for (let u of copyState.usersData) {
                if (action.userId === u.id) {
                    u.followed = false
                }
            }
            return copyState
        case "SET_USERS":
            copyState = {
                ...state,
                usersData: [...action.users]
            }
            return copyState
        case "SET_TOTAL_USERS_COUNT":
            copyState = {
                ...state,
                totalUsersCount: action.count
            }
            return copyState
        case "SET_CURRENT_PAGE":
            copyState = {
                ...state,
                currentPage: action.currentPage
            }
            return copyState
        case "TOGGLE_IS_LOADING":
            copyState = {
                ...state,
                isLoading: action.isLoading
            }
            return copyState
        case "TOGGLE_IS_FOLLOWING_IN_PROGRESS_USER":
            copyState = {
                ...state,
                usersInProgressFollowing: action.isFollowingInProgress
                    ? [...state.usersInProgressFollowing, action.userId]
                    : state.usersInProgressFollowing.filter(id => id !== action.userId)
            }
            return copyState
        case "SET_FRIEND_DATA":
            copyState = {
                ...state,
                followingUsersData: action.data
            }
            return copyState
        default:
            return state
    }
}
export type usersActionsTypes = inferActionsTypes<typeof usersActions>


export const usersActions = {
    follow_action: (userId: number) => ({
        type: 'FOLLOW',
        userId,
    } as const),
    unfollow_action: (userId: number) => ({
        type: 'UNFOLLOW',
        userId,
    } as const),
    setUsers_action: (users: Array<userType>) => ({
        type: 'SET_USERS',
        users
    } as const),
    setTotalUsersCount_action: (count: number) => ({
        type: 'SET_TOTAL_USERS_COUNT',
        count
    } as const),
    setCurrentPage_action: (currentPage: number) => ({
        type: 'SET_CURRENT_PAGE',
        currentPage
    } as const),
    toggleIsLoading_action: (isLoading: boolean) => ({
        type: 'TOGGLE_IS_LOADING',
        isLoading
    } as const),
    setFriendData_action: (data: Array<userType>) => ({
        type: 'SET_FRIEND_DATA',
        data
    } as const),
    toggleFollowingInProgressUser_action: (isFollowingInProgress: boolean, userId: number) => ({
        type: 'TOGGLE_IS_FOLLOWING_IN_PROGRESS_USER',
        isFollowingInProgress, userId
    } as const)
}




export const getUsers_thunkC = (numberOfUsersOnPage: number, currentPage: number):baseThunkAction<usersActionsTypes> => async (dispatch) => {
    dispatch(usersActions.toggleIsLoading_action(true))
    let response = await Api.users.getUsers_api(numberOfUsersOnPage, currentPage)
    debugger
    dispatch(usersActions.setUsers_action(response.items))
    dispatch(usersActions.setTotalUsersCount_action(response.totalCount))
    dispatch(usersActions.toggleIsLoading_action(false))
}

export const toggleFollowStatus_thunkC = (el: userType):baseThunkAction<usersActionsTypes> => async (dispatch) => {
    dispatch(usersActions.toggleFollowingInProgressUser_action(true, el.id))
    if (el.followed) {
        await Api.follow.unfollowUser_api(el.id)
        dispatch(usersActions.unfollow_action(el.id))
        dispatch(usersActions.toggleFollowingInProgressUser_action(false, el.id))
        let response = await Api.users.getFollowingUsers_api()
        dispatch(usersActions.setFriendData_action(response.items))
    } else {
        await Api.follow.followUser_api(el.id)
        dispatch(usersActions.follow_action(el.id))
        dispatch(usersActions.toggleFollowingInProgressUser_action(false, el.id))
        let response = await Api.users.getFollowingUsers_api()
        dispatch(usersActions.setFriendData_action(response.items))
    }

}
export let setUserData_thunkC = ():baseThunkAction<usersActionsTypes> => async (dispatch) => {
    let response = await Api.users.getFollowingUsers_api()
    dispatch(usersActions.setFriendData_action(response.items))
}
export default usersReducer;
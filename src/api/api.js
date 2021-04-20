import * as axios from "axios";


const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {'API-KEY': '818b16ba-6497-42b1-8359-46d83b14e351'},
    withCredentials: true
})


export const Api = {
    security: {
        getCaptchaUrl() {

        }
    },
    auth: {
        getAuthMe() {
            return instanse.get(`auth/me`).then(response => response.data)
        },
        logIn(email, password) {
            return instanse.post(`auth/login`, {
                email: email,
                password: password
            })
        },
        logOut() {
            return instanse.delete(`auth/login`)
        }
    },
    users: {
        getUsers(numberOfUsersOnPage, currentPage) {
            return instanse.get(`users?count=${numberOfUsersOnPage}&page=${currentPage}`)
                .then(response => response.data)
        },
        getFollowingUsers(numberOfUsersOnPage = 100, currentPage = 1) {
            return instanse.get(`users?count=${numberOfUsersOnPage}&page=${currentPage}&friend=true`)
                .then(response => response.data)
        }
    },
    profile: {
        getUserProfile(userId) {
            return instanse.get(`profile/${userId}`).then(response => response.data)
        },
        getUserProfileStatus(userId) {
            return instanse.get(`profile/status/${userId}`).then(response => response.data)
        },
        setUserProfileStatus(text) {
            return instanse.put(`profile/status`, {
                status: text
            }).then(response => response.data)
        }
    },
    follow: {
        followUser(id) {
            return instanse.post(`follow/${id}`).then(response => response.data)
        },
        unfollowUser(id) {
            return instanse.delete(`follow/${id}`).then(response => response.data)

        }
    }
}






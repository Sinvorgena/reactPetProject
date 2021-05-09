import axios from "axios";
import {photosType, profileType, userType} from "../types/types";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {'API-KEY': 'ddd53e40-2f9c-4188-844b-a1ba9e6892e2'},
    withCredentials: true
})


export const Api = {
    security: {
        getCaptchaUrl_api() {
            return instance.get<getCaptchaUrlType>('security/get-captcha-url')
        }
    },
    auth: {
        getAuthMe_api() {
            return instance.get<doSomeType<meType>>(`auth/me`).then(response => response.data)
        },
        logIn_api(email:string, password:string,rememberMe:boolean, captcha:string|null = null) {
            return instance.post<doSomeType<logInType>>(`auth/login`, {
                email,
                password,
                rememberMe,
                captcha
            })
        },
        logOut_api() {
            return instance.delete<doSomeType<{}>>(`auth/login`)
        }
    },
    users: {
        getUsers_api(numberOfUsersOnPage:number, currentPage:number) {
            return instance.get<getUsersType>(`users?count=${numberOfUsersOnPage}&page=${currentPage}`)
                .then(response => {
                    debugger
                    return response.data
                    })
        },
        getFollowingUsers_api(numberOfUsersOnPage = 100, currentPage = 1) {
            return instance.get<getUsersType>(`users?count=${numberOfUsersOnPage}&page=${currentPage}&friend=true`)
                .then(response => {debugger
                    return  response.data})
        }
    },
    profile: {
        getUserProfile_api(userId:number|null) {
            return instance.get<profileType>(`profile/${userId}`).then(response => response.data)
        },
        getUserProfileStatus_api(userId:number) {
            return instance.get<string>(`profile/status/${userId}`).then(response => response.data)
        },
        setUserProfileStatus_api(text:string) {
            return instance.put<doSomeType<{}>>(`profile/status`, {
                status: text
            }).then(response => response.data)
        },
        setProfilePhoto_api(filePhoto:any) {
            let formData = new FormData()
            formData.append("image", filePhoto)
            return instance.put<doSomeType<photosType>>(`profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(response => response.data)
        },
        setProfile_api(profile:profileType) {
            return instance.put<doSomeType<{}>>(`profile`, profile)}
    },
    follow: {
        followUser_api(id:number) {
            return instance.post<doSomeType<{}>>(`follow/${id}`).then(response => response.data)
        },
        unfollowUser_api(id:number) {
            return instance.delete<doSomeType<{}>>(`follow/${id}`).then(response => response.data)

        }
    }
}
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired= 10
}
type meType = {
    id:number
    email: string
    login: string
}
type logInType = {
    userId:number
}

type doSomeType<T> = {
    data:T
    resultCode: ResultCodeEnum
    messages: Array<string>
}

type getUsersType = {
    items:Array<userType>
    totalCount: ResultCodeEnum
    error: string
}

type getCaptchaUrlType = {
    url: string
}






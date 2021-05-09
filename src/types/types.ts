
export type userAuthDataType = {
    login: null | string
    mainUserId: null | number
    email: null | string
    isAuth: boolean
}
export type messageType = {
    id: number
    message: string
    avatar: string
}
export type dialogType = {
    id: number
    name: string
}
export type postType = {
    id: number
    message: string
    likesCount: number
}
export type profileType = {
    aboutMe: string
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId?: number
    photos?: photosType
}|null
export type contactsType = {
    facebook: string
    website: string
    vk:string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type photosType = {
    small: string
    large: string
}
export type userType = {
    id: number
    name: string
    status?: string
    photos: photosType
    followed: boolean
}




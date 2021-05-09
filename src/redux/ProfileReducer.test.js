import {
    addPostSucsess,
    deletePostSucsess,
    ProfileReducer,
    setMainUserInfo,
    setUserProfileStatusSucsess
} from "./profileReducer";


let State = {
    userInfoDate: [
        {
            name: "",
            birthdate: "",
            city: "",
            education: "",
            webSite: "",
            status: ""
        }
    ],
    postMessageData: [
        {id: 1, message: "Hi, how are you?", likeCounter: "20", user: "vlad"},
        {id: 2, message: "Привет, как ты?", likeCounter: "15", user: "vlad"},
        {id: 3, message: "Пgdgdfgdf?", likeCounter: "12", user: "vlad"}
    ],
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
    mainAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0OKqoPKtc6zG0u7pS8C3klRQ-7n0KLvYTaQ&usqp=CAU",
}
let testFishText = "bombomTestFish"


test('add post - post data should be incremented', () => {
    let action = addPostSucsess(testFishText)
    let newState = ProfileReducer(State, action)
    expect(newState.postMessageData.length).toBe(4)
});
test('added post message should be correct', () => {
    let action = addPostSucsess(testFishText)
    let newState = ProfileReducer(State, action)
    expect(newState.postMessageData[newState.postMessageData.length-1].message).toBe(testFishText)
});
test('delete post - post data should be decremented', () => {
    let action = deletePostSucsess()
    let newState = ProfileReducer(State, action)
    expect(newState.postMessageData.length).toBe(2)
});
test('userinfo name should be correct', () => {
    let action = setMainUserInfo({fullName:testFishText,aboutMe:testFishText,responseStatus:testFishText})
    let newState = ProfileReducer(State, action)
    expect(newState.userInfoDate[0].name).toBe(testFishText)
});
test('userinfo about me should be correct', () => {
    let action = setMainUserInfo({fullName:testFishText,aboutMe:testFishText,responseStatus:testFishText})
    let newState = ProfileReducer(State, action)
    expect(newState.userInfoDate[0].aboutMe).toBe(testFishText)
});
test('userinfo status form SET_MAIN_USER_INFO should be correct', () => {
    let action = setMainUserInfo({fullName:testFishText,aboutMe:testFishText,responseStatus:testFishText})
    let newState = ProfileReducer(State, action)
    expect(newState.userInfoDate[0].status).toBe(testFishText)
});
test('userinfo status from GET_USER_PROFILE_STATUS_SUCSESS should be correct', () => {
    let action = setUserProfileStatusSucsess(testFishText)
    let newState = ProfileReducer(State, action)
    expect(newState.userInfoDate[0].status).toBe(testFishText)
});
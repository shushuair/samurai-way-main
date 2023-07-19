


import {rerenderEntireTree} from "../render";
import {v1} from "uuid";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}
export type PostsType = {
    id: string
    message: string
    likesCount: number
}

export type DialogsType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

let state = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hi, how are you? ", likesCount: 10},
            {id: v1(), message: "I'm fine ", likesCount: 3},
            {id: v1(), message: "Ohoho ", likesCount: 12},
            {id: v1(), message: "wow ", likesCount: 5},
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: "Ilya"},
            {id: v1(), name: "Aleks"},
            {id: v1(), name: "Den"},
            {id: v1(), name: "Jack"},
            {id: v1(), name: "Mike"},
            {id: v1(), name: "Liam"},
        ],
        messages: [
            {id: v1(), message: "Hi there"},
            {id: v1(), message: "Where are you?"},
            {id: v1(), message: "I am so far"},
            {id: v1(), message: "Yo"},
            {id: v1(), message: "No way"},
        ],
        newMessageText: ""
    },
    addPost: () => {
        let newPost = {
            id: v1(),
            message: state.profilePage.newPostText,
            likesCount: 0
        }
        state.profilePage.posts.push(newPost)
        rerenderEntireTree(state)
    },
    addPostValueTextarea: (postValue: string) => {
        state.profilePage.newPostText = postValue
        rerenderEntireTree(state)
    },
    addMessage: () => {
        let newMessage = {
            id: v1(),
            message: state.dialogsPage.newMessageText
        }
        state.dialogsPage.messages.push(newMessage)
        rerenderEntireTree(state)
    },
    addMessageValue: (postMessage: string) => {
        state.dialogsPage.newMessageText = postMessage
        rerenderEntireTree(state)
    }
}

// export let addPost = () => {
//     let newPost = {
//         id: v1(),
//         message: state.profilePage.newPostText,
//         likesCount: 0
//     }
//     state.profilePage.posts.push(newPost)
//     rerenderEntireTree(state)
// }
//
// export let addPostValueTextarea = (postValue: string) => {
//     state.profilePage.newPostText = postValue
//     rerenderEntireTree(state)
// }

// export let addMessage = () => {
//     let newMessage = {
//         id: v1(),
//         message: state.dialogsPage.newMessageText
//     }
//     state.dialogsPage.messages.push(newMessage)
//     rerenderEntireTree(state)
// }
//
//
// export let addMessageValue = (postMessage: string) => {
//     state.dialogsPage.newMessageText = postMessage
//     rerenderEntireTree(state)
// }


export default state
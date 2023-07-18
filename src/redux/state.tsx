import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you? ", likesCount: 10},
            {id: 2, message: "I'm fine ", likesCount: 3},
            {id: 2, message: "Ohoho ", likesCount: 12},
            {id: 2, message: "wow ", likesCount: 5},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Ilya"},
            {id: 2, name: "Aleks"},
            {id: 3, name: "Den"},
            {id: 4, name: "Jack"},
            {id: 5, name: "Mike"},
            {id: 6, name: "Liam"},
        ],
        messages: [
            {id: 1, message: "Hi there"},
            {id: 2, message: "Where are you?"},
            {id: 3, message: "I am so far"},
            {id: 4, message: "Yo"},
            {id: 5, message: "No way"},
        ]
    }
}

export let addPost = (postMessage: any) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state
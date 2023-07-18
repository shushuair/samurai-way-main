import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

// export type PostsType = {
//     id: number
//     message: string
//     likeCount: number
// }

export const MyPosts = (props:any) => {

    // let posts = [
    //     {id: 1, message: "Hi, how are you? ", likesCount: 10 },
    //     {id: 2, message: "I'm fine ", likesCount: 3 },
    //     {id: 2, message: "Ohoho ", likesCount: 12 },
    //     {id: 2, message: "wow ", likesCount: 5 },
    // ]

    let postsElements = props.posts.map ((el:any) => <Post message={el.message} likesCount={el.likesCount} />)


let addPost = () => {
        alert("asda.co.uk")
}
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}


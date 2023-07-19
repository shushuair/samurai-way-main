import React, {ChangeEvent, useRef} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostValueTextarea, PostsType, ProfilePageType} from "../../../redux/state";

export type MyPostsType = {
   posts: ProfilePageType
    addPost: () => void
    addPostValueTextarea: (value:string)=>void
}

export const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.posts.map((el: any) => <Post message={el.message} likesCount={el.likesCount}/>)
    let newPostElement = useRef<HTMLTextAreaElement>(null)


    let addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost()
            newPostElement.current.value = ""
        }
    }

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.addPostValueTextarea(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.posts.newPostText} onChange={onChangeHandler} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}

            </div>
        </div>
    )
}


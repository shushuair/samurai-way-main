import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props:any) => {
    return (

        <div>My posts
            <div>New post</div>
            <div className={s.posts}>
                <Post message="Hi,how are you?" count="10"/>
                <Post message="I'm fine" count="3"/>
            </div>
        </div>

    )
}


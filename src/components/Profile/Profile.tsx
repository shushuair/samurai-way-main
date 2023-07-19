import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {addPostValueTextarea, StateType} from "../../redux/state";


export type ProfilePropsType = {
    state: StateType
    addPost: ()=>void
    addPostValueTextarea: (value:string)=>void
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.profilePage} addPost={props.addPost} addPostValueTextarea={props.addPostValueTextarea} />
        </div>
    );
}


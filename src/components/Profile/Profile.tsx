import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://thumbs.dreamstime.com/b/funchal-%C3%A2%E2%82%AC-madeira-island-portugal-85328664.jpg"
                    alt=""/>
            </div>
            <div>Ava + description</div>
            <MyPosts />
        </div>
    );
};


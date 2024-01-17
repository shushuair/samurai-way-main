import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {AppRootState} from "../../../../app/store";
import {Nullable, useAppDispatch} from "../../../../common";
import {profileThunks} from "../../model/profileReducer";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileFullName} from "./ProfileFullName/ProfileFullName";
import {ProfileSocNetworks} from "./ProfileSocNetworks/ProfileSocNetworks";
import {Clock} from "./Clock/Clock";
import s from "./Profile.module.css"
import {authThunk} from "../../../auth/model/authReducer";

export const Profile = () => {
    const dispatch = useAppDispatch()
    const userProfileId = useSelector<AppRootState, Nullable<number>>((state) => state.profileStore.myId)

    useEffect(() => {
        if (userProfileId) {
            dispatch(profileThunks.getProfile(userProfileId))
        }
    }, []);

    return (
        <div className={s.content}>
            <h1>{userProfileId}</h1>
            <ProfileAvatar/>
            <ProfileFullName/>
            <ProfileSocNetworks/>
            <Clock/>
        </div>
    );
};


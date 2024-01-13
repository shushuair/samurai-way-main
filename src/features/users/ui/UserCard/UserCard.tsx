import React from "react";
import {User} from "common";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import s from "features/users/ui/UserCard/UserCard.module.css";
import {useSelector} from "react-redux";
import {AppRootState} from "app/store";
import {RequestStatusType} from "app/appReducer";
import {useAppDispatch} from "common";
import {usersThunks} from "features";

type UserWithIndex = User & { userIndex: number };

export const UserCard = (props: UserWithIndex) => {
    const {id, name, photos, status, followed, userIndex} = props;
    const entityStatusButton = useSelector<AppRootState, RequestStatusType>(
        (state) => state.usersStore.users[userIndex].entityStatus,
    );
    const dispatch = useAppDispatch();
    const disabledButton = () => (entityStatusButton === "loading" ? true : false);

    const onClickFollowUserHandler = () => {
        followed ? dispatch(usersThunks.unFollowUser(id)) : dispatch(usersThunks.followUser(id));
    };

    return (
        <Paper elevation={3} className={s.usersWrapper}>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <img
                className={s.avatarPhoto}
                src={
                    photos.small
                        ? photos.small
                        : "https://image-resizing.booztcdn.com/boyhood/boy400041_csmokestained.webp?has_grey=1&has_webp=0&dpr=2.5&size=w400"
                }
                title="avatar"
                alt="avatar"
            />
            <h6>{status ? status : "NO STATUS!!!"}</h6>
            <Button
                className={s.followUserButton}
                color={followed ? "error" : "success"}
                variant="contained"
                disabled={disabledButton()}
                onClick={onClickFollowUserHandler}
                size="large"
            >
                {followed ? "unfollow" : "follow"}
            </Button>
        </Paper>
    );
};

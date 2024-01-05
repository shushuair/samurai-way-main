import React, {useEffect, useState} from 'react';
import s from "./UsersFilter.module.css"
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {appActions, FilterUsersType} from "../../../../../app/model/appReducer";

import {useSelector} from "react-redux";

import {usersThunks} from "../../../model/usersReducer";
import {AppRootState} from "../../../../../app";
import {useAppDispatch} from "../../../../../common";

export const UsersFilter = () => {
    const dispatch = useAppDispatch()
    const initialValueFilterUsers = useSelector<AppRootState, FilterUsersType>(state => state.app.filterUsers)

    const onChangeFilterUsersHandler = (event: SelectChangeEvent) => {
        const newValue = event.target.value as FilterUsersType;
        dispatch(appActions.setFilterUsers({ filterUsers: newValue }));
    }

    useEffect(() => {
        dispatch(usersThunks.getUsers({friend:initialValueFilterUsers === 'followed'? true : undefined }))
    }, [initialValueFilterUsers]);
    return (
        <div>
            <FormControl sx={{m: 1, minWidth: 80}}>
                <InputLabel id="demo-simple-select-autowidth-label">Users</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={initialValueFilterUsers}
                    onChange={onChangeFilterUsersHandler}
                    autoWidth
                    label="Users"
                >
                    <MenuItem value={'all'}>All</MenuItem>
                    <MenuItem value={'followed'}>Followed</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};


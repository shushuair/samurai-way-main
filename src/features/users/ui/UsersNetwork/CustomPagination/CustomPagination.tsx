import React, {ChangeEvent} from 'react';
import Pagination from "@mui/material/Pagination";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {ItemsCountPerPage} from "../../../../../common/types/enums";
import {NativeSelect} from "@mui/material";
import {useAppDispatch} from "../../../../../common";
import {appActions} from "../../../../../app";

export type CustomPaginationProps = {
    totalCount: number,
    paginationPage: number,
    paginationCount: number
}

export const CustomPagination = (props: CustomPaginationProps) => {
    const {totalCount, paginationPage, paginationCount} = props
    const dispatch = useAppDispatch()

    const quantityPages = Math.ceil(totalCount / paginationCount)

    const onChangeSelectItemsCountPerPageHandler = (event: ChangeEvent<{ value: unknown }>) => {
        const count = Number(event.target.value)
        dispatch(appActions.setPaginationAll({count: count, page: 1}))
    }

    const onChangeTotalCountPagesHandler = (event: ChangeEvent<unknown>, page: number) => {
        dispatch(appActions.setPaginationPage({page: page}))
    }

    return (
        <>
            <Pagination count={quantityPages} onChange={onChangeTotalCountPagesHandler} page={paginationPage}/>
            <FormControl sx={{m: 1, minWidth: 80}}>
                <InputLabel id="demo-simple-select-autowidth-label">Page</InputLabel>
                <NativeSelect
                    defaultValue={ItemsCountPerPage.minimumCount}
                    value={paginationCount}
                    onChange={onChangeSelectItemsCountPerPageHandler}
                >
                    <option value={ItemsCountPerPage.minimumCount}>{ItemsCountPerPage.minimumCount}</option>
                    <option value={ItemsCountPerPage.averageCount}>{ItemsCountPerPage.averageCount}</option>
                    <option value={ItemsCountPerPage.maximumCount}>{ItemsCountPerPage.maximumCount}</option>
                </NativeSelect>
            </FormControl>
        </>
    );
};


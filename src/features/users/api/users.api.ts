import {instance} from "../../../common";
import {BaseResponse, UserResponse} from "../../../common";

export const usersApi = {
    getUsers(data: {
        count?: number
        page?: number
        term?: string
        friend?: boolean
    }) {
        return instance.get<UserResponse>("/users", {params: data})
    },
    followUser(userId: number) {
        return instance.post<BaseResponse>(`/follow/${userId}`)
    },
    unFollowUser(userId: number) {
        return instance.delete<BaseResponse>(`/follow/${userId}`)
    }
}



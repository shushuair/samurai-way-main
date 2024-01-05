import {instance} from "common/api/instance";
import {BaseResponse} from "common/types/typeApi";

export const followApi = {
    isFollow(userId: number){
        return instance.get<boolean>("follow/${userId}")
    },
    follow(userId: number){
        return instance.post<BaseResponse>("follow/${userId}")
    },
    unfollow(userId: number){
        return instance.delete<BaseResponse>("follow/${userId}")
    }
}
import {instance} from "./instance";
import {UserResponse, UsersParams} from "./typeApi";

// export const usersApi = {
//     getUsers(data?: UsersParams){
//         return instance.get<UserResponse>("/users", {data})
//     },
// }

export const usersApi = {
    getUsers(){
        return instance.get<UserResponse>("/users")
    },
}
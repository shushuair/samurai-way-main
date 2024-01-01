import {instance} from "./instance";
import {BaseResponse, LoginRequest} from "./typeApi";

export const authApi = {
    login(data: LoginRequest) {
        return instance.post<BaseResponse<{userId: number}>>("auth/login", data)
    },
    logout(){
        return instance.delete<BaseResponse>("auth/login")
    },
    me(){
        return instance.get<BaseResponse<{ id: number; email: string; login: string }>>("auth/me")
    },
    getCaptcha() {
        return instance.get<{ url: string }>("security/get-captcha-url")
    },
}


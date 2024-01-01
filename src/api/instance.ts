import axios from "axios";

export const instance = axios.create({
    params: {
        baseURL: "https://social-network.samuraijs.com/api/1.0",
        headers: {
            "API-KEY": "30526515-95f1-4d41-81b7-50437c774f84",
        },
        withCredentials: true
    }
})
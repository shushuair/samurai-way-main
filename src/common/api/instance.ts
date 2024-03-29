import axios from "axios";

const key = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "key",
  },
});

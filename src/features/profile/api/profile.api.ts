import {BaseResponse, instance, Nullable, Photos, UserProfile} from "common";

export const profileApi = {
  getProfile(userId: number) {
    return instance.get<UserProfile>(`profile/${userId}`);
  },
  getStatus(userId: Nullable<number>) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status: string) {
    return instance.put<BaseResponse>("profile/status", status);
  },
  updateProfile(domainModel: Omit<Omit<UserProfile, "userId">, "photos">) {
    return instance.put<BaseResponse>("profile", domainModel);
  },
  updateMyProfileAvatar(photo: File) {
    const formData = new FormData()
    formData.append('image', photo)
    return instance.put<BaseResponse<{ photos: Photos }>>("profile/photo", formData,
        {headers: {"Content-Type": "multipart/form-data"}});
  },
};

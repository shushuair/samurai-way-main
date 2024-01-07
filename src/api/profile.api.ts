import { BaseResponse, instance, Photos, UserProfile } from "common";

export const profileApi = {
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`);
  },
  changeStatus(status: string) {
    return instance.put<BaseResponse>("profile/status", status);
  },
  getProfile(userId: number) {
    return instance.get<UserProfile>("profile/${userId}");
  },
  updateProfile(domainModel: Omit<UserProfile, "userId">) {
    return instance.put<Omit<UserProfile, "userId">>("profile", domainModel);
  },
  updateMyProfileAvatar(photo: string) {
    return instance.put<BaseResponse<{ photos: Photos }>>("profile/photo", photo);
  },
};

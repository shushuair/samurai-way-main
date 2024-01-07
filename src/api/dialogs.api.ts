import { BaseResponse, instance } from "common";

export const dialogsApi = {
  getAllDialogs() {
    return instance.get<BaseResponse>("dialogs");
  },
  updateDialogs(userId: number) {
    return instance.put<BaseResponse>("dialogs/${userId}");
  },
  getFriendMessages(userId: number, page: number, count: number) {
    return instance.get<BaseResponse>("dialogs/${userId}/messages");
  },
  sendMessage(userId: number, body: string) {
    return instance.post<BaseResponse>("dialogs/${userId}/messages", body);
  },
  isMessageViewed(messageId: number) {
    return instance.get<BaseResponse>("dialogs/messages/${messageId}/viewed");
  },
  isMessageSpam(messageId: number) {
    return instance.post<BaseResponse>("dialogs/messages/${messageId}/spam");
  },
  deleteMessageOnlyForMe(messageId: number) {
    return instance.delete<BaseResponse>("dialogs/messages/{messageId}");
  },
  restoreMessage(messageId: number) {
    return instance.put<BaseResponse>("dialogs/messages/${messageId}/restore");
  },
  sortNewestMessage(userId: number, date: string) {
    return instance.get<BaseResponse>("dialogs/${userId}/messages/new?newerThen={date}");
  },
  newMessagesList() {
    return instance.get<BaseResponse>("dialogs/messages/new/count");
  },
};

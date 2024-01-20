import { Contacts, Nullable } from "common/types/typeApi";

export type UpdateModelProfile = {
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  contacts?: Contacts;
};

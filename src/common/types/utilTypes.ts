import { Contacts, Nullable } from "common/types/typeApi";

export type UpdateModelProfile = {
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  contacts?: Contacts;
};

export type UpdateContacts = {
  facebook?: Nullable<string>;
  website?: Nullable<string>;
  vk?: Nullable<string>;
  twitter?: Nullable<string>;
  instagram?: Nullable<string>;
  youtube?: Nullable<string>;
  github?: Nullable<string>;
  mainLink?: Nullable<string>;
};

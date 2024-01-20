type FieldError = {
  error: string;
  field: string;
};

export type BaseResponse<D = {}> = {
  resultCode: number;
  messages: string[];
  data: D;
  fieldsErrors: FieldError[];
};

export type DataMeResponse = {
  id: number;
  email: string;
  login: string;
};

export type LoginRequest = {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: boolean;
};

export type UsersParams = {
  count?: number;
  page?: number;
  term?: string;
  friend?: boolean;
};

export type Photos = {
  small: Nullable<string>;
  large: Nullable<string>;
};

export type User = {
  followed: boolean;
  id: number;
  name: string;
  photos: Photos;
  status: Nullable<string>;
};

export type UserResponse = {
  items: User[];
  totalCount: number;
  error: null | string;
};

export type Contacts = {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
};

export type UserProfile = {
  userId: Nullable<number>;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: Contacts;
  photos: Photos;
  aboutMe: string;
};

export type Message = {
  id: string;
  body: string;
  translatedBody: null;
  addedAt: string;
  senderId: number;
  senderName: string;
  recipientId: number;
  viewed: boolean;
  photos: Photos;
};

export type Nullable<T> = T | null;

export enum ResultCode {
  Success,
  Error = 1,
  Captcha = 10,
}

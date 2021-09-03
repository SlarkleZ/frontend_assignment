export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  isActivate: boolean;
}

export interface userState {
  users: User[];
  page: number;
}

export enum userActionType {
  GET_USERS = "GET_USERS",
  DELETE_USERS = "DELETE_USERS",
  CHANGE_ACTIVATE_USER = "CHANGE_ACTIVATE_USER",
  PAGE_INCREMENT = "PAGE_INCREMENT"
}
export type userAction = userActionType;

export interface userActionInterface {
  type: userAction;
  payload: any;
}




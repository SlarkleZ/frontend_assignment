import { User, userActionInterface, userActionType } from "./types";
import axios from "axios";
import { AppDispatch } from "../../../App";

export function getUsers(user: User): userActionInterface {
  return {
    type: userActionType.GET_USERS, //GET USERS
    payload: user,
  };
}

export function deleteUsers(): userActionInterface {
  return {
    type: userActionType.DELETE_USERS,
    payload: null
  };
}

export function changeActivateUser(user: User): userActionInterface {
  return {
    type: userActionType.CHANGE_ACTIVATE_USER,
    payload: user
  };
}

export function pageIncrement(): userActionInterface {
  return {
    type: userActionType.PAGE_INCREMENT,
    payload: null
  }
}


export function fetchUsers(page: number) {
  return (dispatch: AppDispatch) => { // async action: uses Redux-Thunk middleware to return a function instead of an action creator
    const url = "https://dummyapi.io/data/v1/user"
    return axios.get(url,{
      headers:{
        "app-id":"6116338ee2fd5bf079651420"
      },
      params:{
        "page": page,
        "limit": "10"
      }
    })
      .then(
        response => {
          const users = response.data.data
          users.map((user: User)=> {
            user.isActivate = true
          })
          dispatch(getUsers(users))
        },
        error => {
          console.log(error) //HANDLE FETCH USER FAIL
        })
  }
}


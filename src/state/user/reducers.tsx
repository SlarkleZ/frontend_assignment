import { userState, userActionType, userActionInterface, User } from "./types";
import axios from "axios";

const initialState: userState = {
  users: [
    /*{
      "id": "60d0fe4f5311236168a109ca",
      "title": "ms",
      "firstName": "Sara",
      "lastName": "Andersen",
      "email": "sara.andersen@example.com",
      "picture": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109cb",
      "title": "miss",
      "firstName": "Edita",
      "lastName": "Vestering",
      "email": "edita.vestering@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109cc",
      "title": "ms",
      "firstName": "Adina",
      "lastName": "Barbosa",
      "email": "edina.barbosa@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109cd",
      "title": "mr",
      "firstName": "Roberto",
      "lastName": "Vega",
      "email": "roberto.vega@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109ce",
      "title": "mr",
      "firstName": "Rudi",
      "lastName": "Droste",
      "email": "rudi.droste@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109cf",
      "title": "mrs",
      "firstName": "Carolina",
      "lastName": "Lima",
      "email": "carolina.lima@example.com",
      "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109d0",
      "title": "mr",
      "firstName": "Emre",
      "lastName": "Asikoglu",
      "email": "emre.asikoglu@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109d1",
      "title": "mr",
      "firstName": "Kent",
      "lastName": "Brewer",
      "email": "kent.brewer@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/52.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109d2",
      "title": "mr",
      "firstName": "Evan",
      "lastName": "Carlson",
      "email": "evan.carlson@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
    },
    {
      "id": "60d0fe4f5311236168a109d3",
      "title": "mr",
      "firstName": "Friedrich-Karl",
      "lastName": "Brand",
      "email": "friedrich-karl.brand@example.com",
      "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
    }*/
  ],
  page: 1
};

export function userReducer(state = initialState, action: userActionInterface): userState {
  switch (action.type) {
    case userActionType.GET_USERS: //GET USERS
      return { ...state, users: state.users.concat(action.payload) };
    case userActionType.DELETE_USERS:
      return { users: [], page:1 };
    case userActionType.PAGE_INCREMENT:
      return { ...state, page: state.page+1}
    case userActionType.CHANGE_ACTIVATE_USER:
      return { ...state, users: state.users.map((user: User)=>{
          if(user.id === action.payload.id){
            user.isActivate = !user.isActivate
          }
          return user
        })};
    default:
      return state;
  }
}

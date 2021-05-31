import {UsersTypes} from "../types/usersTypes";

export const addUsersAC = (payload) => ({
   type: UsersTypes.ADD_USERS,
   payload,

});

export const setUsersAC = (payload) => ({
   type: UsersTypes.SET_USERS,
   payload,

});
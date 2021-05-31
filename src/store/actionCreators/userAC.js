import {UserTypes} from "../types/userTypes";

export const addUserAC = (payload) => ({
   type: UserTypes.ADD_USER,
   payload,

});
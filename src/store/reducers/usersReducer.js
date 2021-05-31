import {UsersTypes} from "../types/usersTypes";

const initialState = {
    users: [],

}

const usersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case UsersTypes.ADD_USERS:
            return {
                users: [...payload],

            }
        case UsersTypes.SET_USERS:
            return {
                users: [...payload],

            }
        default:
            return state;
    }
}

export default usersReducer;
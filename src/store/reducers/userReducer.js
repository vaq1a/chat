import {UserTypes} from "../types/userTypes";

const initialState = {
    roomId: null,
    name: null,
    joined: false,

}

const userReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case UserTypes.ADD_USER:
            return {
                roomId: payload.roomId,
                name: payload.name,
                joined: true,

            }
        default:
            return state;
    }
}

export default userReducer;
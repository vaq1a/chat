import {MessagesTypes} from "../types/messagesTypes";

const initialState = {
    messages: [],

}

const messagesReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case MessagesTypes.ADD_MESSAGE:
            return {
                messages: [...state.messages, payload],

            }
        case MessagesTypes.SET_MESSAGES:
            return {
                messages: payload,

            }
        default:
            return state;
    }
}

export default messagesReducer;
import {MessagesTypes} from "../types/messagesTypes";

export const addMessageAC = (payload) => ({
   type: MessagesTypes.ADD_MESSAGE,
   payload,

});

export const setMessagesAC = (payload) => ({
   type: MessagesTypes.SET_MESSAGES,
   payload,

});
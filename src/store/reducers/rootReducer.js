import userReducer from "./userReducer";
import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import messagesReducer from "./messagesReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    users: usersReducer,
    messages: messagesReducer,

});

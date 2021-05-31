import Input from "../UI/Input/Input";
import Button from "../UI/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addMessageAC} from "../../store/actionCreators/messagesAC";
import socket from "../../socket";
import {useParams} from "react-router-dom";

const AddMessageForm = () => {
    const dispatch = useDispatch();
    const {roomId} = useParams();
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        dispatch(addMessageAC(message));
        setMessage('');

        socket.emit('MESSAGES:ADD_MESSAGE', {
            roomId,
            message,

        });
    }

    return (
        <>
            <Input value={message}
                   onChange={setMessage}
                   placeholder={"Enter your message"} />
            <Button onClick={handleSubmit}>
                Send
            </Button>
        </>
    )
}

export default AddMessageForm;
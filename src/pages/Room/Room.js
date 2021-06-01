import styles from './Room.module.scss';
import {useEffect} from "react";
import socket from "../../socket";
import {useDispatch, useSelector} from "react-redux";
import {addUsersAC, setUsersAC} from "../../store/actionCreators/usersAC";
import {getUsersSelector} from "../../store/selectors/usersSelector";
import {useParams} from "react-router-dom";
import AddMessageForm from "../../components/AddMessageForm";
import {getMessagesSelector} from "../../store/selectors/messagesSelector";
import Message from "../../components/Message";
import {setMessagesAC} from "../../store/actionCreators/messagesAC";

const Room = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsersSelector);
    const messages = useSelector(getMessagesSelector);
    const { roomId } = useParams();

    useEffect(() => {
        socket.on('ROOM:JOINED', users => {
            dispatch(addUsersAC(users));
        });

        socket.on('ROOM:SET_USERS', users => {
            dispatch(setUsersAC(users));
        });

        socket.on('MESSAGES:SET_MESSAGES', messages => {
            dispatch(setMessagesAC(messages));
        });
    }, [dispatch]);


    return (
        <div className={styles.room}>
            <div className={styles.content}>
                <div className={styles.info}>
                        <div className={styles.roomId}>
                            Room: {roomId}
                        </div>
                        <div className={styles.count}>
                            Count users: {users.length}
                        </div>
                        <div className={styles.who}>
                            Кто в комнате:
                            {
                                !!users.length && users.map((login, index) => (
                                    <span key={index} className={styles.login}>{login}</span>
                                ))
                            }
                        </div>
                    </div>
                <div className={styles.messages}>
                    {
                        !!messages.length && messages.map((message, index) => (
                            <Message key={index}
                                     userName={message.userName}
                                     message={message.message} />
                        ))
                    }
                    <AddMessageForm />
                </div>
            </div>
        </div>
    )
}

export default Room;
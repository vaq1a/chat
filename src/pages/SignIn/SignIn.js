import {useState} from 'react';
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input/Input";
import styles from './SignIn.module.scss';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUserAC} from "../../store/actionCreators/userAC";
import axios from "axios";
import socket from "../../socket";

const SignIn = () => {
    const dispatch = useDispatch();

    const [roomId, setRoomId] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        if(!roomId || !name) {
          return alert('Fill in all the fields');
        }

        let obj = {
            roomId,
            name,

        }

        await axios.post('/room', obj);

        dispatch(addUserAC(obj));

        setRoomId('');
        setName('');

        socket.emit('ROOM:JOIN', obj);
        socket.emit('MESSAGES:GET_MESSAGES', {
            roomId
        });
    }

    return (
        <div className={styles.signIn}>
            <div className={styles.form}>
                <div className={styles.content}>
                    <Input placeholder={'room id'}
                           value={roomId}
                           onChange={setRoomId}
                           className={styles.input} />
                    <Input placeholder={'name'}
                           value={name}
                           onChange={setName}
                           className={styles.input} />
                    <Link to={`/room/${roomId}`}>
                        <Button onClick={handleSubmit}>
                            Войти
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn;
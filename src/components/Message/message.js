import styles from "./Message.module.scss";

const Message = ({
    message = '',
    userName = '',

}) => {
    return (
        <div className={styles.message}>
            <span className={styles.text}>
                {message}
            </span>
            <span className={styles.sender}>
                от: {userName}
            </span>
        </div>
    )
}

export default Message;
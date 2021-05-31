import styles from "./Message.module.scss";

const Message = ({
    message = '',

}) => {
    return (
        <div className={styles.message}>
            <span className={styles.text}>
                {message}
            </span>
            {/*<span className={styles.sender}>*/}
            {/*    от: vaq1a*/}
            {/*</span>*/}
        </div>
    )
}

export default Message;
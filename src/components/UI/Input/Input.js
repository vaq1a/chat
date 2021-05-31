import styles from './Input.module.scss';
import {classNamesToString} from "../../../utilites/classNamesToString";

const Input = ({
    placeholder = '',
    value = '',
    type = 'text',
    className = '',
    onChange = () => {},

}) => {

    const classes = classNamesToString(
        styles.input,
        className,
    );

    const handleInput = (e) => {
        onChange(e.currentTarget.value);
    }

    return (
        <input placeholder={placeholder}
               className={classes}
               onChange={handleInput}
               value={value}
               type={type} />
    )
}

export default Input;
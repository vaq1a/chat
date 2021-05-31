import {classNamesToString} from "../../../utilites/classNamesToString";
import styles from './Button.module.scss';

const ButtonSize = {
    small: styles.__small,
    large: styles.__large,

};

const ButtonTheme = {
    light: styles.__light,
    dark: styles.__dark,

};

const Button = ({
    children,
    className,
    size = ButtonSize.small,
    theme = ButtonTheme.light,
    onClick = () => {},

}) => {

    const classes = classNamesToString(
       styles.button,
       className,
       size,
       theme,

    );

    return (
        <div className={classes}
             onClick={onClick}>
            {children}
        </div>
    )
}

export {
    ButtonSize,
    ButtonTheme
}

export default Button;
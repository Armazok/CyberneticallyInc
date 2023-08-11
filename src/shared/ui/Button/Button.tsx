import {FC, memo} from 'react';
import "./Button.css"

interface IButton {
    textBtn: string
    onClickHandler: () => void
    disabled: boolean
}

export const Button: FC<IButton> = memo(({
                                             onClickHandler,
                                             disabled,
                                             textBtn
                                         }) => {
    return (
        <button
            className="button-62"
            role="button"
            disabled={disabled}
            onClick={onClickHandler}
        >
            {textBtn}
        </button>
    );
});

import {memo} from 'react';
import './Text.css';


interface IText {
    title?: string
    text?: string
}

export const Text = memo(({
                              text,
                              title,
                          }: IText) => {

    return (
        <div className={'Text'}>
            {title && <p>{title}</p>}
            {text && <p>{text}</p>}
        </div>
    );
});

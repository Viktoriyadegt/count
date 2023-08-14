import React from 'react';

export type ButtonType = {
    title: string
    callback: () => void
    className: string
    disabled:boolean
}

const Button = (props: ButtonType) => {
    return (
        <div>
            <button className={props.className}
                    disabled={props.disabled} onClick={props.callback}>{props.title}
            </button>
        </div>
    );
};

export default Button;
import styles from './input.module.css';
import * as React from 'react';

type Props = {
    color?: 'default' | 'success' | 'error';
    onClick?: () => void;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    type?: 'text' | 'password' | 'email' | 'number';
};

export function Input(props: Props) {
    const classnames = [styles.input];

    if (props.color === 'default') {
        classnames.push(styles.default);
    } else if (props.color === 'success') {
        classnames.push(styles.success);
    } else if (props.color === 'error') {
        classnames.push(styles.error);
    }

    if (props.disabled) {
        classnames.push(styles.disabled);
    }
    return (
        <>
            <input
                type={props.type || 'text'}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                disabled={props.disabled}
                onClick={() => props.onClick?.()}
                className={classnames.join(' ')}
            ></input>
        </>
    );
}

import styles from './UI-css/button.module.css';

type Props = {
    color: 'default' | 'success' | 'danger' | 'primary';
    onClick?: () => void;
    text: string;
    disabled?: boolean;
    readonly?: boolean;
    type?: 'submit' | 'button' | 'reset';
};

export function Button(props: Props) {
    const classnames = [styles.button];

    if (props.color === 'default') {
        classnames.push(styles.default);
    } else if (props.color === 'success') {
        classnames.push(styles.success);
    } else if (props.color === 'danger') {
        classnames.push(styles.danger);
    } else if (props.color === 'primary') {
        classnames.push(styles.primary);
    }

    if (props.disabled) {
        classnames.push(styles.disabled);
    }

    return (
        <>
            <button
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={() => {
                    if (props.readonly) return;
                    props.onClick?.();
                }}
                className={classnames.join(' ')}
            >
                {props.text}
            </button>
        </>
    );
}

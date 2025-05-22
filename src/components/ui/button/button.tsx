import styles from './button.module.css';

type Props = {
    color:
        | 'default'
        | 'success'
        | 'danger'
        | 'primary'
        | 'disabledButtons'
        | 'disabledButton';
    onClick?: () => void;
    text: string;
    disabled?: boolean;
    type?: 'submit' | 'button' | 'reset';
    index?: number;
    // size: 'lg' | 'md' | 'sm'
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
    } else if (props.color === 'disabledButtons') {
        classnames.push(styles.disabledButtons);
    } else if (props.color === 'disabledButton') {
        classnames.push(styles.disabledButton);
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
                    props.onClick?.();
                }}
                className={classnames.join(' ')}
            >
                {props.index !== undefined && (
                    <span className={styles.optionNumber}>
                        {props.index + 1}
                    </span>
                )}
                {props.text}
            </button>
        </>
    );
}

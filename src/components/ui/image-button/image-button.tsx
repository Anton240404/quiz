import styles from './image-button.module.css';

type Props = {
    variant: 'default' | 'incorrect' | 'correct';
    onClick?: () => void;
    url: string;
    disabled?: boolean;
};

export function ImageButton(props: Props) {
    const classnames = [styles.imageButton];

    if (props.variant === 'default') {
        classnames.push(styles.default);
    } else if (props.variant === 'incorrect') {
        classnames.push(styles.incorrect);
    } else if (props.variant === 'correct') {
        classnames.push(styles.correct);
    }

    if (props.disabled) {
        classnames.push(styles.disabled);
    }

    return (
        <>
            <button disabled={props.disabled}
                    onClick={() => {
                        props.onClick?.();
                    }}
                    style={{
                        backgroundImage: `url(${props.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '300px',
                    }}
                    className={classnames.join(' ')}
            >
            </button>
        </>
    );
}

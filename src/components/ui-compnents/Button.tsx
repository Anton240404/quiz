import styles from './UI-css/Button.module.css'

type Props = {
    color: 'default' | 'correct' | 'incorrect' | 'next' | 'nextDefault' | 'nextDisabled',
    onClick?: () => void,
    text: string,
    disabled?: boolean;
    type?: 'submit' | 'button' | "reset"
}

export function Button(props: Props) {
    const classnames = [styles.button]

    if (props.color === 'default') {
        classnames.push(styles.default)
    } else if (props.color === 'correct') {
        classnames.push(styles.correct)
    } else if (props.color === 'incorrect') {
        classnames.push(styles.incorrect)
    } else if (props.color === 'next'){
        classnames.push(styles.next)
    } else if (props.color === 'nextDefault'){
        classnames.push(styles.nextDefault)
    }else if (props.color === 'nextDisabled'){
        classnames.push(styles.nextDisabled)
    }


    if (props.disabled) {
        classnames.push(styles.disabled);
    }

    return (
        <>
            <button type={props.type || 'button'} disabled={props.disabled} onClick={() => props.onClick?.()}
                    className={classnames.join(' ')}>{props.text}</button>
        </>
    )
}
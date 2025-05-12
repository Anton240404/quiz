import styles from './UI-css/popup.module.css';

type Props = {
    title: string;
    text: string;
    onCancel: () => void;
    isOpen: boolean;
}

export function PopupInfo(props: Props) {
    if (!props.isOpen) return null;
    return (
        <div className={styles.container}>
            <div className={styles.popup}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.subTitle}>{props.text}</p>
                <button className={styles.buttonNo} onClick={props.onCancel}>НЕТ</button>
            </div>
        </div>
    );
}
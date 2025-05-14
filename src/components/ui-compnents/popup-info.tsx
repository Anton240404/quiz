import styles from './UI-css/popup.module.css';

type Props = {
    title: string;
    text: string;
    onCancel: () => void;
    isOpen: boolean;
}

export function PopupInfo(props: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.popup}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.subTitle}>{props.text}</p>
                <button className={styles.buttonNo} onClick={props.onCancel}>Закрыть</button>
            </div>
        </div>
    );
}
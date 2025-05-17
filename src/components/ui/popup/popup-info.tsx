import styles from './popup.module.css';

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
                <div className={styles.content}>
                    <h2 className={styles.title}>{props.title}</h2>
                    <p className={styles.subTitle}>{props.text}</p>
                </div>
                <button className={styles.buttonNo} onClick={props.onCancel}>ЗАКРЫТЬ</button>
            </div>
        </div>
    );
}
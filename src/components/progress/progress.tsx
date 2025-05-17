import styles from './progress.module.css';
import arrow from '../../../public/assets/growth-arrow.png';

type Props = {
    title: string;
    subTitle: string;
    onConfirm: () => void;
    onCancel: () => void;
    isOpen: boolean;
};

export function Progress(props: Props) {
    if (!props.isOpen) return null;

    return (
        <div className={styles.container}>
            <div className={styles.popup}>
                <img src={arrow} alt={arrow} className={styles.arrow} />
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.subTitle}>{props.subTitle}</p>
                <div className={styles.containerButtons}>
                    <button
                        className={styles.buttonYes}
                        onClick={props.onConfirm}
                    >
                        ДА
                    </button>
                    <button
                        className={styles.buttonNo}
                        onClick={props.onCancel}
                    >
                        НЕТ
                    </button>
                </div>
            </div>
        </div>
    );
}

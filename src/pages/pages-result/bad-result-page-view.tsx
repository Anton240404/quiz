// bad-result-page-view.tsx
import styles from './pages-result-css/bad-result-page.module.css';
import iconBad from '../../../public/assets/iconBad.png';
import { Button } from '../../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';

type Props = {
    correctAnswers: number;
    allAnswers: number;
    onNext: () => void;
};

export function BadResultPageView(props: Props) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img
                    src={iconBad}
                    alt="Bad Result"
                    className={styles.iconBad}
                />
                <h3 className={styles.resultTitle}>Не сдавайся!</h3>
                <p className={styles.resultText}>
                    ВЫ ОТВЕТИЛИ ПРАВИЛЬНО НА {props.correctAnswers} / {props.allAnswers} ВОПРОСОВ
                </p>
            </div>

            <div className={styles.controlsContainer}>
                <div className={styles.buttonContainer}>
                    <Button
                        text={'НА ГЛАВНУЮ'}
                        onClick={() => navigate('/')}
                        color={'primary'}
                    />
                    <Button
                        text={'ПРОДОЛЖИТЬ КВИЗ'}
                        onClick={props.onNext}
                        color={'primary'}
                    />
                </div>
            </div>
        </div>
    );
}

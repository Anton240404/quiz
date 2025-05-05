import styles from './pages-result-css/excellent-reult-page.module.css'
import iconExcellent from '../../assets/iconExcellent.png'
import { Button } from '../../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';

type Props = {
    correctAnswers: number,
    allAnswers: number,
    onNext: () => void
}

export function ExcellentResultPageView(props: Props) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src={iconExcellent} alt="Good Result" className={styles.iconBad} />
                <h3 className={styles.resultTitle}>Вы справились отлично!</h3>
                <p className={styles.resultText}>
                    Вы ответили правильно на {props.correctAnswers} / {props.allAnswers} вопросов
                </p>
            </div>

            <div className={styles.controlsContainer}>
                <div className={styles.buttonConteiner}>
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

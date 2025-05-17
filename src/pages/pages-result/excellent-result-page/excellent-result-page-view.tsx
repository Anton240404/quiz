import styles from './excellent-reult-page.module.css';
import iconExcellent from '../../../../public/assets/iconExcellent.png';
import { Button } from '../../../components/ui/button/button.tsx';
import { useNavigate } from 'react-router-dom';

type Props = {
    correctAnswers: number;
    allAnswers: number;
    onNext: () => void;
};

export function ExcellentResultPageView(props: Props) {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img
                    src={iconExcellent}
                    alt="Good Result"
                    className={styles.iconBad}
                />
                <h3 className={styles.resultTitle}>Вы справились отлично!</h3>
                <p className={styles.resultText}>
                    ВЫ ОТВЕТИЛИ ПРАВИЛЬНО НА {props.correctAnswers} /{' '}
                    {props.allAnswers} ВОПРОСОВ
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

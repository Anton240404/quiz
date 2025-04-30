import { useNavigate } from 'react-router-dom';
import styles from './css/quiz-intro.module.css';

export function QuizIntro() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.intro}></div>
            {/*<img src={intro} alt={'intro'} className={styles.intro} height={650} width={1667} />*/}
            <div className={styles.buttons}>
                <button
                    className={styles.button}
                    onClick={() => navigate('/')}
                >
                    На главную
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigate('/quiz/1')}
                >
                    Начать
                </button>
            </div>
        </div>
    );
}
import { useNavigate, useParams } from 'react-router-dom';
import styles from './quiz-intro.module.css';
import { toursData } from '../../data/tours-data.ts';

export function QuizIntro() {
    const navigate = useNavigate();
    const { tourIndex } = useParams<{ tourIndex: string }>();

    const currentTourIndex = tourIndex ? parseInt(tourIndex, 10) : 0;

    const isValidIndex =
        currentTourIndex >= 0 && currentTourIndex < toursData.length;

    if (!isValidIndex) {
        navigate('/');
        return null;
    }
    const currentTour = toursData[currentTourIndex];
    const tourNumberText = `${currentTourIndex + 1} тур`;

    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.tourInfo}>
                    <h1 className={styles.tourName}>{tourNumberText}</h1>

                    <h2 className={styles.tourTitle}>{currentTour.title}</h2>
                </div>
            </div>
            <div className={styles.buttons}>
                <button className={styles.button} onClick={() => navigate('/')}>
                    На главную
                </button>
                <button
                    className={styles.button}
                    onClick={() => navigate(`/quiz/${currentTourIndex}`)}
                >
                    Начать
                </button>
            </div>
        </div>
    );
}

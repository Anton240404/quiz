import { useNavigate, useParams } from 'react-router-dom';
import styles from './css/quiz-intro.module.css';
import { toursData } from '../data/tours-data';

export function QuizIntro() {
    const navigate = useNavigate();
    const { tourIndex } = useParams<{ tourIndex: string }>();

    // Преобразуем строковый параметр в число
    const currentTourIndex = tourIndex ? parseInt(tourIndex, 10) : 0;

    // Проверяем, что индекс в допустимом диапазоне
    const isValidIndex =
        currentTourIndex >= 0 && currentTourIndex < toursData.length;

    // Если индекс недопустимый, перенаправляем на главную
    if (!isValidIndex) {
        navigate('/');
        return null;
    }

    // Получаем данные текущего тура
    const currentTour = toursData[currentTourIndex];

    // Формируем текст для отображения номера тура
    const tourNumberText = `${currentTourIndex + 1} тур`;

    return (
        <div className={styles.container}>
            <div className={styles.intro}>
                <div className={styles.tourInfo}>
                    {/* Отображаем номер тура */}
                    <h1 className={styles.tourName}>{tourNumberText}</h1>

                    {/* Отображаем название тура из данных */}
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

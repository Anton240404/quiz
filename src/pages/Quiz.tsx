import { useState } from 'react';
import { toursData } from '../data/Questions';
import styles from './css/quiz.module.css';

export function Quiz() {
    const [currentTourIndex, setCurrentTourIndex] = useState(0);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const [tours, setTours] = useState(toursData);

    const currentTour = tours[currentTourIndex];
    const currentPage = currentTour.pages[currentPageIndex]; // Берем текущий вопрос

    // @ts-expect-error
    const selectedAnswer: string | undefined = tours[currentTourIndex].pages[currentPageIndex].selectedAnswer
    const hasSelectedAnswer: boolean = true
    const isAnswerCorrect: boolean = true

    if (currentPage.type !== 'SingleAnswerQuestionPage') {
        return <div>Страница не поддерживается</div>;
    }

    const handleAnswer = (answer: string) => {
        const copy = [...tours];
        const page = tours[currentTourIndex].pages[currentPageIndex];
        if (page.type === 'SingleAnswerQuestionPage') {
            page.selectedAnswer = answer;
        }
        setTours(copy);
    };

    const handleNext = () => {

    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.questionNumber}>
                Вопрос {currentPageIndex + 1} / {currentTour.pages.length}
            </h2>
            <p className={styles.questionText}>
                {currentPage.question}
            </p>
            <div className={styles.options}>
                {currentPage.options.map((option, index) => (
                    <button
                        className={`${styles.button} ${
                            selectedAnswer === option
                                ? isAnswerCorrect
                                    ? styles.correct
                                    : styles.incorrect
                                : ''
                        }`}
                        key={index}
                        onClick={() => handleAnswer(option)}
                        disabled={!!selectedAnswer}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {hasSelectedAnswer && (
                <>
                    <p className={styles.resultMessage}>
                        {isAnswerCorrect ? 'Верно!' : 'Неверно!'} Правильный ответ: {currentPage.correctAnswer}
                    </p>
                </>
            )}
            // Disabled
            <button onClick={handleNext} className={styles.nextButton} disabled={false}>
                ДАЛЕЕ
            </button>
        </div>
    );
}
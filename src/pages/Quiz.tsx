import { useState } from 'react';
import { toursData } from '../data/tours-data.ts';
import styles from './css/quiz.module.css';
import { useNavigate } from 'react-router-dom';
import { SingleAnswerQuestionPageView } from './single-answer-question-page-view.tsx';
/*import { BadResultPageView } from './bad-result-page-view.tsx';*/

export function Quiz() {
    const navigate = useNavigate();
    const [currentTourIndex, setCurrentTourIndex] = useState(0);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const [tours, setTours] = useState(toursData);

    const currentTour = tours[currentTourIndex];
    const currentPage = currentTour.pages[currentPageIndex];

    let selectedAnswer: string | undefined = undefined;
    let correctAnswer: string | undefined = undefined;

    if (currentPage.type === 'SingleAnswerQuestionPage') {
        selectedAnswer = currentPage.selectedAnswer;
        correctAnswer = currentPage.correctAnswer;
    }

    const hasSelectedAnswer = Boolean(selectedAnswer);

    const handleNext = () => {
        if (currentPageIndex < currentTour.pages.length - 1) {
            setCurrentPageIndex((prev) => prev + 1);
        } else if (currentTourIndex < tours.length - 1) {
            setCurrentTourIndex((prev) => prev + 1);
            setCurrentPageIndex(0);
        }
    };

    return (
        <div className={styles.wrapper}>
            {currentPage.type === 'SingleAnswerQuestionPage' && (
                <SingleAnswerQuestionPageView
                    page={currentPage}
                    onNext={handleNext}
                />
            )}
            {/* {currentPage.type === 'BadResultPage' && (
                <BadResultPageView
                    onNext={handleNext}
                    correctAnswers={9}
                    allAnswers={12}
                />
            )}
            {currentPage.type === 'GoodResultPage' && (
                <BadResultPageView onNext={handleNext} />
            )}
            {currentPage.type === 'ExcellentResultPage' && (
                <BadResultPageView />
            )} */}
        </div>
    );
}

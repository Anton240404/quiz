import { useState } from 'react';
import { toursData } from '../data/tours-data.ts';
import styles from './css/quiz.module.css';
import { SingleAnswerQuestionPageView } from './single-answer-question-page-view.tsx';
import { useNavigate } from 'react-router-dom';
import { BadResultPageView } from './bad-result-page-view.tsx';
import { getQuestionsPages } from './lib.ts';
import { Page } from '../types/Types.ts';

function calculateResult(pages: Page[]) {
    const correctAnswers = pages.filter((page) => {
        if (page.type === 'SingleAnswerQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'InputQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        }
    });
    return {
        correctQuestionsCount: correctAnswers.length,
        questionsCount: getQuestionsPages(pages).length,
    };
}

export function Quiz() {
    const navigate = useNavigate();
    const [currentTourIndex] = useState(0);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [tours, setTours] = useState(toursData);

    const currentTour = tours[currentTourIndex];
    const currentPage = currentTour.pages[currentPageIndex];

    const handleNext = () => {
        if (currentPageIndex < currentTour.pages.length - 1) {
            // Переход к следующему вопросу в текущем туре
            setCurrentPageIndex((prev) => prev + 1);
        } else if (currentTourIndex < tours.length - 1) {
            // Если это последний вопрос в туре, но не последний тур
            // Перенаправляем на страницу intro для следующего тура
            navigate(`/quiz-intro/${currentTourIndex + 1}`);
        } else {
            // Если это последний вопрос последнего тура
            // Можно перенаправить на страницу с итоговыми результатами
            navigate('/');
        }
    };

    function renderResultPage() {
        if (currentPage.type !== 'ResultPage') return;

        const { correctAnswers, allAnswers } = calculateResult(currentTour.pages);

        const view = currentPage.pages.find(x => {
            const [min, max] = x.range; // [0, 5]
            // const min = x.range[0];
            // const max = x.range[1];
            return correctAnswers >= min && correctAnswers <= max;
        });

        if (!view) return;

        return <>
            <>
                {view.type === 'BadResultPage' && (
                    <BadResultPageView
                        onNext={handleNext}
                        correctAnswers={correctAnswers}
                        allAnswers={allAnswers}
                    />
                )}
                {view.type === 'GoodResultPage' && (
                    <GoodResultPageView
                        onNext={handleNext}
                        correctAnswers={correctAnswers}
                        allAnswers={allAnswers}
                    />
                )}
                {view.type === 'ExcellentResultPage' && (
                    <ExcellentResultPageView
                        onNext={handleNext}
                        correctAnswers={correctAnswers}
                        allAnswers={allAnswers}
                    />
                )}
            </>
        </>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {currentPage.type === 'SingleAnswerQuestionPage' && (
                    <SingleAnswerQuestionPageView
                        page={currentPage}
                        onNext={handleNext}
                        currentPageIndex={currentPageIndex}
                        currentTourIndex={currentTourIndex}
                        tours={tours}
                        setTours={setTours}
                    />
                )}
                {renderResultPage()}
                {/* {currentPage.type === 'GoodResultPage' && (
                <BadResultPageView onNext={handleNext} />
            )}
            {currentPage.type === 'ExcellentResultPage' && (
                <BadResultPageView />
            )} */}
            </div>
        </div>
    );
}

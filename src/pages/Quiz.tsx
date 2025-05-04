import { useState } from 'react';
import { toursData } from '../data/tours-data.ts';
import styles from './css/quiz.module.css';
import { SingleAnswerQuestionPageView } from './single-answer-question-page-view.tsx';
import { useNavigate, useParams } from 'react-router-dom';
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
    const {tourIndex} = useParams();
    const [currentTourIndex, setCurrentTourIndex] = useState(Number(tourIndex) || 0);
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
            const nextTourIndex = currentTourIndex + 1; // Определяем nextTourIndex
            navigate(`/quiz-intro/${nextTourIndex}`);
        } else {
            // Если это последний вопрос последнего тура
            // Находим страницу результатов в туре и переключаемся на неё
            const resultPageIndex = currentTour.pages.findIndex(page => page.type === 'ResultPage');
            if (resultPageIndex !== -1) {
                setCurrentPageIndex(resultPageIndex);
            } else {
                // Если страница результатов не найдена, перенаправляем на главную
                navigate('/');
            }
        }
    };

    function renderResultPage() {
        if (currentPage.type !== 'ResultPage') return;

        const { correctQuestionsCount, questionsCount } = calculateResult(currentTour.pages);

        const view = currentPage.pages.find(x => {
            const [min, max] = x.range; // [0, 5]
            return correctQuestionsCount >= min && correctQuestionsCount <= max;
        });

        if (!view) return;

        return <>
            <>
                {view.type === 'BadResultPage' && (
                    <BadResultPageView
                        onNext={() => {
                            if (currentTourIndex < tours.length - 1) {
                                // Переход к следующему туру
                                setCurrentTourIndex(prev => prev + 1);
                                setCurrentPageIndex(0); // Сброс индекса страницы
                                navigate(`/quiz-intro/${currentTourIndex + 1}`);
                            } else {
                                // Если это последний тур, перенаправляем на главную
                                navigate('/');
                            }
                        }}
                        correctAnswers={correctQuestionsCount}
                        allAnswers={questionsCount}
                    />
                )}
                {/*{view.type === 'GoodResultPage' && (
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
                )}*/}
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

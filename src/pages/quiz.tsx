import { useState } from 'react';
import { toursData } from '../data/tours-data.ts';
import styles from './css/quiz.module.css';
import { SingleAnswerQuestionPageView } from './single-answer-question-page-view.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { BadResultPageView } from './pages-result/bad-result-page-view.tsx';
import { getQuestionsPages } from './lib.ts';
import { Page } from '../types/types.ts';
import { GoodResultPageView } from './pages-result/good-result-page-view.tsx';
import { ExcellentResultPageView } from './pages-result/excellent-result-page-view.tsx';
import { SingleAnswerAndImageQuestionPageView } from './single-answer-and-image-question-page.tsx';
import { InfoPageView } from './info/info-page-view.tsx';
import { SingleAnswerQuestionAndImageQuestionPageView } from './single-answer-question-and-image-question-page.tsx';
import { MultiSelectAnswerQuestionPageView } from './multi-select-answer-question-page-view.tsx';
import { TwoColumnsWithTitlePageView } from './info/two-columns-with-title-page-view.tsx';
import { InputQuestionPageView } from './input-question-page.tsx';
import { Progress } from '../components/ui-compnents/progress.tsx';

function calculateResult(pages: Page[]) {
    const correctAnswers = pages.filter((page) => {
        if (page.type === 'SingleAnswerQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'SingleAnswerAndImageQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'MultiSelectAnswerQuestionPage') {
            return page.selectedAnswers === page.correctAnswers;
        }else if (page.type === 'InputQuestionPage') {
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
    const { tourIndex } = useParams();
    const [currentTourIndex, setCurrentTourIndex] = useState(
        Number(tourIndex) || 0
    );
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [tours, setTours] = useState(toursData);
    const [showExitPopup, setShowExitPopup] = useState(false);

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
            const resultPageIndex = currentTour.pages.findIndex(
                (page) => page.type === 'ResultPage'
            );
            if (resultPageIndex !== -1) {
                setCurrentPageIndex(resultPageIndex);
            } else {
                // Если страница результатов не найдена, перенаправляем на главную
                navigate('/');
            }
        }
    };
    const handleExitAttempt = () => {
        setShowExitPopup(true);
    };

    const handleConfirmExit = () => {
        // Сбрасываем прогресс (опционально)
        const resetTours = toursData.map(tour => ({
            ...tour,
            pages: tour.pages.map(page => {
                if (page.type === 'SingleAnswerQuestionPage' ||
                    page.type === 'SingleAnswerAndImageQuestionPage' ||
                    page.type === 'InputQuestionPage') {
                    return { ...page, selectedAnswer: undefined };
                } else if (page.type === 'MultiSelectAnswerQuestionPage') {
                    return { ...page, selectedAnswers: undefined };
                }
                return page;
            })
        }));

        setTours(resetTours);
        setShowExitPopup(false);
        navigate('/');
    };

    const handleCancelExit = () => {
        setShowExitPopup(false);
    };


    function renderResultPage() {
        if (currentPage.type !== 'ResultPage') return;

        const { correctQuestionsCount, questionsCount } = calculateResult(
            currentTour.pages
        );

        const view = currentPage.pages.find((x) => {
                const [min, max] = x.range;
                return correctQuestionsCount >= min && correctQuestionsCount <= max;
        });

        if (!view) return;


        return (
            <>
                {view.type === 'BadResultPage' && (
                    <BadResultPageView
                        onNext={() => {
                            if (currentTourIndex < tours.length - 1) {
                                // Переход к следующему туру
                                setCurrentTourIndex((prev) => prev + 1);
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
                {view.type === 'GoodResultPage' && (
                    <GoodResultPageView
                        onNext={() => {
                            if (currentTourIndex < tours.length - 1) {
                                setCurrentTourIndex((prev) => prev + 1);
                                setCurrentPageIndex(0);
                                navigate(`/quiz-intro/${currentTourIndex + 1}`);
                            } else {
                                navigate('/');
                            }
                        }}
                        correctAnswers={correctQuestionsCount}
                        allAnswers={questionsCount}
                    />
                )}
                {view.type === 'ExcellentResultPage' && (
                    <ExcellentResultPageView
                        onNext={() => {
                            if (currentTourIndex < tours.length - 1) {
                                setCurrentTourIndex((prev) => prev + 1);
                                setCurrentPageIndex(0);
                                navigate(`/quiz-intro/${currentTourIndex + 1}`);
                            } else {
                                navigate('/');
                            }
                        }}
                        correctAnswers={correctQuestionsCount}
                        allAnswers={questionsCount}
                    />
                )}
            </>
        );
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
                        onExitAttempt={handleExitAttempt}
                    />
                )}
                {renderResultPage()}
                {currentPage.type === 'SingleAnswerAndImageQuestionPage' && (
                    <SingleAnswerAndImageQuestionPageView
                        page={currentPage}
                        onNext={handleNext}
                        currentPageIndex={currentPageIndex}
                        currentTourIndex={currentTourIndex}
                        tours={tours}
                        setTours={setTours}
                        onExitAttempt={handleExitAttempt}
                    />
                )}
                {currentPage.type === 'InfoPage' && (
                    <InfoPageView
                        onNext={() => {
                            if (currentTourIndex < tours.length - 1) {
                                setCurrentTourIndex((prev) => prev + 1);
                                setCurrentPageIndex(0);
                                navigate(`/quiz-intro/${currentTourIndex + 1}`);
                            } else {
                                navigate('/');
                            }
                        }}
                    />
                )}
                {currentPage.type === 'SingleAnswerQuestionAndImageQuestionPage' && (
                    <SingleAnswerQuestionAndImageQuestionPageView
                        page={currentPage}
                        onNext={handleNext}
                        currentPageIndex={currentPageIndex}
                        currentTourIndex={currentTourIndex}
                        tours={tours}
                        setTours={setTours}
                        onExitAttempt={handleExitAttempt}
                    />
                )}
                {currentPage.type === 'MultiSelectAnswerQuestionPage' && (
                    <MultiSelectAnswerQuestionPageView
                        page={currentPage}
                        onNext={handleNext}
                        currentPageIndex={currentPageIndex}
                        currentTourIndex={currentTourIndex}
                        tours={tours}
                        setTours={setTours}
                        onExitAttempt={handleExitAttempt}
                    />
                )}
                {currentPage.type === 'TwoColumnsWithTitlePage' && (
                    <TwoColumnsWithTitlePageView
                        page={currentPage}
                        onNext={() => {
                            if (currentTourIndex < tours.length - 1) {
                                setCurrentTourIndex((prev) => prev + 1);
                                setCurrentPageIndex(0);
                                navigate(`/quiz-intro/${currentTourIndex + 1}`);
                            } else {
                                navigate('/');
                            }
                        }}
                    />
                )}
                {currentPage.type === 'InputQuestionPage' && (
                    <InputQuestionPageView
                        page={currentPage}
                        onNext={handleNext}
                        currentPageIndex={currentPageIndex}
                        currentTourIndex={currentTourIndex}
                        tours={tours}
                        setTours={setTours}
                        onExitAttempt={handleExitAttempt}
                    />
                )}
                <Progress
                    isOpen={showExitPopup}
                    title="Весь прогресс будет утерян"
                    subTitle="Вы уверены что хотите выйти?"
                    onConfirm={handleConfirmExit}
                    onCancel={handleCancelExit}
                />
            </div>
        </div>
    );
}

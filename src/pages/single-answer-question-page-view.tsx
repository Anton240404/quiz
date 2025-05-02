import { SingleAnswerQuestionPage } from '../types/Types.ts';
import { useState } from 'react';
import { toursData } from '../data/tours-data.ts';
import styles from './css/quiz.module.css';
import { Button } from '../components/ui-compnents/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { getQuestionsPages } from './lib.ts';

type Props = {
    page: SingleAnswerQuestionPage;
    onNext: any;
};

export function SingleAnswerQuestionPageView(props: Props) {
    const handleAnswer = (answer: string) => {
        const copy = [...tours];
        const page = tours[currentTourIndex].pages[currentPageIndex];
        if (page.type === 'SingleAnswerQuestionPage') {
            page.selectedAnswer = answer;
        }
        setTours(copy);
    };

    const handleNext = () => {
        if (currentPageIndex < currentTour.pages.length - 1) {
            setCurrentPageIndex((prev) => prev + 1);
        } else if (currentTourIndex < tours.length - 1) {
            setCurrentTourIndex((prev) => prev + 1);
            setCurrentPageIndex(0);
        }
    };

    const getButtonColor = (option: string) => {
        if (!hasSelectedAnswer) return 'default';
        if (option === correctAnswer && option === selectedAnswer)
            return 'correct';
        if (option !== correctAnswer && option === selectedAnswer)
            return 'incorrect';
        if (option === correctAnswer && selectedAnswer !== correctAnswer)
            return 'correct';
        return 'default';
    };

    const questionPages = getQuestionsPages(currentTour.pages);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.questionNumber}>
                Вопрос {currentPageIndex + 1} / {questionPages.length}
            </h2>
            <p className={styles.questionText}>{currentPage.question}</p>
            <div className={styles.options}>
                {currentPage.options.map((option, index) => (
                    <Button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        disabled={hasSelectedAnswer}
                        color={getButtonColor(option)}
                        text={option}
                    />
                ))}
            </div>

            <div className={styles.buttonConteiner}>
                <Button
                    text={'НА ГЛАВНУЮ'}
                    onClick={() => navigate('/')}
                    color={'nextDefault'}
                ></Button>
                <Button
                    text={
                        currentTourIndex < tours.length - 1
                            ? 'ДАЛЕЕ'
                            : 'ПРОДОЛЖИТЬ КВИЗ'
                    }
                    onClick={() => props.onNext()}
                    color={!hasSelectedAnswer ? 'nextDefault' : 'next'}
                    // Todo: Добавить выключенный цвет
                    disabled={!hasSelectedAnswer}
                ></Button>
            </div>
        </div>
    );
}

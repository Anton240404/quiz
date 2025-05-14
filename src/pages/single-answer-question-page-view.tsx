import { SingleAnswerQuestionPage, Tour } from '../types/types.ts';
import styles from './css/quiz.module.css';
import { Button } from '../components/ui-compnents/button.tsx';
import { getQuestionsPages } from './lib.ts';
import * as React from 'react';

type Props = {
    page: SingleAnswerQuestionPage;
    onNext: () => void;
    currentPageIndex: number;
    currentTourIndex: number;
    tours: Tour[];
    setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
    onExitAttempt: () => void;
};

export function SingleAnswerQuestionPageView(props: Props) {

    const currentTour = props.tours[props.currentTourIndex];
    const selectedAnswer = props.page.selectedAnswer;
    const correctAnswer = props.page.correctAnswer;

    const hasSelectedAnswer = Boolean(selectedAnswer);

    const handleAnswer = (answer: string) => {
        const copy = [...props.tours];
        const currentPage =
            copy[props.currentTourIndex].pages[props.currentPageIndex];
        if (currentPage.type === 'SingleAnswerQuestionPage') {
            currentPage.selectedAnswer = answer;
        }
        props.setTours(copy);
    };

    const getButtonColor = (option: string) => {
        if (!hasSelectedAnswer) return 'default';
        if (option === correctAnswer && option === selectedAnswer)
            return 'success';
        if (option !== correctAnswer && option === selectedAnswer)
            return 'danger';
        if (option === correctAnswer && selectedAnswer !== correctAnswer)
            return 'success';
        return 'default';
    };

    const questionPages = getQuestionsPages(currentTour.pages);

    return (
        <>
            <div className={styles.questionContainer}>
                <h2 className={styles.questionNumber}>
                    Вопрос {props.currentPageIndex + 1} / {questionPages.length}
                </h2>
                <p className={styles.questionText}>{props.page.question}</p>
            </div>

            <div className={styles.controlsContainer}>
                <div className={styles.options}>
                    {props.page.options.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            disabled={hasSelectedAnswer}
                            color={getButtonColor(option)}
                            text={option}
                            index={index}
                        />
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <Button
                        text={'НА ГЛАВНУЮ'}
                        onClick={props.onExitAttempt}
                        color={'primary'}
                    ></Button>
                    <Button
                        text={
                            props.currentPageIndex <
                            currentTour.pages.length - 1
                                ? 'ДАЛЕЕ'
                                : 'ПРОДОЛЖИТЬ КВИЗ'
                        }
                        onClick={props.onNext}
                        color={!hasSelectedAnswer ? 'disabledButtons' : 'primary'}
                        disabled={!hasSelectedAnswer}
                    ></Button>
                </div>
            </div>
        </>
    );
}

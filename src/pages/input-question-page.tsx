import { InputQuestionPage, Tour } from '../types/types.ts';
import styles from './css/quiz.module.css';
import { Button } from '../components/ui-compnents/button.tsx';
import { getQuestionsPages } from './lib.ts';
import { Input } from '../components/ui-compnents/input.tsx';
import * as React from 'react';
import { useState } from 'react';

type Props = {
    page: InputQuestionPage;
    onNext: () => void;
    currentPageIndex: number;
    currentTourIndex: number;
    tours: Tour[];
    setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
    onExitAttempt: () => void;
};

export function InputQuestionPageView(props: Props) {


    const currentTour = props.tours[props.currentTourIndex];
    const selectedAnswer = props.page.selectedAnswer || '';
    const correctAnswer = props.page.correctAnswer;

    const [userInput, setUserInput] = useState(selectedAnswer);
    const [isAnswered, setIsAnswered] = useState(false);

    const isCorrect = isAnswered &&
        userInput.trim().toLowerCase() === correctAnswer.trim().toLowerCase();


    const handleAnswer = (answer: string) => {
        const copy = [...props.tours];
        const currentPage =
            copy[props.currentTourIndex].pages[props.currentPageIndex];
        if (currentPage.type === 'InputQuestionPage') {
            currentPage.selectedAnswer = answer;
        }
        props.setTours(copy);
        setIsAnswered(true);
    };

    const handleNext = () => {
        if (!isAnswered) {
            handleAnswer(userInput);
        }else{
            props.onNext();
        }
    };

    const handleKeyDown = () => {
        if (userInput.trim() !== '') {
            handleAnswer(userInput);
        }
    };
    const getInputColor = () => {
        if (!isAnswered) {
            return 'default';
        }
        return isCorrect ? 'success' : 'error';
    };

    const questionPages = getQuestionsPages(currentTour.pages);

    return (
        <>
            <div className={styles.questionContainer}>
                <h2 className={styles.questionNumber}>
                    Вопрос {props.currentPageIndex + 1} / {questionPages.length}
                </h2>
                <p className={styles.questionText}>{props.page.question}</p>
                <div className={styles.controlsContainer}>
                    <Input
                        value={userInput}
                        onChange={(e) => {
                            setUserInput(e.target.value);
                            setIsAnswered(false);
                        }}
                        onClick={() => {
                        }}
                        onKeyDown={handleKeyDown}
                        placeholder="Введите ответ"
                        color={getInputColor()}
                    />
                </div>
            </div>


                <div className={styles.buttonContainer}>
                    <Button
                        text={'НА ГЛАВНУЮ'}
                        onClick={props.onExitAttempt}
                        color={'primary'}
                    />
                    <Button
                        text={
                            props.currentPageIndex < currentTour.pages.length - 1
                                ? 'ДАЛЕЕ'
                                : 'ПРОДОЛЖИТЬ КВИЗ'
                        }
                        onClick={handleNext}
                        color={userInput.trim() === '' ? 'disabledButtons' : 'primary'}
                        disabled={userInput.trim() === ''}
                    />
                </div>

        </>
    );
}
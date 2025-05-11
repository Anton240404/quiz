import { InputQuestionPage, Tour } from '../types/types.ts';
import styles from './css/quiz.module.css';
import { Button } from '../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';
import { getQuestionsPages } from './lib.ts';
import { Input } from '../components/ui-compnents/input.tsx';
import * as React from 'react';

type Props = {
    page: InputQuestionPage;
    onNext: () => void;
    currentPageIndex: number;
    currentTourIndex: number;
    tours: Tour[];
    setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
};

export function InputQuestionPageView(props: Props) {
    const navigate = useNavigate();

    const currentTour = props.tours[props.currentTourIndex];
    const selectedAnswer = props.page.selectedAnswer || '';
    const correctAnswer = props.page.correctAnswer;

    const [userInput, setUserInput] = React.useState(selectedAnswer);
    const [isAnswered, setIsAnswered] = React.useState(false);

    const isCorrect =
        isAnswered &&
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
        }
        props.onNext();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && userInput.trim() !== '') {
            handleAnswer(userInput);
        }
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
                <Input
                    value={userInput}
                    onChange={(e) => {
                        setUserInput(e.target.value);
                        setIsAnswered(false);
                    }}
                    onClick={() => {
                    }}
                    onKeyDown={handleKeyDown}
                    placeholder="Введите ваш ответ"
                    color={
                        !isAnswered
                            ? 'default'
                            : isCorrect
                                ? 'success'
                                : 'error'
                    }
                />

                <div className={styles.buttonContainer}>
                    <Button
                        text={'НА ГЛАВНУЮ'}
                        onClick={() => navigate('/')}
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
            </div>
        </>
    );
}
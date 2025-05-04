import { SingleAnswerQuestionPage, Tour } from '../types/Types.ts';
import styles from './css/quiz.module.css';
import { Button } from '../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';
import { getQuestionsPages } from './lib.ts';
import * as React from 'react';

type Props = {
    page: SingleAnswerQuestionPage;
    onNext: () => void;
    currentPageIndex: number;
    currentTourIndex: number;
    tours: Tour[];
    setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
};

export function SingleAnswerQuestionPageView(props: Props) {
    const navigate = useNavigate();

    const currentTour = props.tours[props.currentTourIndex];
    const selectedAnswer = props.page.selectedAnswer;
    const correctAnswer = props.page.correctAnswer;

    const hasSelectedAnswer = Boolean(selectedAnswer);

    const handleAnswer = (answer: string) => {
        const copy = [...props.tours];
        const currentPage = copy[props.currentTourIndex].pages[props.currentPageIndex];
        if (currentPage.type === 'SingleAnswerQuestionPage') {
            currentPage.selectedAnswer = answer;
        }
        props.setTours(copy);
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
                Вопрос {props.currentPageIndex + 1} / {questionPages.length}
            </h2>
            <p className={styles.questionText}>{props.page.question}</p>
            <div className={styles.options}>
                {props.page.options.map((option, index) => (
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
                        props.currentPageIndex < currentTour.pages.length - 1
                            ? 'ДАЛЕЕ'
                            : 'ПРОДОЛЖИТЬ КВИЗ'
                    }
                    onClick={props.onNext}
                    color={!hasSelectedAnswer ? 'nextDefault' : 'next'}
                    disabled={!hasSelectedAnswer}
                ></Button>
            </div>
        </div>
    );
}
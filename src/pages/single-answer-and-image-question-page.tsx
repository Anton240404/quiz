import { SingleAnswerAndImageQuestionPage, Tour } from '../types/Types.ts';
import styles from './css/quiz.module.css';
import { Button } from '../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';

type Props = {
    page: SingleAnswerAndImageQuestionPage;
    onNext: () => void;
    currentPageIndex: number;
    currentTourIndex: number;
    tours: Tour[];
    setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
};

export function SingleAnswerAndImageQuestionPageView(props: Props) {
    const navigate = useNavigate();

    const currentTour = props.tours[props.currentTourIndex];
    const selectedAnswer = props.page.selectedAnswer;
    const correctAnswer = props.page.correctAnswer;

    const hasSelectedAnswer = Boolean(selectedAnswer);

    const handleAnswer = (answer: string) => {
        const copy = [...props.tours];
        const currentPage =
            copy[props.currentTourIndex].pages[props.currentPageIndex];
        if (currentPage.type === 'SingleAnswerAndImageQuestionPage') {
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

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.questionText}>{props.page.question}</p>
            </div>

            <div className={styles.controlsContainer}>
                <div className={styles.options}>
                    {props.page.imageOptions.map((imgUrl, index) => (
                        <Button
                            key={index}
                            onClick={() => handleAnswer(imgUrl)}
                            disabled={hasSelectedAnswer}
                            color={getButtonColor(imgUrl)}
                            text={imgUrl}
                        />
                        // variant = 'default' | 'dark' | 'incorrect' | 'correct'
                        // <ImageButton
                        //     key={imgUrl}
                        //     url={imgUrl}
                        //     variant={}
                        //     number={index + 1}
                        // />
                    ))}
                </div>

                <div className={styles.buttonContainer}>
                    <Button
                        text={'НА ГЛАВНУЮ'}
                        onClick={() => navigate('/')}
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
                        color={'primary'}
                        disabled={!hasSelectedAnswer}
                    ></Button>
                </div>
            </div>
        </div>
    );
}

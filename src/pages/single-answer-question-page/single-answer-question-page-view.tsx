import {  Tour } from '../../types/types.ts';
import styles from '../quiz/base-page.module.css';
import { Button } from '../../components/ui/button/button.tsx';
import { getQuestionsPages } from '../lib.ts';
import { SingleAnswerQuestionPage } from '../../types/single-answer-question-page/single-answer-question-page.ts';

type Props = {
    page: SingleAnswerQuestionPage;
    pageNumber: number;
    tour: Tour;
    onFinishAnswer: (page: SingleAnswerQuestionPage) => void;
    onNext: () => void;
    onExitAttempt: () => void;
};

export function SingleAnswerQuestionPageView(props: Props) {
    const selectedAnswer = props.page.selectedAnswer;
    const correctAnswer = props.page.correctAnswer;

    const hasSelectedAnswer = Boolean(selectedAnswer);

    const handleAnswer = (answer: string) => {
        const copy = { ...props.page };
        copy.selectedAnswer = answer;
        props.onFinishAnswer(copy);
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

    const questionPages = getQuestionsPages(props.tour.pages);

    return (
        <>
            <div className={styles.questionContainer}>
                <h2 className={styles.questionNumber}>
                    Вопрос {props.pageNumber} / {questionPages.length}
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
                    />
                    <Button
                        text={'ДАЛЕЕ'}
                        onClick={props.onNext}
                        color={!hasSelectedAnswer ? 'disabledButtons' : 'primary'}
                        disabled={!hasSelectedAnswer}
                    />
                </div>
            </div>
        </>
    );
}

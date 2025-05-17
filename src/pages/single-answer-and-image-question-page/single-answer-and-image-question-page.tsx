import styles from '../quiz/base-page.module.css';
import { Button } from '../../components/ui/button/button.tsx';
import { ImageButton } from '../../components/ui/image-button/image-button.tsx';
import { SingleAnswerAndImageQuestionPage } from '../../types/single-answer-and-image-question-page/single-answer-and-image-question-page.ts';

type Props = {
    page: SingleAnswerAndImageQuestionPage;
    onFinishAnswer: (page: SingleAnswerAndImageQuestionPage) => void;
    onNext: () => void;
    onExitAttempt: () => void;
};

export function SingleAnswerAndImageQuestionPageView(props: Props) {
    const selectedAnswer = props.page.selectedAnswer;
    const correctAnswer = props.page.correctAnswer;

    const hasSelectedAnswer = Boolean(selectedAnswer);

    const handleAnswer = (answer: string) => {
        const copy = { ...props.page };
        copy.selectedAnswer = answer;
        props.onFinishAnswer(copy);
    };

    const getButtonColor = (img: string) => {
        if (!hasSelectedAnswer) return 'default';
        if (img === correctAnswer && img === selectedAnswer) return 'correct';
        if (img !== correctAnswer && img === selectedAnswer) return 'incorrect';
        if (img === correctAnswer && selectedAnswer !== correctAnswer)
            return 'correct';
        return 'default';
    };

    return (
        <>
            <div className={styles.questionContainer}>
                <p className={styles.questionText}>{props.page.question}</p>
            </div>
            <div className={styles.controlsContainer}>
                <div className={styles.options}>
                    {props.page.imageOptions.map((img, index) => (
                        <ImageButton
                            key={index}
                            onClick={() => handleAnswer(img)}
                            disabled={
                                hasSelectedAnswer && img !== selectedAnswer
                            }
                            variant={getButtonColor(img)}
                            url={img}
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

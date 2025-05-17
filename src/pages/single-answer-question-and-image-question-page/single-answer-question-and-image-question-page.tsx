import styles from '../quiz/base-page.module.css';
import style from './single-answer-question-and-image-question-page.module.css';
import { Button } from '../../components/ui/button/button.tsx';
import { SingleAnswerQuestionAndImageQuestionPage } from '../../types/single-answer-question-and-image-question-page/single-answer-question-and-image-question-page.ts';

type Props = {
    page: SingleAnswerQuestionAndImageQuestionPage;
    onFinishAnswer: (page: SingleAnswerQuestionAndImageQuestionPage) => void;
    onNext: () => void;
    onExitAttempt: () => void;
};

export function SingleAnswerQuestionAndImageQuestionPageView(props: Props) {
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

    return (
        <>
            <div className={style.containerHeader}>
                <div className={styles.questionContainer}>
                    <h2 className={styles.questionNumber}>
                        {props.page.subTitle}
                    </h2>
                    <p className={styles.questionText}>{props.page.question}</p>
                </div>
                <div className={style.CompassImageContainer}>
                    <img
                        src={props.page.questionImage}
                        alt="Компас"
                        className={style.CompassImage}
                    />
                </div>
            </div>

            <div className={styles.controlsContainer}>
                <div className={style.options}>
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

import { SingleAnswerQuestionAndImageQuestionPage, Tour } from '../types/types.ts';
import styles from './css/quiz.module.css';
import style from './css/single-answer-question-and-image-question-page.module.css'
import { Button } from '../components/ui-compnents/button.tsx';

type Props = {
    page: SingleAnswerQuestionAndImageQuestionPage;
    onNext: () => void;
    currentPageIndex: number;
    currentTourIndex: number;
    tours: Tour[];
    setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
    onExitAttempt: () => void;
};

export function SingleAnswerQuestionAndImageQuestionPageView(props: Props) {


    const currentTour = props.tours[props.currentTourIndex];
    const selectedAnswer = props.page.selectedAnswer;
    const correctAnswer = props.page.correctAnswer;

    const hasSelectedAnswer = Boolean(selectedAnswer);

    const handleAnswer = (answer: string) => {
        const copy = [...props.tours];
        const currentPage = copy[props.currentTourIndex].pages[props.currentPageIndex];
        if (currentPage.type === 'SingleAnswerQuestionAndImageQuestionPage') {
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
        <>
            <div className={style.containerHeader}>
                <div className={styles.questionContainer}>
                    <h2 className={styles.questionNumber}>{props.page.subTitle}</h2>
                    <p className={styles.questionText}>{props.page.question}</p>
                </div>
                <div className={style.CompassImageContainer}><
                    img src={props.page.questionImage} alt="Компасс" className={style.CompassImage} />
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

import { SingleAnswerAndImageQuestionPage, Tour } from '../types/types.ts';
import styles from './css/quiz.module.css';
import { Button } from '../components/ui-compnents/button.tsx';
import { ImageButton } from '../components/ui-compnents/image-button.tsx';


type Props = {
    page: SingleAnswerAndImageQuestionPage;
    onNext: () => void;
    currentPageIndex: number;
    currentTourIndex: number;
    tours: Tour[];
    setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
    onExitAttempt: () => void;
};

export function SingleAnswerAndImageQuestionPageView(props: Props) {

    const currentTour = props.tours[props.currentTourIndex];
    const selectedAnswer = props.page.selectedAnswer;
    const correctAnswer = props.page.correctAnswer;

    const hasSelectedAnswer = Boolean(selectedAnswer);

    const handleAnswer = (answer: string) => {
        const copy = [...props.tours];
        const currentPage = copy[props.currentTourIndex].pages[props.currentPageIndex];
        if (currentPage.type === 'SingleAnswerAndImageQuestionPage') {
            currentPage.selectedAnswer = answer;
        }
        props.setTours(copy);
    };

    const getButtonColor = (img: string) => {
        if (!hasSelectedAnswer) return 'default';
        if (img === correctAnswer && img === selectedAnswer)
            return 'correct';
        if (img !== correctAnswer && img === selectedAnswer)
            return 'incorrect';
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
                            disabled={hasSelectedAnswer && img !== selectedAnswer}
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

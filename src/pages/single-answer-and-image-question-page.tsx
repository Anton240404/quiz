import { SingleAnswerAndImageQuestionPage, Tour } from '../types/types.ts';
import styles from './css/quiz.module.css';
import { Button } from '../components/ui-compnents/button.tsx';
import { useNavigate } from 'react-router-dom';
import { ImageButton } from '../components/ui-compnents/image-button.tsx';


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
        const currentPage = copy[props.currentTourIndex].pages[props.currentPageIndex];
        if (currentPage.type === 'SingleAnswerAndImageQuestionPage') {
            currentPage.selectedAnswer = answer;
        }
        props.setTours(copy);
    };

    const getButtonColor = (imgUrl: string) => {
        if (!hasSelectedAnswer) return 'default';
        if (imgUrl === correctAnswer && imgUrl === selectedAnswer)
            return 'correct';
        if (imgUrl !== correctAnswer && imgUrl === selectedAnswer)
            return 'incorrect';
        if (imgUrl === correctAnswer && selectedAnswer !== correctAnswer)
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
                    {props.page.imageOptions.map((imgUrl, index) => (
                        <ImageButton
                            key={index}
                            onClick={() => handleAnswer(imgUrl)}
                            disabled={hasSelectedAnswer && imgUrl !== correctAnswer}
                            variant={getButtonColor(imgUrl)}
                            url={imgUrl}
                        />

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
                        color={!hasSelectedAnswer ? 'disabledButtons' : 'primary'}
                        disabled={!hasSelectedAnswer}
                    ></Button>
                </div>
            </div>
        </>
    );
}

import styles from '../quiz/base-page.module.css';
import style from './multi-select-answer-and-question-image-page-view.module.css';
import { Button } from '../../components/ui/button/button.tsx';
import { useEffect, useState } from 'react';
import { MultiSelectAnswerAndQuestionImagePage, } from '../../types/multi-select-answer-and-question-image-page/multi-select-answer-question-page.ts';


type Props = {
    page: MultiSelectAnswerAndQuestionImagePage;
    onNext: (newPage: MultiSelectAnswerAndQuestionImagePage, goToNextQuestion?: boolean) => void;
    pageNumber: number;
    tourNumber: number;
    onExitAttempt: () => void;
};

export function MultiSelectAnswerAndQuestionImagePageView(props: Props) {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    useEffect(() => {
        setSelectedAnswers(props.page.selectedAnswers || []);
    }, [props.pageNumber, props.tourNumber, props.page.selectedAnswers]);

    const correctAnswers = props.page.correctAnswers;

    const hasSelectedAnswers = selectedAnswers.length > 0;

    const handleAnswer = (answer: string) => {
        if (props.page.finished) return;

        setSelectedAnswers((prev) => {
            if (prev.includes(answer)) {
                return prev.filter((item) => item !== answer);
            } else {
                return [...prev, answer];
            }
        });
    };

    const handleNext = () => {
        if (!props.page.finished) {
            const updatedPage = { ...props.page, selectedAnswers: [...selectedAnswers], finished: true };
            props.onNext(updatedPage, false);
        } else {
            props.onNext(props.page, true);
        }
    };

    const getButtonColor = (option: string) => {
        if (!props.page.finished) {
            return selectedAnswers.includes(option) ? 'disabledButton' : 'default';
        } else {
            if (correctAnswers.includes(option)) {
                return 'success';
            } else if (selectedAnswers.includes(option)) {
                return 'danger';
            }
            return 'default';
        }
    };

    return (
        <>
            <div className={style.questionContainer}>
                <div className={style.questionTextContainer}>
                    <h3 className={style.subTitle}>{props.page.subTitle}</h3>
                    <p className={style.questionText}>{props.page.question}</p>
                    <p className={style.tour}>{`Тур ${props.tourNumber + 1}`}</p>
                </div>
                <div className={style.imageContainer}>
                    <img src={props.page.questionImage} alt={'capitan'} className={style.image} />
                </div>
            </div>

            <div className={styles.controlsContainer}>
                <div className={style.options}>
                    {props.page.options.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            disabled={
                                props.page.finished && !selectedAnswers.includes(option)
                            }
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
                        onClick={handleNext}
                        color={!hasSelectedAnswers ? 'disabledButtons' : 'primary'}
                        disabled={!hasSelectedAnswers}
                    />
                </div>
            </div>
        </>
    );
}
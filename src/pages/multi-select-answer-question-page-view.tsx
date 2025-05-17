import { MultiSelectAnswerQuestionPage, Tour } from '../types/types.ts';
import styles from './css/quiz.module.css';
import style from './css/multi-select-answer-question-page-view.module.css';
import { Button } from '../components/ui/button/button.tsx';
import { useEffect, useState } from 'react';

type Props = {
    page: MultiSelectAnswerQuestionPage;
    onNext: (newPage: MultiSelectAnswerQuestionPage) => void;
    pageNumber: number;
    tourNumber: number;
    onExitAttempt: () => void;
};

export function MultiSelectAnswerQuestionPageView(props: Props) {
    const [finished, setFinished] = useState(false);
    // Используем локальное состояние для выбранных ответов
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

    // Очищаем локальное состояние при изменении вопроса
    useEffect(() => {
        setSelectedAnswers([]);
        setFinished(false);
    }, [props.pageNumber, props.tourNumber]);

    const correctAnswers = props.page.correctAnswers;

    // Проверяем, выбран ли хотя бы один вариант ответа
    const hasSelectedAnswers = selectedAnswers.length > 0;

    const handleAnswer = (answer: string) => {
        if (finished) return; // Не позволяем менять ответы после проверки

        // Обновляем локальное состояние
        setSelectedAnswers((prev) => {
            // Если ответ уже выбран, удаляем его, иначе добавляем
            if (prev.includes(answer)) {
                return prev.filter((item) => item !== answer);
            } else {
                return [...prev, answer];
            }
        });
    };

    const handleNext = () => {
        if (!finished) {
            // Первое нажатие - показываем результаты и сохраняем выбранные ответы в туре
            setFinished(true);

            const copy = [...props.tours];
            const currentPage = copy[props.tourNumber].pages[props.pageNumber];

            if (currentPage.type === 'MultiSelectAnswerQuestionPage') {
                currentPage.selectedAnswers = [...selectedAnswers];
            }

            props.setTours(copy);
        } else {
            // Второе нажатие - переходим к следующему вопросу
            props.onNext();
        }
    };

    const getButtonColor = (option: string) => {
        if (!finished) {
            // До проверки: выбранные варианты подсвечиваются цветом primary
            return selectedAnswers.includes(option)
                ? 'disabledButton'
                : 'default';
        } else {
            // После проверки показываем правильность ответов
            if (correctAnswers.includes(option)) {
                // Правильный ответ - зеленый
                return 'success';
            } else if (selectedAnswers.includes(option)) {
                // Выбранный неправильный ответ - красный
                return 'danger';
            }
            // Неправильный невыбранный ответ - обычный
            return 'default';
        }
    };

    return (
        <>
            <div className={styles.questionContainer}>
                {props.page.subTitle && (
                    <h3 className={style.subTitle}>{props.page.subTitle}</h3>
                )}
                <p className={style.questionText}>{props.page.question}</p>
            </div>

            <div className={styles.controlsContainer}>
                <div className={style.options}>
                    {props.page.options.map((option, index) => (
                        <Button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            disabled={
                                finished && !selectedAnswers.includes(option)
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
                        text={
                            finished
                                ? props.pageNumber <
                                  currentTour.pages.length - 1
                                    ? 'ДАЛЕЕ'
                                    : 'ПРОДОЛЖИТЬ КВИЗ'
                                : 'ДАЛЕЕ'
                        }
                        onClick={handleNext}
                        color={
                            !hasSelectedAnswers ? 'disabledButtons' : 'primary'
                        }
                        disabled={!hasSelectedAnswers}
                    />
                </div>
            </div>
        </>
    );
}

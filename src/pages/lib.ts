import { Page } from '../types/types.ts';

export function getQuestionsPages(pages: Page[]) {
    return pages.filter(
        (page) =>
            page.type === 'SingleAnswerQuestionPage' ||
            page.type === 'InputQuestionPage' ||
            page.type === 'MultiSelectAnswerQuestionPage' ||
            page.type === 'SingleAnswerQuestionAndImageQuestionPage' ||
            page.type === 'SingleAnswerAndImageQuestionPage' ||
            page.type === 'MultiSelectAnswerAndQuestionImagePage' ||
            page.type === 'OrderPage'
    );
}

export function calculateTourResult(pages: Page[]) {
    const correctAnswers = pages.filter((page) => {
        if (page.type === 'SingleAnswerQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'SingleAnswerAndImageQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (
            page.type === 'MultiSelectAnswerQuestionPage' ||
            page.type === 'MultiSelectAnswerAndQuestionImagePage'
        ) {
            if (!page.correctAnswers || page.correctAnswers.length === 0) {
                return (
                    !page.selectedAnswers || page.selectedAnswers.length === 0
                );
            }
            if (!page.selectedAnswers || page.selectedAnswers.length === 0) {
                return false;
            }
            const numCorrectlySelectedByPlayer = page.selectedAnswers.filter(
                (sa) => page.correctAnswers.includes(sa)
            ).length;
            return (
                numCorrectlySelectedByPlayer / page.correctAnswers.length > 0.5
            );
        } else if (page.type === 'InputQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'SingleAnswerQuestionAndImageQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'OrderPage') {
            if (!page.items || page.items.length === 0) {
                return true;
            }
            return page.items.every(
                (item) =>
                    item.selectedPosition !== undefined &&
                    item.selectedPosition === item.correctPosition - 1
            );
        }
        return false;
    });
    return {
        correctQuestionsCount: correctAnswers.length,
        questionsCount: getQuestionsPages(pages).length,
    };
}

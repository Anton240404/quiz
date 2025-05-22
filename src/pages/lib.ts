import { Page } from '../types/types.ts';

export function getQuestionsPages(pages: Page[]) {
    return pages.filter(
        (page) =>
            page.type === 'SingleAnswerQuestionPage' ||
            page.type === 'InputQuestionPage' ||
            page.type === 'MultiSelectAnswerQuestionPage' ||
            page.type === 'SingleAnswerQuestionAndImageQuestionPage'
    );
}

export function calculateTourResult(pages: Page[]) {
    const correctAnswers = pages.filter((page) => {
        if (page.type === 'SingleAnswerQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'SingleAnswerAndImageQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'MultiSelectAnswerQuestionPage') {
            // !
            return page.selectedAnswers === page.correctAnswers;
        } else if (page.type === 'InputQuestionPage') {
            return page.selectedAnswer === page.correctAnswer;
        } else if (page.type === 'MultiSelectAnswerAndQuestionImagePage') {
            // !
            return page.selectedAnswers === page.correctAnswers;
        } else if (page.type === 'SingleAnswerQuestionAndImageQuestionPage') {
            //
        } else if (page.type === 'OrderPage') {
            //
        }
    });
    return {
        correctQuestionsCount: correctAnswers.length,
        questionsCount: getQuestionsPages(pages).length,
    };
}

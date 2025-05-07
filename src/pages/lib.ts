import { Page } from '../types/types.ts';

export function getQuestionsPages(pages: Page[]) {
    return pages.filter(
        (page) =>
            page.type === 'SingleAnswerQuestionPage' ||
            page.type === 'InputQuestionPage' ||
            page.type === 'MultiselectAnswerQuestionPage' ||
            page.type === 'SingleAnswerQuestionAndImageQuestionPage'

    );
}

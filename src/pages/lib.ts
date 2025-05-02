import { Page } from '../types/Types';

export function getQuestionsPages(pages: Page[]) {
    return pages.filter(
        (page) =>
            page.type === 'SingleAnswerQuestionPage' ||
            page.type === 'InputQuestionPage' ||
            page.type === 'MultiselectAnswerQuestionPage'
    );
}

import { InputQuestionPage } from './input-question-page/input-question-page.ts';
import { MultiSelectAnswerQuestionPage } from './multi-select-answer-question-page/multi-select-answer-question-page.ts';
import { SingleAnswerQuestionAndImageQuestionPage } from './single-answer-question-and-image-question-page/single-answer-question-and-image-question-page.ts';
import { InfoPage } from './info-page/info-page.ts';
import { TwoColumnsWithTitlePage } from './two-columns-with-title-page/two-columns-with-title-page.ts';
import { SingleAnswerAndImageQuestionPage } from './single-answer-and-image-question-page/single-answer-and-image-question-page.ts';
import { SingleAnswerQuestionPage } from './single-answer-question-page/single-answer-question-page.ts';
import { ResultPage } from './result-page/result-page.ts';
import { MultiSelectAnswerAndQuestionImagePage } from './multi-select-answer-and-question-image-page/multi-select-answer-question-page.ts';
import { OrderPage } from './order-page.tsx';

export type Tour = {
    title: string;
    pages: Page[];
};

export type Page =
    | SingleAnswerAndImageQuestionPage
    | InputQuestionPage
    | MultiSelectAnswerQuestionPage
    | SingleAnswerQuestionPage
    | SingleAnswerQuestionAndImageQuestionPage
    | ResultPage
    | InfoPage
    | TwoColumnsWithTitlePage
    | OrderPage
    | MultiSelectAnswerAndQuestionImagePage;
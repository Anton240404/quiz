export type MultiSelectAnswerQuestionPage = {
    type: 'MultiSelectAnswerQuestionPage';
    subTitle: string;
    question: string;
    options: string[];
    correctAnswers: string[];
    finished?: boolean;
    selectedAnswers?: string[];
};
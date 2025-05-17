export type MultiSelectAnswerAndQuestionImagePage = {
    type: 'MultiSelectAnswerAndQuestionImagePage';
    subTitle: string;
    question: string;
    questionImage: string;
    options: string[];
    correctAnswers: string[];
    finished?: boolean;
    selectedAnswers?: string[];
};
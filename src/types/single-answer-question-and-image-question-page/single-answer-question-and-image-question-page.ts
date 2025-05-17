export type SingleAnswerQuestionAndImageQuestionPage = {
    type: 'SingleAnswerQuestionAndImageQuestionPage';
    subTitle: string;
    question: string;
    questionImage: string;
    options: string[];
    correctAnswer: string;
    selectedAnswer?: string;
};
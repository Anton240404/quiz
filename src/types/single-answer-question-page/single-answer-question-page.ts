export type SingleAnswerQuestionPage = {
    type: 'SingleAnswerQuestionPage';
    question: string;
    options: string[];
    correctAnswer: string;
    selectedAnswer?: string;
};
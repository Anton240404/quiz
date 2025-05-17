export type SingleAnswerAndImageQuestionPage = {
    type: 'SingleAnswerAndImageQuestionPage';
    question: string;
    imageOptions: string[];
    correctAnswer: string;
    selectedAnswer?: string;
};

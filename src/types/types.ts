export type Tour = {
    title: string;
    pages: Page[];
};

export type Page =
    | DescriptionInfoPage
    | SingleAnswerAndImageQuestionPage
    | InputQuestionPage
    | MultiselectAnswerQuestionPage
    | SingleAnswerQuestionPage
    | ResultPage
    | InfoPage

export type DescriptionInfoPage = {
    type: 'DescriptionInfoPage';
};

export type InputQuestionPage = {
    type: 'InputQuestionPage';
    correctAnswer: string;
    selectedAnswer?: string;
};
export type MultiselectAnswerQuestionPage = {
    type: 'MultiselectAnswerQuestionPage';
    correctAnswers: string[];
};

export type InfoPage = {
    type: 'InfoPage';
    image: string;
    title: string;
    text: string;

};

export type SingleAnswerAndImageQuestionPage = {
    type: 'SingleAnswerAndImageQuestionPage';
    question: string;
    imageOptions: string[];
    correctAnswer: string;
    selectedAnswer?: string;
};
export type SingleAnswerQuestionPage = {
    type: 'SingleAnswerQuestionPage';
    question: string;
    options: string[];
    correctAnswer: string;
    selectedAnswer?: string;
};
export type ResultPage = {
    type: 'ResultPage';
    pages: [BadResultPage, GoodResultPage, ExcellentResultPage];
};

export type BadResultPage = {
    type: 'BadResultPage';
    text: string;
    image: 'iconBad.png';
    range: [number, number]; // [0, 6]
};

export type GoodResultPage = {
    type: 'GoodResultPage';
    text: string;
    image: 'iconGood.png';
    range: [number, number];
};

export type ExcellentResultPage = {
    type: 'ExcellentResultPage';
    text: string;
    image: 'iconExcellent.png';
    range: [number, number];
};


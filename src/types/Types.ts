export type Tour = {
    title: string,
    pages: Page[]
}

export type Page = DescriptionInfoPage | ExamplesInfoPage | InputQuestionPage | MultiselectAnswerQuestionPage | SingleAnswerQuestionPage | ResultPage

export type DescriptionInfoPage = {
    type: 'DescriptionInfoPage'
}
export type ExamplesInfoPage = {
    type: 'ExamplesInfoPage'
}
export type InputQuestionPage = {
    type: 'InputQuestionPage'
    correctAnswer: string
}
export type MultiselectAnswerQuestionPage = {
    type: 'MultiselectAnswerQuestionPage'
    correctAnswers: string[]
}
export type SingleAnswerQuestionPage  = {
    type: 'SingleAnswerQuestionPage'
    question: string
    options: string[]
    correctAnswer: string
    selectedAnswer?: string
}
export type ResultPage = BadResultPage | GoodResultPage | ExcellentResultPage

export type BadResultPage = {
    type: 'BadResultPage',
    text: string,
    image: 'iconBad.png',
}
export type GoodResultPage = {
    type: 'GoodResultPage',
    text: string,
    image: 'iconGood.png',
}
export type ExcellentResultPage = {
    type: 'ExcellentResultPage',
    text: string,
    image: 'iconExcelent.png',
}

// Как сделать указать что BadResultPage - показывается только когда пользователь ответил меньше 6 вопросов.
// (абсолютные единицы
// и относительные единицы)
// Также подумать как показывать в процентном соотношение
// pages: [{
//     type: 'SingleQuestionPage',
//     question: 'Как называется трехмачтовый боевой корабль, у которого много пушек?',
//     options: ['1', "2"],
//     correctAnswer: 'фрегат'
// }
//     , {
//         type: 'SingleQuestionPage',
//         question: 'Как называется трехмачтовый боевой корабль, у которого много пушек?',
//         options: ['1', "2"],
//         correctAnswer: 'фрегат'
//     }
// ]

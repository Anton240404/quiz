export type Tour = {
    title: string,
    pages: Page[]
}

export type Page = DescriptionInfoPage | ExamplesInfoPage | InputQuestionPage | MultiselectAnswerQuestionPage | SingleAnswerQuestionPage

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

//
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

export type Tour = {
    number: number,
    title: string,
    pages: Page[]
}

export type Page = DescriptionInfoPage | ExamplesInfoPage | InputQuestionPage | MultiselectQuestionPage | SingleQuestionPage

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
export type MultiselectQuestionPage = {
    type: 'MultiselectQuestionPage'
    correctAnswers: string[]
}
export type SingleQuestionPage  = {
    type: 'SingleQuestionPage'
    options: string[]
    variants: string[][]
    correctAnswer: string[]
}
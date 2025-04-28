import { Tour } from '../types/Types.ts';



// const brigantina = toursData[0].pages[1].selectedAnswer

export const toursData: Tour[] = [
    {
        title: 'Викторина',
        pages: [
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется трехмачтовый боевой корабль, у которого много пушек?',
                options: ['Фрегат', 'Линкор', 'Бот', 'Корвет'],
                correctAnswer: 'Фрегат',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется парусное судно с двумя и более мачтами и косыми парусами?',
                options: ['Бриг', 'Барк', 'Шхуна', 'Бригантина'],
                correctAnswer: 'Шхуна',
                // selectedAnswer: 'Бригантина'
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется помещение для приготовления пищи на морском судне?',
                options: ['Рубка', 'Камбуз', 'Гальюн', 'Каюта'],
                correctAnswer: 'Камбуз',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется помещение для размещения экипажа?',
                options: ['Твиндек', 'Камбуз', 'Кают-компания', 'Кубрик'],
                correctAnswer: 'Кубрик',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется жилое помещение на судне для команды и пассажиров?',
                options: ['Крюйт-камера', 'Каюта', 'Тамбур', 'Столовая'],
                correctAnswer: 'Каюта',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется надстройка на верхней палубе, не доходящая до бортов?',
                options: ['Рубка', 'Трюм', 'Пищеблок', 'Насосное отделение'],
                correctAnswer: 'Рубка',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется лестница на судне?',
                options: ['Сходни', 'Дорожка', 'Трап', 'Концы'],
                correctAnswer: 'Трап',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется судовой колокол?',
                options: ['Набат', 'Ударник', 'Рында', 'Металлофон'],
                correctAnswer: 'Рында',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Назовите самую большую рыбу в мире',
                options: ['Скат', 'Нарвал', 'Касатка', 'Китовая акула'],
                correctAnswer: 'Китовая акула',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Какая рыба водится в Красном море?',
                options: ['Не водится', 'Красная', 'Морская', 'Пресноводная'],
                correctAnswer: 'Не водится',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется механическое приспособление для переправы с одного берега на другой?',
                options: ['Паром', 'Понтон', 'Трап', 'Трал'],
                correctAnswer: 'Паром',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Назовите самое крупное морское млекопитающее',
                options: ['Нарвал', 'Акула', 'Кашалот', 'Морж'],
                correctAnswer: 'Кашалот',
            },

            /*{
                type: 'info-examples',
                examples: [
                    { image: '', title: '' },
                ],
            },
            {
                type: 'question',
                subtitle: 'Собери Розу Ветров', // ?
                question: 'Назовите самое крупное морское млекопитающее',
                image: '', // ?
                textOptions: ['нарвал', 'Акула', 'кашалот', 'Морж'],
                imageOptions: ['https://image.com/forest', 'https://image.com/forest', 'https://image.com/forest', 'https://image.com/forest'],
                correctAnswers: ['кашалот', 'https://image.com/forest'],
            },
            {
                type: 'question-input',
                subtitle: 'Собери Розу Ветров', // ?
                question: 'Назовите самое крупное морское млекопитающее',
                image: '', // ?
                textOptions: ['нарвал', 'Акула', 'кашалот', 'Морж'],
                imageOptions: ['https://image.com/forest', 'https://image.com/forest', 'https://image.com/forest', 'https://image.com/forest'],
                correctAnswers: ['кашалот', 'https://image.com/forest'],
            },*/
        ],
    },
];
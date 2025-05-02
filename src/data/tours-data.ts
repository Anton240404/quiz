import { Tour } from '../types/Types.ts';

export const toursData: Tour[] = [
    {
        title: 'Викторина',
        pages: [
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Как называется трехмачтовый боевой корабль, у которого много пушек?',
                options: ['Фрегат', 'Линкор', 'Бот', 'Корвет'],
                correctAnswer: 'Фрегат',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Как называется парусное судно с двумя и более мачтами и косыми парусами?',
                options: ['Бриг', 'Барк', 'Шхуна', 'Бригантина'],
                correctAnswer: 'Шхуна',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Как называется помещение для приготовления пищи на морском судне?',
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
                question:
                    'Как называется жилое помещение на судне для команды и пассажиров?',
                options: ['Крюйт-камера', 'Каюта', 'Тамбур', 'Столовая'],
                correctAnswer: 'Каюта',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Как называется надстройка на верхней палубе, не доходящая до бортов?',
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
                question:
                    'Как называется механическое приспособление для переправы с одного берега на другой?',
                options: ['Паром', 'Понтон', 'Трап', 'Трал'],
                correctAnswer: 'Паром',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Назовите самое крупное морское млекопитающее',
                options: ['Нарвал', 'Акула', 'Кашалот', 'Морж'],
                correctAnswer: 'Кашалот',
            },
            {
                type: 'ResultPage',
                pages: [
                    {
                        type: 'BadResultPage',
                        text: 'Не сдавайся!',
                        image: 'iconBad.png',
                        range: [0, 6],
                    },
                    {
                        type: 'GoodResultPage',
                        text: 'Хороший результат!',
                        image: 'iconGood.png',
                        range: [7, 9],
                    },

                    {
                        type: 'ExcellentResultPage',
                        text: 'Вы справились отлично!',
                        image: 'iconExcellent.png',
                        range: [10, 12],
                    },
                ],
            },
        ],
    },
    {
        title: 'Загадки',
        pages: [
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Зачерпнуло ветра белое крыло Нас с тобой кататься в море унесло',
                options: ['Облако', 'Парус', 'Дым Парохода', 'Льдина'],
                correctAnswer: 'Парус',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Кругом вода, а с питьем беда. Кто знает,где это бывает?',
                options: ['Река', 'Ручей', 'Стакан', 'Море'],
                correctAnswer: 'Море',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Семьсот ворот, да один вход',
                options: ['Невод', 'Звёздное Небо', 'Зубы', 'Окна и Дверь'],
                correctAnswer: 'Невод',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'По морю идет, идет, А до берега дойдет,Тут и пропадет.',
                options: ['Корабль', 'Пловец', 'Волна', 'Лодка'],
                correctAnswer: 'Волна',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Великан стоит в порту,Освещая темноту И сигналит кораблям: Заходите в гости к нам.',
                options: ['Корабль', 'Док', 'Маяк', 'Подъемный Кран'],
                correctAnswer: 'Маяк',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Когда он нужен – Его выбрасывают. Когда не нужен – Его поднимают.',
                options: ['Шкаф', 'Якорь', 'Парус', 'Сейф'],
                correctAnswer: 'Якорь',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Если входят корабли В порта акваторию, ' +
                    'Нужно, чтоб их провели Водной территорией. Как к причалу подойти?' +
                    'Ведь фарватер под водой.Кто подскажет, как пройти? Отгадайте, кто такой?',
                options: ['Юнга', 'Кок', 'Капитан', 'Лоцман'],
                correctAnswer: 'Лоцман',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Поднимает якоря, Возит грузы за моря, Только лишь сухие грузы: ' +
                    'Бочки ящики, арбузы… Не берет он жидкий груз,  Потому и…',
                options: ['Сухогруз', 'Сам Арбуз', 'В нём конфуз', 'Профсоюз'],
                correctAnswer: 'Сухогруз',
            },
            {
                type: 'SingleAnswerQuestionPage',
                question:
                    'Туч нагнал сердитый ветер. Небо в тучах, нет просвета, ' +
                    'И разбушевалось море Всем судам морским на горе. ' +
                    'Ночь настала прямо днем. Как мы это назовем?',
                options: ['Ураган', 'Смерч', 'Шторм', 'Затмение'],
                correctAnswer: 'Шторм',
            },
            {
                type: 'ExcellentResultPage',
                text: 'Вы справились отлично!',
                image: 'iconExcelent.png',
            },
            {
                type: 'GoodResultPage',
                text: 'Хороший результат!',
                image: 'iconGood.png',
            },
            {
                type: 'BadResultPage',
                text: 'Не сдавайся!',
                image: 'iconBad.png',
            },
        ],
    },
];

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

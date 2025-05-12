import { Tour } from '../types/types.ts';

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
                        range: [6, 10],
                    },
                    {
                        type: 'ExcellentResultPage',
                        text: 'Вы справились отлично!',
                        image: 'iconExcellent.png',
                        range: [11, 12],
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
                type: 'ResultPage',
                pages: [
                    {
                        type: 'BadResultPage',
                        text: 'Не сдавайся!',
                        image: 'iconBad.png',
                        range: [0, 3],
                    },
                    {
                        type: 'GoodResultPage',
                        text: 'Хороший результат!',
                        image: 'iconGood.png',
                        range: [4, 7],
                    },
                    {
                        type: 'ExcellentResultPage',
                        text: 'Вы справились отлично!',
                        image: 'iconExcellent.png',
                        range: [8, 9],
                    },
                ],
            },
        ],
    },
    {
        title: 'Викторина + Загадки',
        pages: [
            {
                type: 'SingleAnswerQuestionPage',
                question: 'Как называется флаг флота России?',
                options: [
                    'Гюйс',
                    'Андреевский флаг',
                    'Морской стяг',
                    'Военно-морское знамя',
                ],
                correctAnswer: 'Андреевский флаг',
            },
            {
                type: 'SingleAnswerAndImageQuestionPage',
                question: 'Найдите Андреевский флаг и выделите его',
                imageOptions: [
                    '/assets/flag1.png',
                    '/assets/flag2.png',
                    '/assets/flag3.png',
                    '/assets/flag4.png',
                ],
                correctAnswer: '/assets/flag1.png',
            },
            {
                type: 'InfoPage',
                image: './assets/flag1.png',
                title: 'Андреевский флаг',
                text: 'Андреевский флаг является главным корабельным кормовым флагом Российского Флота. ' +
                    'Он представляет собой белое полотнище, пересеченное по диагонали двумя синими полосами, ' +
                    'которые образуют наклонный крест, который называется Андреевским. ' +
                    'Этот крест и дал имя флагу.',
            },
        ],
    },
    {
        title: 'Викторина',
        pages: [
            {
                type: 'SingleAnswerQuestionAndImageQuestionPage',
                subTitle: 'Собери Розу Ветров',
                question: 'Какая сторона света находится здесь?',
                questionImage: '/assets/compassNorth.png',
                options: ['SOUTH-WEST (юго-запад)', 'SOUTH-EAST (юго-восток)',
                    'NORTH (север)', 'SOUTH (юг)', 'WEST (запад)',
                    'EAST (восток)', 'NORTH-WEST (северо-запад)', 'NORTH-EAST (северо-восток)'],
                correctAnswer: 'NORTH (север)',
            },
            {
                type: 'SingleAnswerQuestionAndImageQuestionPage',
                subTitle: 'Собери Розу Ветров',
                question: 'Какая сторона света находится здесь?',
                questionImage: '/assets/WEST.png',
                options: ['SOUTH-WEST (юго-запад)', 'SOUTH-EAST (юго-восток)',
                    'NORTH (север)', 'SOUTH (юг)', 'WEST (запад)',
                    'EAST (восток)', 'NORTH-WEST (северо-запад)', 'NORTH-EAST (северо-восток)'],
                correctAnswer: 'WEST (запад)',
            },
            {
                type: 'SingleAnswerQuestionAndImageQuestionPage',
                subTitle: 'Собери Розу Ветров',
                question: 'Какая сторона света находится здесь?',
                questionImage: '/assets/SOUTH-EAST.png',
                options: ['SOUTH-WEST (юго-запад)', 'SOUTH-EAST (юго-восток)',
                    'NORTH (север)', 'SOUTH (юг)', 'WEST (запад)',
                    'EAST (восток)', 'NORTH-WEST (северо-запад)', 'NORTH-EAST (северо-восток)'],
                correctAnswer: 'SOUTH-EAST (юго-восток)',
            },
            {
                type: 'SingleAnswerQuestionAndImageQuestionPage',
                subTitle: 'Собери Розу Ветров',
                question: 'Какая сторона света находится здесь?',
                questionImage: '/assets/NORTH-EAST.png',
                options: ['SOUTH-WEST (юго-запад)', 'SOUTH-EAST (юго-восток)',
                    'NORTH (север)', 'SOUTH (юг)', 'WEST (запад)',
                    'EAST (восток)', 'NORTH-WEST (северо-запад)', 'NORTH-EAST (северо-восток)'],
                correctAnswer: 'NORTH-EAST (северо-восток)',
            },
            {
                type: 'SingleAnswerQuestionAndImageQuestionPage',
                subTitle: 'Собери Розу Ветров',
                question: 'Какая сторона света находится здесь?',
                questionImage: '/assets/EAST.png',
                options: ['SOUTH-WEST (юго-запад)', 'SOUTH-EAST (юго-восток)',
                    'NORTH (север)', 'SOUTH (юг)', 'WEST (запад)',
                    'EAST (восток)', 'NORTH-WEST (северо-запад)', 'NORTH-EAST (северо-восток)'],
                correctAnswer: 'EAST (восток)',
            },
            {
                type: 'SingleAnswerQuestionAndImageQuestionPage',
                subTitle: 'Собери Розу Ветров',
                question: 'Какая сторона света находится здесь?',
                questionImage: '/assets/NORTH-WEST.png',
                options: ['SOUTH-WEST (юго-запад)', 'SOUTH-EAST (юго-восток)',
                    'NORTH (север)', 'SOUTH (юг)', 'WEST (запад)',
                    'EAST (восток)', 'NORTH-WEST (северо-запад)', 'NORTH-EAST (северо-восток)'],
                correctAnswer: 'NORTH-WEST (северо-запад)',
            },
            {
                type: 'SingleAnswerQuestionAndImageQuestionPage',
                subTitle: 'Собери Розу Ветров',
                question: 'Какая сторона света находится здесь?',
                questionImage: '/assets/SOUTH.png',
                options: ['SOUTH-WEST (юго-запад)', 'SOUTH-EAST (юго-восток)',
                    'NORTH (север)', 'SOUTH (юг)', 'WEST (запад)',
                    'EAST (восток)', 'NORTH-WEST (северо-запад)', 'NORTH-EAST (северо-восток)'],
                correctAnswer: 'SOUTH (юг)',
            },
            {
                type: 'SingleAnswerQuestionAndImageQuestionPage',
                subTitle: 'Собери Розу Ветров',
                question: 'Какая сторона света находится здесь?',
                questionImage: '/assets/SOUTH-WEST.png',
                options: ['SOUTH-WEST (юго-запад)', 'SOUTH-EAST (юго-восток)',
                    'NORTH (север)', 'SOUTH (юг)', 'WEST (запад)',
                    'EAST (восток)', 'NORTH-WEST (северо-запад)', 'NORTH-EAST (северо-восток)'],
                correctAnswer: 'NORTH (север)',
            },
        ],
    },
    {
        title: 'Выборка',
        pages: [
            {
                type: 'MultiSelectAnswerQuestionPage',
                subTitle: 'Оснасти корабля капитана Чирикова',
                question: 'Необходимо из списка предметов выбрать те, которые могли быть взяты для оснастки и укомплектования корабля во время Великой Северной экспедиции в 1741 году.?',
                options: ['Магнитный компас', 'Проволочный трос', 'Песочные часы', 'Бумажные салфетки', 'Штурманский циркуль', 'Штурманская линейка', 'Большая гребная шлюпка', 'Малая гребная шлюпка', 'Шерстяной ковер', 'Кабестан', 'Лаг', 'Секстан', 'Солнечные часы', 'Бинокль', 'Глобус', 'Подзорная труба', 'Карандаш', 'Бортжурнал'],
                correctAnswers: ['Магнитный компас', 'Песочные часы', 'Штурманский циркуль', 'Штурманская линейка', 'Большая гребная шлюпка', 'Малая гребная шлюпка', 'Кабестан', 'Лаг', 'Секстан', 'Солнечные часы', 'Подзорная труба', 'Бортжурнал'],
            },
            {
                type: 'MultiSelectAnswerQuestionPage',
                subTitle: 'Оснасти корабля капитана Чирикова',
                question: 'Необходимо из списка предметов выбрать те, которые могли быть взяты для оснастки и укомплектования корабля во время Великой Северной экспедиции в 1741 году.?',
                options: ['Телефон', 'Секстан', 'Кипятильник', 'Морская карта', 'Телескоп', 'Пулемет', 'Микроскоп', 'Канистра', 'Лупа', 'Котел', 'Холодильник', 'Якорь', 'Люстра', 'Парус', 'Керосин', 'Бочки с водой', 'Лед', 'Раскладушка'],
                correctAnswers: ['Морская картa', 'Лупа', 'Котел', 'Якорь', 'Парус', 'Бочки с водой'],
            },
            {
                type: 'MultiSelectAnswerQuestionPage',
                subTitle: 'Оснасти корабля капитана Чирикова',
                question: 'Необходимо из списка предметов выбрать те, которые могли быть взяты для оснастки и укомплектования корабля во время Великой Северной экспедиции в 1741 году.?',
                options: ['Гамак-сеть', 'Лаг', 'Консервы', 'Градшток', 'Газеты', 'Квадрант', 'Рогожа', 'Таранка', 'Пушки', 'Вино', 'Мука', 'Зерно', 'Сухари'],
                correctAnswers: ['Гамак-сеть', 'Лаг', 'Градшток', 'Рогожа', 'Таранка', 'Пушки', 'Вино', 'Мука', 'Зерно', 'Сухари'],
            },
            {
                type: 'TwoColumnsWithTitlePage',
                title: 'Примеры оснастки и снаряжения',
                items: [
                    {
                        image: '/assets/gradshtok.png',
                        text: 'Градшток',
                    },
                    {
                        image: '/assets/kvadrat.png',
                        text: 'Квадрат',
                    },
                    {
                        image: '/assets/secstan.png',
                        text: 'Секстан',
                    },
                    {
                        image: '/assets/timeSun.png',
                        text: 'Солнечные часы',
                    },
                    {
                        image: '/assets/lag.png',
                        text: 'Лаг',
                    },
                    {
                        image: '/assets/kabestan.png',
                        text: 'Кабестан',
                    },
                ],

            },
        ],
    },
    {
        title: 'Викторина',
        pages: [
            {
                type: 'InputQuestionPage',
                question: 'Кто такой боцман?',
                correctAnswer: 'Младший офицер',
            },
            {
                type: 'InputQuestionPage',
                question: 'Кто такой кок?',
                correctAnswer: 'Повар',
            },
            {
                type: 'InputQuestionPage',
                question: 'Кто такой навигатор?',
                correctAnswer: 'Опытный моряк',
            },
            {
                type: 'InputQuestionPage',
                question: 'Для чего нужен был мастер парусов?',
                correctAnswer: 'постановка тяжелых и верхних парусов',
            },
            {
                type: 'InputQuestionPage',
                question: 'За что отвечает судовой врач?',
                correctAnswer: 'Оказывает помощь',
            },
            {
                type: 'InputQuestionPage',
                question: 'Кого называют юнгами?',
                correctAnswer: 'мальчики из благополучных семей',
            },
            {
                type: 'InputQuestionPage',
                question: 'Кто такой старпом?',
                correctAnswer: 'правая рука капитана',
            },
            {
                type: 'InputQuestionPage',
                question: 'Для чего нужны механики на корабле?',
                correctAnswer: 'Чтобы устранять неисправности',
            },
            {
                type: 'PopupInfoPage',
                title: 'Боцман',
                text: 'Боцман — младший офицер. Его обязанности включали поддержание технического состояния корабля и управление палубной командой. Он следил за состоянием парусов, снастей, шлюпок, корабельных часов; отвечал за хранение запасных канатов, ремонтного дерева, парусины; организовывал ремонтные работы корабля. Также он следил за содержанием корабельного флага и отвечал за поддержание связи с другими кораблями с помощью специальных сигналов. Боцман дублировал команды капитана во время шторма или боя.',
            },
            {
                type: 'PopupInfoPage',
                title: 'Кок',
                text: 'Кок — корабельный повар. Он должен уметь не только готовить пищу, но и знать, как правильно хранить продукты, уметь экономно рассчитывать употребление пресной воды. Пираты могли запросто выкинуть кок за борт, если им не понравилось, как он приготовил, или если он не экономно использовал продукты и воду.'
            },
            {
                type: 'PopupInfoPage',
                title: 'Навигатор',
                text: 'Навигатор — Опытные моряки, которые хорошо ориентировались в морских картах, могли прокладывать курс и определять местоположение корабля'
            },
            {
                type: 'PopupInfoPage',
                title: 'Мастер парусов',
                text: 'Он должен был приобретать качественную парусину, шить, ремонтировать паруса. Мастер парусов отвечал за постановку тяжелых и верхних парусов, а боцман руководил работами по постановке нижних парусов.'
            },
            {
                type: 'PopupInfoPage',
                title: 'Судовой врач',
                text: 'Оказывал помощь всем морякам судна. Врачи всегда очень ценились, поэтому при сражении суда противников часто переманивали врачей к себе на корабль, обещая им больше золота.'
            },
            {
                type: 'PopupInfoPage',
                title: 'Юнга',
                text: 'Юнгами становились мальчики из благородных семей, которые направлялись на корабль для изучения основ мореходства. В дальнейшем становились моряками.'
            },
            {
                type: 'PopupInfoPage',
                title: 'Старпом',
                text: 'Старпом – правая рука капитана. Исполнял обязанности капитана, когда тот отсутствовал.'
            },
            {
                type: 'PopupInfoPage',
                title: 'Механики на корабле',
                text: 'Механики на корабле отвечают за исправность ходовой части-двигателей корабля.'
            }
        ],
    },
];


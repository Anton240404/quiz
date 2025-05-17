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
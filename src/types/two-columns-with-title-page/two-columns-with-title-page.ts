export type TwoColumnsWithTitlePage = {
    type: 'TwoColumnsWithTitlePage';
    title: string;
    items: TwoColumnsWithTitlePageItem[];
};
export type TwoColumnsWithTitlePageItem = {
    image: string;
    text: string;
};
export type OrderPage = {
    type: 'OrderPage';
    title: string;
    items: OrderPageItem[];
};

type OrderPageItem = {
    title: string;
    text: string;
    correctPosition: number;
    selectedPosition?: number;
};


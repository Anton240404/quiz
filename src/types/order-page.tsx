export type OrderPage = {
    type: 'OrderPage',
    items: OrderPageItem[]
}

type OrderPageItem = {
    text: string,
    correctPosition: number,
    selectedPosition?: number
}

// const p: OrderPage ={
//     type: 'OrderPage',
//     items: [
//         { text:'a', correctPosition: 1, selectedPosition: undefined },
//         { text:'c', correctPosition: 3, selectedPosition: undefined },
//         { text:'d', correctPosition: 4, selectedPosition: undefined },
//         { text:'b', correctPosition: 2, selectedPosition: undefined },
//     ]
// }


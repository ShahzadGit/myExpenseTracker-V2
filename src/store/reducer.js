import { DELETE_TRANSACTION, ADD_TRANSACTION } from "./action"

const initialState = {
    transactions: [
        // { text: 'Flower', amount: -20 },
        // { text: 'Salary', amount: 300 },
        // { text: 'Bill', amount: -40 },
        // { text: 'Gift', amount: 10 },
    ]
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
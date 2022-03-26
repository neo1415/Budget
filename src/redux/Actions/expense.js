import { ADD_EXPENSE, DELETE_EXPENSE,SEARCH_EXPENSE } from "../action-types/expense"

export const AddExpense=(data)=>{
    return{
        type:ADD_EXPENSE,
        data
    }
}

export const deleteExpense=(data)=>{
    return{
        type:DELETE_EXPENSE,
        data
    }
}

export const searchExpense=(query)=>{
    return{
        type:SEARCH_EXPENSE,
        query
    }
}
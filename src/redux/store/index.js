import { combineReducers, createStore } from "redux";
import { expenseReducer } from './../Reducers/expense';

const reducer=combineReducers({
    expenses:expenseReducer
})
const initialState={}
const store=createStore(reducer,initialState);

export default store;
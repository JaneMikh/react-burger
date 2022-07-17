import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
    ingredient: ingredientsReducer,
    order: orderReducer,
 });
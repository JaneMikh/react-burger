import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { routeReducer } from '../reducers/route';

export const rootReducer = combineReducers({
    ingredient: ingredientsReducer,
    order: orderReducer,
    route: routeReducer,
 });
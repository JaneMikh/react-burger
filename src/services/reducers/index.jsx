import { combineReducers } from 'redux';
import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR,
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    CLOSE_ALL_MODALS,
    OPEN_ORDER_MODAL,
    ORDER_FAIL,
    ADD_ITEM,
    DELETE_ITEM
} from '../actions/index';


//Исходное состояние для списка ингредиентов
export const initialIngredientState = {
    ingredientsData: [],
    burgerConstructorData: [],
    isLoading: false,
    hasError: false,
    bun: {},
    orderOverlay: false,
    orderData: null,
    orderRequest: false,
    orderError: false,
    counter: {},
}

export const ingredientReducer = (state=initialIngredientState, action) => {
    switch (action.type) {
        case GET_ITEMS_REQUEST: {
            return {
              ...state,
              isLoading: true,
            };
        }
        case GET_ITEMS_SUCCESS: {
            return {
                ...state,
                ingredientsData: action.ingredientsData.map((item) => {
                    return {...item, count: 0}
                })
            }
        }
        case CLOSE_ALL_MODALS: {
            return {
                ...state,
                orderOverlay: false,
            }
        }
        case OPEN_ORDER_MODAL: {
            return {
                ...state,
                orderOverlay: true,
            }
        }
        case ORDER_FAIL: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
            }
        }
        case GET_ORDER_REQUEST: {
            return {
                ...state,
                orderRequest: true,

            }
        }
        case GET_ORDER_SUCCESS: {
            return {
                ...state,
                orderData: action.orderData,
                orderRequest: false,
            }
        }
        case GET_ORDER_ERROR: {
            return {
                ...state,
                isLoading: false,
                orderError: true,
                orderData: null,
            }
        }
        case DELETE_ITEM: {
        }
        case ADD_ITEM: {
        }
        default: {
            return state;
        }
    }
}


export const rootReducer = combineReducers({
    ingredientReducer: ingredientReducer,
 });
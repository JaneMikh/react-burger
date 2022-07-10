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
} from '../actions/index';


//Исходное состояние для списка ингредиентов
export const initialIngredientState = {
    ingredientsData: [],
    burgerConstructorData: [{
    calories: 420,
    carbohydrates: 33,
    fat: 244,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
    name: "Мясо бессмертных моллюсков Protostomia",
    price: 1337,
    proteins: 433,
    type: "main",
    __v: 0,
    _id: "60d3b41abdacab0026a733c9"},
    {
    calories: 2674,
    carbohydrates: 300,
    fat: 800,
    image: "https://code.s3.yandex.net/react/code/meat-04.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    name: "Говяжий метеорит (отбивная)",
    price: 3000,
    proteins: 800,
    type: "main",
    __v: 0,
    _id: "60d3b41abdacab0026a733ca",}
],
    isLoading: false,
    hasError: false,
    bun: {
        calories: 420,
        carbohydrates: 53,
        fat: 24,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        name: "Краторная булка N-200i",
        price: 1255,
        proteins: 80,
        type: "bun",
        __v: 0,
        _id: "60d3b41abdacab0026a733c6",
    },
    orderOverlay: false,
    orderData: null,
    orderRequest: false,
    orderError: false,
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
        default: {
            return state;
        }
    }
}


export const rootReducer = combineReducers({
    ingredientReducer: ingredientReducer,
 });
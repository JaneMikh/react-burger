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
    DELETE_ITEM,
    CHANGE_ITEM
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
        case GET_ITEMS_ERROR: {
            return {
                ...state,
                isLoading: false,
                hasError: true,
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
        case DELETE_ITEM:  {
            const deleteItem = state.burgerConstructorData.find(item => 
                item.key === action.item.key
            )
            return {
                
                ...state,
                burgerConstructorData: state.burgerConstructorData.filter(item => item !== deleteItem),
                ingredientsData: [...state.ingredientsData].map(item => item._id === action.item._id ? {...item, count: --item.count } : item),
            }
        }
        case ADD_ITEM: {
                if (action.item.payload.type === 'bun') {
                    if (action.item.payload.count < 1) {
                        return {...state,
                            bun: action.item.payload,
                            ingredientsData: [...state.ingredientsData].map((item) => {
                                if (item.type === 'bun' && item._id === action.item.payload._id) {
                                    return {...item, count: ++item.count+1 }
                                } else if (item.type === 'bun') {
                                    return {...item, count: 0 }
                                } else {
                                    return {...item }
                                }
                            })
                        }
                    } else if (action.item.payload.count >= 1) { return {...state } }
                } else if (action.item.payload.type !== 'bun') {
                    //console.log(action.item.payload);
                    return {
                        ...state,
                        burgerConstructorData: [...state.burgerConstructorData, action.item.payload],
                        ingredientsData: [...state.ingredientsData].map((item) => {
                           // console.log(action.item.payload._id);
                           if (item.type !== 'bun' && item._id === action.item.payload._id) {
                            console.log(action.item.payload._id);
                                
                                return {...item, count: ++item.count }
                            } else {
                               // console.log(action.item.payload);
                                return {...item }
                            }
                        })
                    }
                } else {
                    return {...state, bun: action.item }
                }
                return {
                    ...state,
                    burgerConstructorData: [...state.burgerConstructorData, action.item.payload],
                }
            }
            case CHANGE_ITEM: {
                const newArray = [...state.burgerConstructorData];
                newArray.splice(action.dragIndex, 1);
                newArray.splice(action.hoverIndex, 0, action.dragItem);
                return {
                    ...state, 
                    burgerConstructorData: newArray 
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
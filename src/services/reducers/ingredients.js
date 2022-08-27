import {
    GET_ITEMS_REQUEST,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_ERROR,
    ADD_ITEM,
    DELETE_ITEM,
    CHANGE_ITEM,
    CLEAN_CONSTRUCTOR,
} from '../actions/index';



export const initialIngredientState = {
    ingredientsData: [],
    isLoading: false,
    hasError: false,
    bun: {},
    burgerConstructorData: [],
}

export const ingredientsReducer = (state=initialIngredientState, action) => {
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
        case CLEAN_CONSTRUCTOR: {
            return {
                ...state,
                burgerConstructorData: [],
                bun: {},
                ingredientsData: [...state.ingredientsData].map((item) => {
                    return {...item, count: 0}
                })
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
                    return {
                        ...state,
                        burgerConstructorData: [...state.burgerConstructorData, action.item.payload],
                        ingredientsData: [...state.ingredientsData].map((item) => {
                           if (item.type !== 'bun' && item._id === action.item.payload._id) {
                            
                                 return {...item, count: ++item.count }
                            } else {
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

import {
    GET_ORDER_REQUEST,
    GET_ORDER_SUCCESS,
    GET_ORDER_ERROR,
    CLOSE_ALL_MODALS,
    OPEN_ORDER_MODAL,
} from '../actions/index';

export const initialOrderState = {
    isLoading: false,
    hasError: false,
    orderOverlay: false,
    orderData: null,
    orderRequest: false,
    orderError: false,
}

export const orderReducer = (state=initialOrderState, action) => {
    switch (action.type) {
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
        default: {
            return state;
        }
    }
}

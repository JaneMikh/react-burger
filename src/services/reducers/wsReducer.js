import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    WS_UPDATE_USER_NAME,
} from '../action-types';

export const initialWsState = {
    messages: [],
    wsConnected: false,
    error: undefined,
}

export const wsReducer = (state = initialWsState, action) => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnected: true,
                error: undefined,
            }
        }
        case WS_CONNECTION_ERROR: {
            return {
              ...state,
              wsConnected: false,
              error: action.payload,
            }
        }
        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                wsConnected: false,
                error: undefined,
            }
        }
        case WS_GET_MESSAGE: {
            return {
                ...state,
                error: undefined,
                messages: state.messages.length 
                ? [...state.messages, {...action.payload, timestamp: new Date().getTime() / 1000 }]
                : [{...action.payload, timestamp: new Date().getTime() / 1000 }]
            }
        }
        case WS_UPDATE_USER_NAME: {
            return {
                ...state,
                user: action.payload //это будет заменено, возможно
            }
        }
        default: {
            return state;
        }
    }   
}

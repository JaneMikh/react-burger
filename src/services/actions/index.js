import { getData, getOrderData } from '../../utils/api';
import { v4 as uuid } from "uuid";

export const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';

export const OPEN_ORDER_MODAL = 'OPEN_ORDER_MODAL';
export const CLOSE_ALL_MODALS = 'CLOSE_ALL_MODALS';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CHANGE_ITEM = 'CHANGE_ITEM';


export const addIngredientCard = (item) => {
    const uuids = uuid();
    return {
        payload: { ...item, key: uuids },
    }
}

//Загрузить список ингредиентов с сервера
export function getIngredientsData() {
    return function(dispatch) {
        dispatch({
            type: GET_ITEMS_REQUEST
        });
        getData()
        .then((data) => {
            dispatch({
                type: GET_ITEMS_SUCCESS,
                ingredientsData: data.data
            });
        })
        .catch((err) => {
            console.log("Oшибка при загрузке данных", err.message)
            dispatch({
                type: GET_ITEMS_ERROR
            })
        });
    }
}

//Получить номер заказа
export function getOrderNumber(productsId) {
    return function(dispatch) {
        dispatch({
            type: GET_ORDER_REQUEST
        });
        getOrderData(productsId)
        .then((data) => {
            dispatch({
                type: GET_ORDER_SUCCESS,
                orderData: data.order.number,
            });
        })
        .catch((err) => {
            console.log("Oшибка при попытке оформить заказ", err.message);
            dispatch({
                type: GET_ORDER_ERROR
            });
        });
    }
}

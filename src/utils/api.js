import { ingredientURL } from './constants';

export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getData = () => {
    return fetch(`${ingredientURL}/ingredients`, {
        method: "GET",
    })
    .then((res) => {
        return checkResponse(res);
    });
}

export const getOrderData = (productsId) => {
    return fetch(`${ingredientURL}/orders`, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ 
            ingredients: productsId 
        }),
    })
        .then((res) => {
        return checkResponse(res);
    });
}
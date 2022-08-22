import { ingredientURL } from './constants';
import { getCookie } from './cookie';


export function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const getData = async() => {
    return await fetch(`${ingredientURL}/ingredients`, {
        method: "GET",
    })
    .then((res) => {
        return checkResponse(res);
    });
}

export const getOrderData = async(productsId) => {
    return await fetch(`${ingredientURL}/orders`, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ 
            ingredients: productsId,
        }),
    })
    .then((res) => {
        return checkResponse(res);
    });
}

//Забыть пароль
export const getForgotPassword = async(userEmail) => {
    return await fetch(`${ingredientURL}/password-reset`,{
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ 
            email: userEmail,
        })
    })
    .then((res) => {
        return checkResponse(res);
    })
}

//Обновить пароль
export const getResetPassword = async(newPassword, newToken) => {
    return await fetch(`${ingredientURL}/password-reset/reset`, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ 
            password: newPassword,
            token: newToken,
        })
    })
    .then((res) => {
        return checkResponse(res);
    })
}

//Регистрация пользователя
export const getUserRegistration = async(userEmail, userPassword, userName) => {
    return await fetch(`${ingredientURL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ 
            email: userEmail,
            password:  userPassword,
            name: userName,
        })
    })
    .then((res) => {
        return checkResponse(res);
    })
}

//Запрос авторизации
export const getAuthorization = async(userEmail, userPassword) => {
    return await fetch(`${ingredientURL}/auth/login`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
        })
    })
    .then((res) => {
        return checkResponse(res);
    })
}

//Обновление токена
export const updateToken = async() => {
   return await fetch(`${ingredientURL}/auth/token`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: localStorage.getItem('refreshToken')
    })
    .then((res) => {
        return checkResponse(res);
    })
}

//Обновление данных о пользователе
export const updateUserData = async(userEmail, userPassword, userName) => {
    return await fetch(`${ingredientURL}/auth/user`, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('token')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            email: userEmail,
            password: userPassword,
            name: userName,
        }) 
    })
    .then((res) => {
        return checkResponse(res);
    })
}

//Выход из системы
export const logoutRequest = async() => {
    return await fetch(`${ingredientURL}/auth/logout`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ token: localStorage.refreshToken })
    })
    .then((res) => {
        return checkResponse(res);
    });
}

//Получить данные о пользователе
export const getUserInfo = async() => {
    return await fetch(`${ingredientURL}/auth/user`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + getCookie('token')
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    })
    .then((res) => {
        return checkResponse(res);
    }); 
}
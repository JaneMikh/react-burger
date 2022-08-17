import { ingredientURL } from './constants';
import { getCookie } from './cookie';


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
            ingredients: productsId,
        }),
    })
    .then((res) => {
        return checkResponse(res);
    });
}

//Page /forgot-password
export const getForgotPassword = (userEmail) => {
    return fetch(`${ingredientURL}/password-reset`,{
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


//Page /reset-password
export const getResetPassword = (newPassword, newToken) => {
    return fetch(`${ingredientURL}/password-reset/reset`, {
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

//Page /registration
export const getUserRegistration = (userEmail, userPassword, userName) => {
    return fetch(`${ingredientURL}/auth/register`, {
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
export const getAuthorization = (userEmail, userPassword) => {
    return fetch(`${ingredientURL}/auth/login`, {
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
export const updateToken = () => {
   return fetch(`${ingredientURL}/auth/token`, {
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
export const updateUserData = (userEmail, userPassword, userName) => {
    return fetch(`${ingredientURL}/auth/user`, {
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
export const logoutRequest = (userToken) => {
    return fetch(`${ingredientURL}/auth/logout`, {
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
            'token': userToken,
        })
    })
    .then((res) => {
        return checkResponse(res);
    });
}

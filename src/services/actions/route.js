import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { 
    getForgotPassword,
    getResetPassword,
    getUserRegistration,
    getAuthorization,
    updateToken,
    updateUserData,
    logoutRequest,
    getUserInfo,
} from '../../utils/api';

import { setCookie, deleteCookie } from '../../utils/cookie';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS ='REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_ERROR = 'USER_UPDATE_ERROR';

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_SUCCESS = 'TOKEN_SUCCESS';
export const TOKEN_ERROR = 'TOKEN_ERROR';




//Регистрация пользователя
export function registerAction (userEmail, userPassword, userName) {
    return function(dispatch) {
        dispatch({ type: REGISTER_REQUEST });
        getUserRegistration(userEmail, userPassword, userName)
        .then((data) => {
            console.log(data);
            dispatch({
                type: REGISTER_SUCCESS,
                data,
            });    
        })
        .catch((err) => {
            console.log(err, err.message);
            dispatch({
                type: REGISTER_ERROR,
            });
        })  
    }
}

//Пользователь забыл пароль
export function forgotPassword (userEmail) {
    return function(dispatch) {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });
        getForgotPassword(userEmail)
        .then((data) => {
            dispatch({
                type: FORGOT_PASSWORD_SUCCESS,
                data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: FORGOT_PASSWORD_ERROR,
            });
        })  
    }
}

//Сменить пароль
export function resetPassword (newPassword, newToken) {
    return function(dispatch) {
        dispatch({ type: RESET_PASSWORD_REQUEST });
        getResetPassword(newPassword, newToken)
        .then((data) => {
            dispatch({
                type: RESET_PASSWORD_SUCCESS,
                data,
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: RESET_PASSWORD_ERROR,
            });
        })  
    }
}

//Авторизация пользователя в личном кабинете
export function authrizeUser (userEmail, userPassword) {
    return function(dispatch) {
        dispatch({ type: LOGIN_REQUEST });
        getAuthorization(userEmail, userPassword)
        .then((data) => {
           // console.log(data);
            let authToken;
            if (data.accessToken && data.accessToken.indexOf('Bearer') === 0) {
                // Отделяем схему авторизации от "полезной нагрузки токена"
                authToken = data.accessToken.split('Bearer ')[1];
            }
            if (authToken) {
                //console.log(data.refreshToken);
                // Сохраняем токен в куку token
                setCookie('token', authToken, 0);
                localStorage.setItem('refreshToken', `${data.refreshToken}`);
            }
            if (data.success) {
                //console.log(data);
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { userEmail, userPassword, ...data.user },

                });
                localStorage.setItem('password', `${userPassword}`);
                //console.log(localStorage);
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({
                type: LOGIN_ERROR,
            });
        })  
    }
}


//Выход из личного кабинета
export function signOut(goLogin) {
    return function(dispatch) {
        dispatch({ type: LOGOUT_REQUEST });
        // Отправляем запрос на сервер
        logoutRequest()
        .then((data)=> {
            if (data && data.success) {
                //console.log(data);
                dispatch({ type: LOGOUT_SUCCESS });
                goLogin();
                //console.log('В экшене сработало');
            } else {
                dispatch({ type: LOGOUT_ERROR });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGOUT_ERROR });
        })
         // Удаляем куку token
        deleteCookie('token');
        //удаляем данные из локального хранилища
        localStorage.removeItem('password');
        localStorage.removeItem('refreshToken');
    }
}

//Обновить данные о пользователе
export function updateUserProfile (userEmail, userPassword, userName) {
    return function(dispatch) {
        dispatch({ type: USER_UPDATE_REQUEST });
        updateUserData(userEmail, userPassword, userName)
        .then((data) => {
           // console.log(data);
            if (data && data.success) {
                dispatch({
                    type: USER_UPDATE_SUCCESS,
                    payload: {...data.user, password: userPassword},
                })
                localStorage.setItem("password", userPassword);
            } else {
                dispatch({ type: USER_UPDATE_ERROR });
            }
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: USER_UPDATE_ERROR });
        });
    }
}

//Обновление токена
export function getNewToken () {
    return function (dispatch) {
      dispatch({ type: TOKEN_REQUEST });
      updateToken()
        .then((res) => {
            const accessToken = res.accessToken.split('Bearer ')[1];
            const refreshToken = res.refreshToken;
            setCookie('token', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
          if (res && res.success) {
            dispatch({ type: TOKEN_SUCCESS });
          } else {
            dispatch({ type: TOKEN_ERROR });
          }
        })
        .catch((err) => {
            dispatch({ type: TOKEN_ERROR });
            console.log(err);
        });
    }
};

//Получение данных о пользователе с сервера
export function getUserData (user) {
    return function(dispatch) {
        dispatch({ type: LOGIN_REQUEST });
        getUserInfo()
        .then((data) => {
            //console.log(data);
            if (data.success) {
                dispatch({ 
                    type: LOGIN_SUCCESS,
                    payload: { password: localStorage.getItem('password'), ...data.user }
                    //payload: { ...data.user }
                })
            }
            return data.success;
                
        })
        .catch(e => {
            if (user.name) {
                updateToken()
                    .then(data => {
                        let authToken;
                        if (data.accessToken && data.accessToken.indexOf('Bearer') === 0) {
                            authToken = data.accessToken.split('Bearer ')[1];
                        }
                        if (authToken) {
                            setCookie('token', authToken, 0);
                            localStorage.setItem('refreshToken', `${data.refreshToken}`);
                            console.log('Token обновлен')
                        }
                    })
                    .catch(e => {
                        dispatch({ type: LOGIN_ERROR });
                        console.log(e.type);
                    })
                }
                console.log(e.type);
            })
       
    }
}


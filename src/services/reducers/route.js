import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_ERROR,
    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_ERROR,
    TOKEN_REQUEST,
    TOKEN_SUCCESS,
    TOKEN_ERROR,
} from '../actions/route';

export const routeState = {
  authProfile: {name: '', email: '', password: ''},

  newProfile: null,
  
  userUpdateRequest: false,
  userUpdateSuccess: false,
  userUpdateError: false,

  loginRequest: false,
  loginSuccess: false,
  loginError: false,

  registrationRequest: false,
  registrationSuccess: false,
  registrationError: false,

  forgotPasswordRequest: false,
  forgotPasswordSuccess: false,
  forgotPasswordError: false,
  
  authRequest: false,
  authSuccess: false,
  authError: false,

  logoutRequest: false,
  logoutSuccess: false,
  logoutFailed: false,

  tokenRequest: false,
  tokenSuccess: false,
  tokenError: false,
}

export const routeReducer = (state = routeState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                registrationRequest: true,
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                registrationRequest: false,
                registrationSuccess: true,
                newProfile: {
                    name: action.data.user.name,
                    email: action.data.user.email,
                    password: action.data.user.password,
                }
            }
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                registrationSuccess: false,
                registrationError: true,
            }
        }
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
            }
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordSuccess: true,
            }
        }
        case FORGOT_PASSWORD_ERROR: {
            return {
                ...state,
                forgotPasswordSuccess: false,
                forgotPasswordError: true,
            }
        }
        case LOGIN_REQUEST: {
            return {
                ...state,
                authRequest: true,
            }
        }
        case LOGIN_SUCCESS: {
            const { name, email, password } = action.payload;
            return {
                ...state,
                authRequest: false,
                authSuccess: true,
                authProfile: {
                    ...state.user,
                    name: name,
                    email: email,
                    password: password,
                }
            }
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                authSuccess: false,
                authError: true,
            }
        }
        case LOGOUT_REQUEST: {
            return {
                ...state,
                logoutRequest: true,
            }
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logoutRequest: false,
                logoutSuccess: true,
                authSuccess: false,
                authProfile: {
                    name: '',
                    email: '',
                    password: '',
                }
            }
        }
        case LOGOUT_ERROR: {
            return {
                ...state,
                logoutSuccess: false,
                logoutFailed: true,
            }
        }
        case USER_UPDATE_REQUEST: {
            return {
                ...state,
                userUpdateRequest: true,
            }
        }
        case USER_UPDATE_SUCCESS: {
            const { name, email, password } = action.payload;
            return {
                ...state,
                userUpdateRequest: false,
                userUpdateSuccess: true,
                authProfile: {
                    ...state.authProfile,
                    name: name,
                    email: email,
                    password: password,
                }
            }
        }
        case USER_UPDATE_ERROR: {
           return {
            ...state,
            userUpdateSuccess: false,
            userUpdateError: true,
           } 
        }
        case TOKEN_REQUEST: {
            return {
                ...state,
                tokenRequest: true,
            }
        }
        case TOKEN_SUCCESS: {
            return {
                ...state,
                tokenRequest: false,
                tokenSuccess: true,
            }
        }
        case TOKEN_ERROR: {
            return {
                ...state,
                tokenSuccess: false,
                tokenError: true,
            }
        }
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
            }
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordSuccess: true,
            }
        }
        case RESET_PASSWORD_ERROR: {
            return {
                ...state,
                forgotPasswordSuccess: false,
                forgotPasswordError: true,
            }
        }
        default: {
            return state;
        }
    }
}


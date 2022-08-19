import React from "react";
import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, authrizeUser, signOut } from '../services/actions/route';



const AuthContext = createContext(undefined);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
} 

//Для удобства добавим хук, который будет использовать контекст
export function useAuth() {
    return useContext(AuthContext);
} 

//Затем напишем кук, внутри которого
// будет происходить вся авторизация и деавторизация

export function useProvideAuth() {
    const dispatch = useDispatch();
    
    //Получим данные о пользователе из хранилища

   const userData = useSelector((store) => {
        return store.route.authProfile;
    });

    //console.log(userData);

    const signIn = (userEmail, userPassword) => dispatch(authrizeUser(userEmail, userPassword));
    const signOutUser = (userToken) => dispatch(signOut(userToken));
    const getUser = () => dispatch(getUserData());


    return {
        userData,
        signIn,
        signOutUser,
        //getUser,
    }
}


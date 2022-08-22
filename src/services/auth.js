import React from "react";
import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, authrizeUser, signOut } from '../services/actions/route';

const AuthContext = createContext(undefined);

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
} 

export function useAuth() {
    return useContext(AuthContext);
} 

export function useProvideAuth() {
    const dispatch = useDispatch();
    
    const user = useSelector((store) => { return store.route.authProfile });

    const signIn = (userEmail, userPassword) => dispatch(authrizeUser(userEmail, userPassword));
    const signOutUser = (goLogin) => dispatch(signOut(goLogin));
    const getUser = () => dispatch(getUserData(user));

    return {
        user,
        signIn,
        getUser,
        signOutUser,
    }
}

import React from 'react';
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Registration from '../../pages/registration/registration';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-passward/forgot-passward';
import ResetPassword from '../../pages/reset-passward/reset-passward';
import Profile from '../../pages/profile/profile';
import PageIsNotFound from '../../pages/page404/page404';
import MainPage from '../../pages/main/main';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';

import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { useAuth } from '../../services/auth';
import { useDispatch, useSelector } from "react-redux";
import  { getUserData } from '../../services/actions/route';

function App () {

    const location = useLocation();
    const history = useHistory();
    const background = location.state?.background;
    //console.log(location);
    //console.log(background);
    return (
        <section className={stylesMain.page}>
            <AppHeader/>
            <Switch location={background || location} >
                <Route path="/register" exact={true}>
                    <Registration />
                </Route>
                <Route path="/login" exact={true}>
                    <Login />
                </Route>
                <Route path="/forgot-password" exact={true}>
                    <ForgotPassword />
                </Route>
                <Route path="/reset-password" exact={true}>
                    <ResetPassword />
                </Route>
                <ProtectedRoute path="/profile" exact={true}>
                    <Profile />
                </ProtectedRoute>
                <Route path="/" exact={true}>
                    <MainPage />
                </Route>
                {/*<Route path="/ingredients/:id" exact={true}>
                    <IngredientDetails />
    </Route>*/}
                <Route>
                    <PageIsNotFound />
                </Route>
            </Switch>
        </section>
    );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Registration from '../../pages/registration/registration';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-passward/forgot-passward';
import ResetPassword from '../../pages/reset-passward/reset-passward';
import Profile from '../../pages/profile/profile';
import PageIsNotFound from '../../pages/page404/page404';
import MainPage from '../../pages/main';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';


import { ProvideAuth } from '../../services/auth';
import { useAuth } from '../../services/auth';
import { useDispatch, useSelector } from "react-redux";
import  { getUserData } from '../../services/actions/route';

function App () {

    const history = useHistory();
    const location = useLocation();
    //console.log(history);
    const background = location.state?.background;

    return (
        <ProvideAuth>
        <section className={stylesMain.page}>
            <AppHeader />
            <Router>
            <Switch>
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
                <Route path="/profile" exact={true}>
                    <Profile />
                </Route>
                <Route path="/" exact={true}>
                    <MainPage />
                </Route>
                <Route path="/ingredients/:id" exact={true}>
                    <IngredientDetails />
                </Route>
                <Route>
                    <PageIsNotFound />
                </Route>
            </Switch>
            </Router>
        </section>
        </ProvideAuth>
    );
}

export default App;
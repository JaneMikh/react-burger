import React, { useEffect } from 'react';
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
import Orders from '../../pages/orders/orders';
import FeedPage from '../Feed/Feed';
import FeedForModal from '../FeedForModal/FeedForModal';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import Modal from '../Modal/Modal';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { useDispatch } from "react-redux";
import { getIngredientsData } from '../../services/actions';

function App () {
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const background = location.state?.background;

    function closeAllModals() {
        history.goBack();
    }

    useEffect(() => {
        document.title = "react burger";
        dispatch(getIngredientsData());
    },[dispatch]);
    
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
                <ProtectedRoute path="/profile/orders" exact={true}>
                    <Profile />
                </ProtectedRoute>
                <Route path="/" exact={true}>
                    <MainPage />
                </Route>
                <Route path="/ingredients/:id" exact={true}>
                        <IngredientDetails title="Детали ингредиента"/>
                </Route>
                <Route path="/feed" exact={true}>
                    <Orders />
                </Route>
                <Route path="/feed/:id" exact={true}>
                    <FeedPage />
                </Route>
                <ProtectedRoute path="/profile/order/:id" exact={true}>
                    <FeedPage />
                </ProtectedRoute>
                <Route>
                    <PageIsNotFound />
                </Route>
            </Switch>
            {background && (
                <>
                <Route path="/ingredients/:id" exact={true}>
                    <Modal onClose={ closeAllModals } title="Детали ингредиента">
                        <IngredientDetails />
                    </Modal>
                </Route>
                <Route path="/profile/order/:id" exact={true}>
                    <Modal onClose={ closeAllModals } title="Детали заказа" >
                        <FeedForModal />
                    </Modal>
                </Route>
                <Route path="/feed/:id" exact={true}>
                    <Modal onClose={ closeAllModals } title="Детали заказа" >
                        <FeedForModal />
                    </Modal>
                </Route>
              </>
            )}
        </section>
    );
}

export default App;
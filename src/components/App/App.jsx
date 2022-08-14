import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Registration from '../../pages/registration/registration';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-passward/forgot-passward';
import ResetPassward from '../../pages/reset-passward/reset-passward';
import Profile from '../../pages/profile/profile';
import PageIsNotFound from '../../pages/page404/page404';

function App () {
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <PageIsNotFound />
            {/*<main className={stylesMain.main}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConctructor />
                </DndProvider> 
            </main> */}
        </section>
    );
}

export default App;
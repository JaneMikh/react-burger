import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
import OrderInfo from '../Modal/ModalOrderInfo/ModalOrderInfo';
import CardInfo from '../Modal/ModalCardInfo/ModalCardInfo';

function App () {
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                <BurgerIngredients />
                <BurgerConctructor />
            </main>
            <OrderInfo />
            <CardInfo />
        </section>
    );
}

export default App;
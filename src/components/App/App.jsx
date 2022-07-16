import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import  { DataContext, ConstructorContext } from '../../services/productsContext.jsx';
import { getData, getOrderData } from '../../utils/api';

import { useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App () {
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients />
                    <BurgerConctructor />
                </DndProvider> 
            </main>
        </section>
    );
}

export default App;
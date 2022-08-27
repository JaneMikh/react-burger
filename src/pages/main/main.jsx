import React from 'react';
import stylesMain from '../../components/App/App.module.css';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../../components/BurgerConstructor/BurgerConstructor';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function MainPage () {
    return (
        <main className={stylesMain.main}>
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConctructor />
            </DndProvider> 
        </main> 
    );
}
import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
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
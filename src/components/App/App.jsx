import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
import { IngredientsList } from '../../utils/data';


const bun = IngredientsList.filter(element => element.type === 'bun');
const sauce = IngredientsList.filter(element => element.type === 'sauce');
const main = IngredientsList.filter(element => element.type === 'main');


function App () {
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                <BurgerIngredients bun={bun} sauce={sauce} main={main}/>
                <BurgerConctructor bun={bun} data={IngredientsList}/>
            </main>
           
        </section>
    );
}

export default App;
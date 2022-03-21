import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
import { data } from '../../utils/data'; /*временно*/
import {useEffect, useState} from 'react';


const ingredientURL = 'https://norma.nomoreparties.space/api/ingredients';

function App () {

    /*
    const [state, setState] = useState({
       cardData: [],
       isloading: false,
       hasError: false,
    });

    useEffect(() => {
        const getCardData = async () => {
            setState({...state, isloding: true, hasError: false});
            const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
            const data = await res.json();
            setState({...state, cardData: data, isLoading: false});
        } 
        getCardData()
        .catch((err) => {
            console.log("Oшибка при загрузке данных", err.message)
            setState({...state, isLoading: false, hasError: true})
        });
    }, []);
    */
    const bun = data.filter(element => element.type === 'bun');
    const sauce = data.filter(element => element.type === 'sauce');
    const main = data.filter(element => element.type === 'main');


    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                <BurgerIngredients bun={bun} sauce={sauce} main={main}/>
                <BurgerConctructor bun={bun} data={data}/>
            </main>
           
        </section>
    );
}

export default App;
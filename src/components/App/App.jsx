import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
import {useEffect, useState} from 'react';

const ingredientURL = 'https://norma.nomoreparties.space/api/ingredients';

function App () {

    const [state, setState] = useState({
       cardData: [],
       isloading: false,
       hasError: false,
    });

    useEffect(() => {
        const getCardData = async () => {
            setState({...state, isloding: true, hasError: false});
            const res = await fetch(`${ingredientURL}`);
            const data = await res.json();
            setState({...state, cardData: data.data, isLoading: false});
        } 
        getCardData()
        .catch((err) => {
            console.log("Oшибка при загрузке данных", err.message)
            setState({...state, isLoading: false, hasError: true})
        });
    }, []);

    
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                <BurgerIngredients data={state.cardData}/>
                <BurgerConctructor data={state.cardData}/>
            </main>
           
        </section>
    );
}

export default App;
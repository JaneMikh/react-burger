import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
import {useEffect, useState} from 'react';
import {ingredientURL} from '../../utils/constants';
import Modal from '../Modal/Modal';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';

function App () {

    const [state, setState] = useState({
       cardData: [],
       isLoading: false,
       hasError: false,
    });

    useEffect(() => {
        const getCardData = async () => {
            try {
                setState({...state, isLoading: true, hasError: false});
                const res = await fetch(`${ingredientURL}/ingredients`);
                const data = await res.json();
                setState({...state, cardData: data.data, isLoading: false});
            } catch(err) {
                console.log("Oшибка при загрузке данных", err.message)
                setState({...state, isLoading: false, hasError: true})
            }
        }
        getCardData();
    }, []);

    //Состояние открытия/закрытия попапов
    const [isOrderDetailsVisible, setOrderDetailsVisible] = useState(false);
    
    //Состояние выбора определенного ингредиента из списка
    const [currentCard, setCardIngredient] = useState(null);

    function closeAllModals() {
        setOrderDetailsVisible(false);
        setCardIngredient(null);
    }

    function openOrderModal() {
        setOrderDetailsVisible(true);
    }
    
    function handleCardElement (item) {
        if (item) {
          setCardIngredient(item);
        }
    }
    
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                <BurgerIngredients data={state.cardData} handleCardElement={handleCardElement}/>
                <BurgerConctructor data={state.cardData} openModal={openOrderModal}/>
            </main>
            {isOrderDetailsVisible &&
            (<Modal 
                onClose={closeAllModals}
                title='' 
            >
                <OrderDetails />
            </Modal>)}
            {currentCard && (
            <Modal 
                onClose={closeAllModals}
                title="Детали ингредиента"
            >
                <IngredientDetails ingredient={currentCard}/>
            </Modal>)}
            
        </section>
    );
}

export default App;
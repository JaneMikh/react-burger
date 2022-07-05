import React from 'react';
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConctructor from '../BurgerConstructor/BurgerConstructor';
import { useEffect, useState } from 'react';
import { ingredientURL } from '../../utils/constants';
import Modal from '../Modal/Modal';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import  { DataContext, ConstructorContext } from '../../services/productsContext.jsx';
import  { checkResponse } from '../../utils/api';

function App () {

    const [state, setState] = useState({
       cardData: [],
       isLoading: false,
       hasError: false,
    });
    const [isOrderDetailsVisible, setOrderDetailsVisible] = useState(false);
    const [currentCard, setCardIngredient] = useState(null);
    const [orderNumber, setOrderNumber] = useState({
        isLoading: false,
        hasError: false,
    });

    useEffect(() => {
        const getCardData = async () => {
            try {
                setState({...state, isLoading: true, hasError: false});
                /*const res = await fetch(`${ingredientURL}/ingredients`);
                const data = await res.json()*/
                fetch(`${ingredientURL}/ingredients`)
                .then(checkResponse)
                .then((data) => {
                setState({...state, cardData: data.data, isLoading: false})
                });
            } catch(err) {
                console.log("Oшибка при загрузке данных", err.message)
                setState({...state, isLoading: false, hasError: true})
            }
        }
        getCardData();
    }, []);

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

    const getServOrder = () => {
        openOrderModal();
        getOrderNumber();
    }

    const productsId = [];
    const getOrderNumber = async () => {
        setOrderNumber({...orderNumber, isLoading: true, hasError: false});
         await fetch(`${ingredientURL}/orders`, {
             method: "POST",
             headers: {
                 "Content-type": "application/json;charset=utf-8",
             },
             body: JSON.stringify({ ingredients: productsId }),
         })
         .then(checkResponse)
         .then((res) => {
            setOrderNumber({
                 ...orderNumber,
                 order: res.order.number,
                 isLoading: false, 
             });
         })
         .catch((err) => {
            console.log("Oшибка при загрузке данных", err.message);
             setOrderNumber({...orderNumber, isLoading: false, hasError: true})
         });
    }
    
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                <DataContext.Provider value={{ state, setState }}>
                    <ConstructorContext.Provider value={ getServOrder }>
                        <BurgerIngredients handleCardElement={ handleCardElement }/>
                        <BurgerConctructor openModal={ openOrderModal } productsId={ productsId } />
                    </ConstructorContext.Provider>
                </DataContext.Provider>
            </main>
            {isOrderDetailsVisible &&
            (<Modal 
                onClose={ closeAllModals }
                title='' 
            >
                <OrderDetails orderNumber={ orderNumber.order } />
            </Modal>)}
            {currentCard && (
            <Modal 
                onClose={ closeAllModals }
                title="Детали ингредиента"
            >
                <IngredientDetails ingredient={ currentCard }/>
            </Modal>)}
            
        </section>
    );
}

export default App;
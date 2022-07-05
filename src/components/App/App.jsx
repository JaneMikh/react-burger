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
import  { DataContext, IngredientsContext } from '../../services/productsContext.jsx';
import  { checkResponse } from '../../utils/constants';

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
    //const [isIngredientCardVisible, setCardVisible] = useState(false);
    
    //Состояние выбора определенного ингредиента из списка
    const [currentCard, setCardIngredient] = useState(null);

    function closeAllModals() {
        setOrderDetailsVisible(false);
        setCardIngredient(null);
    }
    
    function openOrderModal() {
        setOrderDetailsVisible(true);
    }

    const [orderNumber, setOrderNumber] = useState({
        isOpen: false,
        isLoading: false,
        hasError: false,
    });

    const getServOrder = () => {
        openOrderModal();
        getOrderNumber();
    }
    

    const orderId = [];
    //Запрос к серверу
   const getOrderNumber = async () => {
        setOrderNumber({...orderNumber, isLoading: true, hasError: false, isOpen: true});
         await fetch(`${ingredientURL}/orders`, {
             method: "POST",
             headers: {
                 "Content-type": "application/json;charset=utf-8",
             },
             body: JSON.stringify({ ingredients: orderId }),
         })
         .then(checkResponse)
         .then((res) => {
            setOrderNumber({
                 ...orderNumber,
                 order: res.order.number,
                 isLoading: false, 
                 isOpen: true,
             });
         })
         .catch((err) => {
            console.log(err);
             setOrderNumber({...orderNumber, isLoading: false, hasError: true})
         });
    }

    
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                <DataContext.Provider value={{ state, setState }}>
                    <IngredientsContext.Provider value={ setCardIngredient }>
                        <BurgerIngredients/>
                        <BurgerConctructor openModal={openOrderModal} serv={getServOrder} orderId={orderId} orderNumber={orderNumber} />
                    </IngredientsContext.Provider>
                </DataContext.Provider>
            </main>
            {isOrderDetailsVisible &&
            (<Modal 
                onClose={closeAllModals}
                title='' 
            >
                <OrderDetails orderNumber={orderNumber.order} />
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
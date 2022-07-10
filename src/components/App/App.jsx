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


function App () {

    //const [cardData, setCardData] = useState([]);
   //const [isOrderDetailsVisible, setOrderDetailsVisible] = useState(false);
   // const [currentCard, setCardIngredient] = useState(null);
   /* const [orderNumber, setOrderNumber] = useState({
        order: null,
        isLoading: false,
        hasError: false,
    });
*/
    /*useEffect(() => {
        const getCardData = async () => {
            getData()
            .then((res) => {
                setCardData(res.data)
            })
            .catch((err) => {
                console.log("Oшибка при загрузке данных", err.message);
            })
        }
        getCardData();
    }, []);*/

    /*function closeAllModals() {
        //setOrderDetailsVisible(false);
        setCardIngredient(null);
    }
    
    function openOrderModal() {
        //setOrderDetailsVisible(true);
    }*/
    
    /*function handleCardElement (item) {
        if (item) {
          setCardIngredient(item);
        }
    }*/

    /*const getServOrder = () => {
        getOrderNumber();
        openOrderModal();
    }

    const productsId = [];
   
    const getOrderNumber = async () => {
        setOrderNumber({
           ...orderNumber,
           isLoading: true,
        });
        getOrderData(productsId)
        .then((res) => {
           setOrderNumber({
               ...orderNumber,
               order: res.order.number,
               isLoading: false,
           });
       })
        .catch((err) => {
           console.log("Oшибка при попытке оформить заказ", err.message);
           setOrderNumber({
               ...orderNumber,
               order: null,
               isLoading: false,
               hasError: true,
           })
       });}*/
   
    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <main className={stylesMain.main}>
                   {/* <ConstructorContext.Provider value={ getServOrder }>*/}
                        <BurgerIngredients />
                   {/* <DataContext.Provider value={{ cardData, setCardData }}> */}
                        <BurgerConctructor />
                   {/* </DataContext.Provider> */}
                   {/* </ConstructorContext.Provider> */}
            </main>
            
          {/*  {isOrderDetailsVisible && (
            <Modal 
                onClose={ closeAllModals } 
                title=""
            > 
                <OrderDetails orderNumber={ orderNumber.order }/>
            </Modal>
            )}
          
            {currentCard && (
            <Modal 
                onClose={ closeAllModals }
                title="Детали ингредиента"
            >
                <IngredientDetails ingredient={ currentCard }/>
           </Modal>)}  */}
        </section>
    );
}

export default App;
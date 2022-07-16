import React, { useContext, useMemo }from 'react';
import PropTypes from 'prop-types';
import stylesConstructor from './BurgerConstructor.module.css';
import { Button, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElement from '../BurgerConstructor/BurgerElement/BurgerElement';
import { DataContext, ConstructorContext } from '../../services/productsContext';

import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';
import { getOrderNumber } from '../../services/actions/index';
import { useDrop } from "react-dnd";
import { CLOSE_ALL_MODALS, OPEN_ORDER_MODAL, ADD_ITEM } from '../../services/actions/index';


export default function BurgerConctructor () {
   
    //const state = useContext(DataContext);
    //const data = state.cardData;
    // const getServOrder = useContext(ConstructorContext);
    
    //Пока пусть все данные с бургерами отражаются в конструкторе. Избавляемся от контекста
    const state = useSelector((store) => store);
    //const bun = useMemo(() => data.filter(element => element.type === 'bun'), [data]);

    const burgerConstructorElements = useSelector((store) => store.ingredientReducer.burgerConstructorData);
    const bun = state.ingredientReducer.bun;
    const bunArray = [bun].map((item) => item._id);
    const burgerConstructorArr = burgerConstructorElements.map((element) => element._id);
    const productsId = [...burgerConstructorArr, ...bunArray];
   


    //const totalPrice = [];
    const setTotalPrice = () => {
        return  burgerConstructorElements.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0 + bun.price ? bun.price * 2 : 0);
    };
    

    const dispatch = useDispatch();
    const closeOrderModal = () => {
        dispatch({ type: CLOSE_ALL_MODALS })
    }

   const orderOverlay = state.ingredientReducer.orderOverlay;


   const getServOrder = () => {
      dispatch(getOrderNumber(productsId));
      dispatch({ type: OPEN_ORDER_MODAL });

   }

   const handleDrop = (itemId) => {
    dispatch({
      type: ADD_ITEM,
      item: { ...itemId },
    });
  };

  const [{ isHover }, dropTarget] = useDrop({
    accept: 'item',
    drop(itemId) {
      handleDrop(itemId);
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

    /////////////////////////////////////////////////////
    // Из App
    /////////////////////////////////////////////////////

   /* const [orderNumber, setOrderNumber] = useState({
        order: null,
        isLoading: false,
        hasError: false,
    });


    function openOrderModal() {
        //setOrderDetailsVisible(true);
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
       });}

       const getServOrder = () => {
        getOrderNumber();
        openOrderModal();
    }
*/
///////////////////////////////////////////////////////
// Конец
/////////////////////////////////////////////////////////////



     return (
        <section className={`${stylesConstructor.container} mt-25 mb-10`} ref={ dropTarget }>
            <ul className={`${stylesConstructor.list} ${stylesConstructor.list_locked} ${stylesConstructor.list_top} mb-4`}>
            {bun && (
                        <li key={bun._id} className={`${stylesConstructor.list__element} pr-6 pl-8`}>
                            <BurgerElement
                                type="top"
                                isLocked={true}
                                card={{...bun, name: `${bun.name} (верх)`}}
                            />
                        </li>   
                    )
                  }  
            </ul>
            <ul className={`${stylesConstructor.list} ${stylesConstructor.list_unLocked}`}>
                {burgerConstructorElements.map(item => {
                  if (item.type !== "bun") {
                    return (
                        <li key={item._id} className={`${stylesConstructor.list__element} pl-4 pr-4 mb-4`}>
                            <DragIcon type="primary" />
                            <BurgerElement 
                                isLocked={false}
                                card={item}
                            />
                     </li>  
                    )}  
                })}
            </ul>
            <ul className={`${stylesConstructor.list} ${stylesConstructor.list_locked} ${stylesConstructor.list_bottom} mt-4`}>
                {bun && (
                        <li key={bun._id} className={`${stylesConstructor.list__element} pr-6 pl-8`}>
                            <BurgerElement
                                type="bottom"
                                isLocked={true}
                                card={{...bun, name: `${bun.name} (низ)`}}
                            />
                        </li>   
                    )
                  }  
            </ul>         
            <div className={`${stylesConstructor.price} pt-10 pr-4`}>
                <div className={`${stylesConstructor.price__item} mr-10`}>
                    <p className="mr-2 text text_type_digits-medium">{setTotalPrice()}</p>
                    <div className={stylesConstructor.price__icon}>
                    <CurrencyIcon type='primary' />
                    </div>
                </div>
                <Button onClick={ getServOrder } type="primary" size="large" disabled={ bun.price && burgerConstructorElements.length ? false : true } >Оформить заказ</Button>    
            </div>
            {orderOverlay && (
            <Modal 
                onClose={ closeOrderModal } 
                title=""
            > 
                <OrderDetails orderNumber={ state.ingredientReducer.orderData }/>
            </Modal>
            )}
        </section>
    );
}

BurgerConctructor.propTypes = {
    //productsId: PropTypes.array.isRequired,
}

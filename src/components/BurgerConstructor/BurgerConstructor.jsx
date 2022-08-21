import React from 'react';
import stylesConstructor from './BurgerConstructor.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerElement from '../BurgerConstructor/BurgerElement/BurgerElement';
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import OrderDetails from '../Modal/OrderDetails/OrderDetails';
import { getOrderNumber } from '../../services/actions/index';
import { useDrop } from "react-dnd";
import { CLOSE_ALL_MODALS, OPEN_ORDER_MODAL, ADD_ITEM } from '../../services/actions/index';
import { addIngredientCard } from '../../services/actions/index';
import { useHistory } from "react-router-dom";

export default function BurgerConctructor () {
    
    const dispatch = useDispatch();
    const refreshToken = localStorage.refreshToken;
    const history = useHistory();
    
    const burgerConstructorElements = useSelector((store) => store.ingredient.burgerConstructorData);
    const burgerConstructorArr = burgerConstructorElements.map((element) => element._id);

    const bun = useSelector((store) => store.ingredient.bun);
    const bunArray = [bun].map((item) => item._id);
    
    const productsId = [...burgerConstructorArr, ...bunArray];
   
    const orderOverlay = useSelector((store) => store.order.orderOverlay)
    const orderData = useSelector((store) => store.order.orderData)
  
    const setTotalPrice = () => {
        return  burgerConstructorElements.reduce((previousValue, currentValue) => 
        previousValue + currentValue.price, 0 + bun.price ? bun.price * 2 : 0);
    };
    
    const closeOrderModal = () => {
        dispatch({ type: CLOSE_ALL_MODALS })
    }

    const getServOrder = () => {
        if(refreshToken) {
            dispatch(getOrderNumber(productsId));
            dispatch({ type: OPEN_ORDER_MODAL });
        } else {
            history.replace("/login");
        }
    }
   
    // Реализация D&D //
    const handleDrop = (itemId) => {
        dispatch({
            type: ADD_ITEM,
            item: { ...itemId },
        });
    }

    const [{ isHover }, dropTarget] = useDrop({
        accept: 'item',
        drop(itemId) { 
            handleDrop(addIngredientCard(itemId));
        },
        collect: (monitor) => ({
            isHover: monitor.isOver(),
        }),
    });

    return (
        <section className={`${stylesConstructor.container} mt-25 mb-10`} ref={ dropTarget }>
            <ul className={`${stylesConstructor.list} ${stylesConstructor.list_locked} ${stylesConstructor.list_top} mb-4`}>
            {bun.image && (
                        <li key={bun._id} className={`${stylesConstructor.list__element} pr-6 pl-8`}>
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={`${bun.name} (верх)`}
                                price={bun.price}
                                thumbnail={bun.image}
                            />
                        </li>   
                    )
                  }  
            </ul>
            <ul className={`${stylesConstructor.list} ${stylesConstructor.list_unLocked}`}>
                {burgerConstructorElements.map((item, index) => {
                    return (
                        <BurgerElement
                            key={item.key}
                            index={index}
                            item={item}
                        />
                    )}  
                )}
            </ul>
            <ul className={`${stylesConstructor.list} ${stylesConstructor.list_locked} ${stylesConstructor.list_bottom} mt-4`}>
                {bun.image && (
                        <li key={bun._id} className={`${stylesConstructor.list__element} pr-6 pl-8`}>
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={`${bun.name} (низ)`}
                                price={bun.price}
                                thumbnail={bun.image}
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
                <OrderDetails orderNumber={ orderData }/>
            </Modal>
            )}
        </section>
    );
}

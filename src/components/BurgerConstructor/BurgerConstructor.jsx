import React from 'react';
import PropTypes from 'prop-types';
import stylesConstructor from './BurgerConstructor.module.css';
import { Button, DragIcon, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropTypes } from '../../utils/constants';
import BurgerElement from '../BurgerConstructor/BurgerElement/BurgerElement';

export default function BurgerConctructor ({ data, openModal }) {
   
    const bun = data.filter(element => element.type === 'bun');
    
    return (
        <section className={`${stylesConstructor.container} mt-25 mb-10`}>
            <ul className={`${stylesConstructor.list} ${stylesConstructor.list_locked} ${stylesConstructor.list_top} mb-4`}>
                {bun.map((item) => {
                  if (item._id === "60d3b41abdacab0026a733c6") {
                    return (
                        <li key={item._id} className={`${stylesConstructor.list__element} pr-6 pl-8`}>
                            <BurgerElement
                                type="top"
                                isLocked={true}
                                card={{...item, name: `${item.name} (верх)`}}
                            />
                        </li>   
                    )
                  }  
                })}
            </ul>
            <ul className={`${stylesConstructor.list} ${stylesConstructor.list_unLocked} `}>
                {data.map(item => {
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
                {bun.map((item) => {
                  if (item._id === "60d3b41abdacab0026a733c6") {
                    return (
                        <li key={item._id} className={`${stylesConstructor.list__element} pr-6 pl-8`}>
                            <BurgerElement
                                type="bottom"
                                isLocked={true}
                                card={{...item, name: `${item.name} (низ)`}}
                            />
                        </li>   
                    )
                  }  
                })}     
            </ul>         
            <div className={`${stylesConstructor.price} pt-10 pr-4`}>
                <div className={`${stylesConstructor.price__item} mr-10`}>
                    <p className="mr-2 text text_type_digits-medium">610</p>
                    <div className={stylesConstructor.price__icon}>
                    <CurrencyIcon type='primary' />
                    </div>
                </div>
                <Button onClick={openModal} type="primary" size="large">Оформить заказ</Button>    
            </div>
        </section>
    );
}

BurgerConctructor.propTypes = {
    data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
    openModal: PropTypes.func.isRequired,
}

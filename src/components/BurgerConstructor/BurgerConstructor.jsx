import React from 'react';
import stylesConstructor from './BurgerConstructor.module.css';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import subtract from '../../images/subtract.svg';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/data';
import BurgerElement from '../BurgerConstructor/BurgerElement/BurgerElement';

export default function BurgerConctructor ( {bun, data} ) {
    return (
        <section className={`${stylesConstructor.container} mt-25 mb-10`}>
            <ul className={stylesConstructor.list}>
                {data.map((item, index) => {
                  if (item.type === "bun" && index === 0) {
                    return (
                        <li key={item._id} className={`${stylesConstructor.list__element} pl-4 pr-4 mb-4`}>
                        <BurgerElement
                            type="top"
                            isLocked={true}
                            card={{...bun, name: `${item.name} (верх)`, price: item.price, image: item.image}}
                        />
                    </li>   
                    )
                  }  
                })}
                {data.map(item => {
                  if (item.type !== "bun") {
                    return (
                        <li key={item._id} className={`${stylesConstructor.list__element} pl-4 pr-4 mb-4`}>
                        <BurgerElement 
                        type="undefuned"
                        isLocked={false}
                        card={{...item, name: item.name, price: item.price, image: item.image}}
                        />
                     </li>  
                    )}  
                })}
                {data.map((item, index) => {
                  if (item.type === "bun" && index === 0) {
                    return (
                        <li key={item._id} className={`${stylesConstructor.list__element} pl-4 pr-4 mb-4`}>
                        <BurgerElement
                            type="bottom"
                            isLocked={true}
                            card={{...bun, name: `${item.name} (низ)`, price: item.price, image: item.image}}
                        />
                    </li>   
                    )
                  }  
                })}     
            </ul>         
            <div className={`${stylesConstructor.price} pt-10 pr-4`}>
                <div className={`${stylesConstructor.price__item} mr-10`}>
                    <p className="mr-2 text text_type_digits-medium">610</p>
                    <img src={subtract} alt="icon" className={stylesConstructor.image} />
                </div>
                <Button type="primary" size="large">Оформить заказ</Button>    
            </div>
        </section>
    );
}

BurgerConctructor.propTypes = {
    bun: PropTypes.arrayOf(ingredientPropTypes).isRequired,
    data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}

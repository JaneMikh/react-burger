import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesCard from './IngredientCard.module.css';

export default function Ingredient ({name, image, price}) {
    return (
      <li className={stylesCard.element}>
        <img 
        src={image} 
        alt="image" 
        className={`${stylesCard.image} pl-4 pr-4`} 
        />
        <div className={`${stylesCard.price} mt-1 mb-1`}>
          <span className="text text_type_digits-default mr-2">"{price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <h3 className={`${stylesCard.name} text text_type_main-small mb-6`}>{name}</h3>
        <div className={stylesCard.counter}>
          <Counter count={1} size="default" /> 
        </div>
      </li>
    )
}
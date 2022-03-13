import React from 'react';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesCard from './IngredientCard.module.css';
import { ingredientPropTypes } from '../../../utils/data';

export default function Ingredient ({ card }) {
  return (
    <li className={stylesCard.element}>
      <img 
        src={card.image} 
        alt="image" 
        className={`${stylesCard.image} pl-4 pr-4`} 
      />
      <div className={`${stylesCard.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default mr-2">{card.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${stylesCard.name} text text_type_main-default mb-6`}>{card.name}</p>
      <div className={stylesCard.counter}>
        <Counter count={1} size="default" /> 
      </div>
    </li>
  );
}

Ingredient.propTypes = {
  card: ingredientPropTypes.isRequired,
};

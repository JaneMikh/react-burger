import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/constants';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesCard from './IngredientCard.module.css';

export default function Ingredient ({ card, onCardClick }) {
  return (
    <li 
      key={card._id}
      className={stylesCard.element}
      onClick={onCardClick}
    >
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
  onCardClick: PropTypes.func.isRequired,
};

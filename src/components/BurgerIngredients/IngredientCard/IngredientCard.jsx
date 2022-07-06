import React from 'react';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesCard from './IngredientCard.module.css';

export default function Ingredient ({ image, price, name, onCardClick }) {
  return (
    <li 
      className={stylesCard.element}
      onClick={onCardClick}
    >
      <img 
        src={image} 
        alt={name}
        className={`${stylesCard.image} pl-4 pr-4`} 
      />
      <div className={`${stylesCard.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default mr-2">{price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${stylesCard.name} text text_type_main-default mb-6`}>{name}</p>
      <div className={stylesCard.counter}>
        <Counter count={1} size="default" /> 
      </div>
    </li>
  );
}

Ingredient.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

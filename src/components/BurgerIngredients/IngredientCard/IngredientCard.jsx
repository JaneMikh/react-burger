import React from 'react';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesCard from './IngredientCard.module.css';
import { useDrag } from "react-dnd";
import { useSelector } from 'react-redux';
import { ingredientPropTypes } from '../../../utils/constants';


export default function Ingredient ({ card, onCardClick }) {
  
  const [{isDrag}, dragRef] = useDrag({
    type: 'item',
    item: () => card,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const counter = useSelector((store) => store.ingredientReducer.counter);
  const bun = useSelector((store) => store.ingredientReducer.bun);
  
  const quantity = bun && bun._id === card._id ? 2 : counter[card._id];
 
  const opacity = isDrag ? 0.5 : 1;

  return (
    <li 
      className={stylesCard.element}
      onClick={onCardClick}
      style={{ opacity }}
      ref={dragRef}
    >
      <img 
        src={card.image} 
        alt={card.name}
        className={`${stylesCard.image} pl-4 pr-4`} 
      />
      <div className={`${stylesCard.price} mt-1 mb-1`}>
        <span className="text text_type_digits-default mr-2">{card.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${stylesCard.name} text text_type_main-default mb-6`}>{card.name}</p>
      <div className={stylesCard.counter}>
        <Counter count={quantity} size="default" />
      </div>
    </li>
  );
}

Ingredient.propTypes = {
  /*image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,*/
  card: ingredientPropTypes.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

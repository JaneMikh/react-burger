import React from 'react';
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesCard from './IngredientCard.module.css';
import { useDrag } from "react-dnd";
import { ingredientPropTypes } from '../../../utils/constants';
import { Link, useLocation } from "react-router-dom";

export default function Ingredient ({ card, onCardClick }) {
  //console.log(card);
  const [{isDrag}, dragRef] = useDrag({
    type: 'item',
    item: card,
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  });

  const opacity = isDrag ? 0.5 : 1;
  const location = useLocation();

  return (
    <Link
    to={{
      pathname: `/ingredients/${card._id}`,
      state: { background: location },
    }}
    key={card._id}
    className={stylesCard.link}
    >
      <li 
        className={stylesCard.element}
        onClick={onCardClick}
        style={ {opacity} }
        ref={dragRef}
      >
        <img 
          src={ card.image } 
          alt={ card.name }
          className={`${stylesCard.image} pl-4 pr-4`} 
        />
        <div className={`${stylesCard.price} mt-1 mb-1`}>
          <span className="text text_type_digits-default mr-2">{ card.price }</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${stylesCard.name} text text_type_main-default mb-6`}>{ card.name }</p>
        <div className={stylesCard.counter}>
          <Counter count={ card.count } size="default" />
        </div>
      </li>
      </Link>
  );
}

Ingredient.propTypes = {
 /* card: ingredientPropTypes.isRequired,
  onCardClick: PropTypes.func.isRequired,*/
}
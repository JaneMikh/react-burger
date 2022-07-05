import React from 'react';
import PropTypes from 'prop-types';
import stylesIngredients from './BurgerIngredients.module.css';
import { ingredientPropTypes } from '../../utils/constants';
import Tabs from '../BurgerIngredients/Tabs/Tabs';
import IngredientList from './IngredientList/IngredientList';

import { useContext } from 'react';
import { DataContext, IngredientsContext } from '../../services/productsContext';


export default function BurgerIngredients () {
    
  //Получить значение контекста
  const state = useContext(DataContext);
  const data = state.state.cardData;
  const setCardIngredient = useContext(IngredientsContext);


  const bun = data.filter(element => element.type === 'bun');
  const sauce = data.filter(element => element.type === 'sauce');
  const main = data.filter(element => element.type === 'main'); 

  function handleCardElement (item) {
    if (item) {
      setCardIngredient(item);
    }
  }

  function handleIngredientCard (evt) {
    //Таргетинг на конкретного родителя
    const cardElement = evt.currentTarget.querySelector(".text_type_main-default").textContent;
    function cardItem (arr, element) {
      return arr.find((item) => item.name === element);
    }
    const card = cardItem(data, cardElement);
    handleCardElement(card);
  }

  return (
    <section className={`${stylesIngredients.container} mb-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      <div className={stylesIngredients.menu}>
        <IngredientList onCardClick={handleIngredientCard} title="Булки" data={bun}/>
        <IngredientList onCardClick={handleIngredientCard} title="Соусы" data={sauce}/>
        <IngredientList onCardClick={handleIngredientCard} title="Начинки" data={main}/>
      </div>
    </section>
  );
}
/*
BurgerIngredients.propTypes = {
  //data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  //handleCardElement: PropTypes.func.isRequired,
}
*/
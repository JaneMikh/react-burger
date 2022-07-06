import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import stylesIngredients from './BurgerIngredients.module.css';
import Tabs from '../BurgerIngredients/Tabs/Tabs';
import IngredientList from './IngredientList/IngredientList';
import { DataContext } from '../../services/productsContext';

export default function BurgerIngredients ({ handleCardElement }) {
    
  const state = useContext(DataContext);
  const data = state.cardData;

  const bun = useMemo(() => data.filter(element => element.type === 'bun'), [data]);
  const sauce = useMemo(() => data.filter(element => element.type === 'sauce'), [data]);
  const main = useMemo(() => data.filter(element => element.type === 'main'), [data]); 


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

BurgerIngredients.propTypes = {
  handleCardElement: PropTypes.func.isRequired,
}

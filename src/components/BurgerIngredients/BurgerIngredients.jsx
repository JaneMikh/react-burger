import React from 'react';
import stylesIngredients from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/data';
import Tabs from '../BurgerIngredients/Tabs/Tabs';
import { data } from '../../utils/data';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import { useState } from 'react';
import IngredientList from './IngredientList/IngredientList';


export default function BurgerIngredients ({ bun, sauce, main }) {
  //Состояния открытия/закрытия
  const [isCardDetailsVisible, setCardDetailsVisible] = useState(false);
  
  //Состояния выбора определенного ингредиента из списка
  const [currentCard, setCardIngredient] = useState({});

  function closeModal() {
    setCardDetailsVisible(false);
    setCardIngredient({});
  }

  function handleIngredientCard (evt) {
    //Таргетинг на конкретного родителя
    const cardElement = evt.currentTarget.querySelector(".text_type_main-default").textContent;
    function cardItem (arr, element) {
      return arr.find((item) => item.name === element);
    }
    const card = cardItem(data, cardElement);
    
    if (card) {
      setCardIngredient(card);
      
    }
    setCardDetailsVisible(true);
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
      <Modal 
        onClose={closeModal}
        isPopupOpen={isCardDetailsVisible} 
        title="Детали ингредиента"
      >
        {isCardDetailsVisible && (
        <IngredientDetails ingredient={currentCard}/>)}
      </Modal>
    </section>
  );
}

BurgerIngredients.propTypes = {
  bun: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  sauce: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  main: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}

import React, { useMemo, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import stylesIngredients from './BurgerIngredients.module.css';
import Tabs from '../BurgerIngredients/Tabs/Tabs';
import IngredientList from './IngredientList/IngredientList';
//import { DataContext } from '../../services/productsContext';

import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getIngredientsData } from '../../services/actions/index';


export default function BurgerIngredients (/*{ handleCardElement }*/) {
   
  const data = useSelector((store) => store.ingredientReducer.ingredientsData);
 
 //const state = useContext(DataContext);
 //const data = state.cardData;
 //const [isIngredientDetailsOpen, setDetailsOpen] = useState(false);
  const [currentCard, setCardIngredient] = useState(null);


  const [current, setCurrent] = useState('bun');
  
  const handleTabsClick = (evt) => {
    setCurrent(evt);
  }

  const ingridietsScroll = (evt) => {
    const scroll = evt.target.scrollTop;
    scroll <= 260
      ? setCurrent("bun")
      : scroll <= 1200
      ? setCurrent("sauce")
      : setCurrent("main");
  };


  const closeAllModals = () => {
    //setDetailsOpen(true);
    setCardIngredient(null);
  };

  const bun = useMemo(() => data.filter(element => element.type === 'bun'), [data]);
  const sauce = useMemo(() => data.filter(element => element.type === 'sauce'), [data]);
  const main = useMemo(() => data.filter(element => element.type === 'main'), [data]); 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getIngredientsData());
  },[dispatch]);


  function handleCardElement (item) {
    if (item) {
      setCardIngredient(item);
    }
}

  function handleIngredientCard (evt) {
    //Таргетинг на конкретного родителя
    const cardElement = evt.currentTarget.querySelector(".text_type_main-default").textContent;
    function getCardItem (arr, element) {
      return arr.find((item) => item.name === element);
    }
    const card = getCardItem(data, cardElement);
    handleCardElement(card);
  }

  return (
    <section className={`${stylesIngredients.container} mb-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs onClick={handleTabsClick} current={current}/>
      <div className={stylesIngredients.menu} onScroll={ingridietsScroll}>
        <IngredientList onCardClick={handleIngredientCard} title="Булки" data={bun}/>
        <IngredientList onCardClick={handleIngredientCard} title="Соусы" data={sauce}/>
        <IngredientList onCardClick={handleIngredientCard} title="Начинки" data={main}/>
      </div>
      {currentCard && (
            <Modal 
                onClose={ closeAllModals }
                title="Детали ингредиента"
            >
                <IngredientDetails ingredient={ currentCard }/>
           </Modal>)}
    </section>
  );
}

BurgerIngredients.propTypes = {
  //handleCardElement: PropTypes.func.isRequired,
}

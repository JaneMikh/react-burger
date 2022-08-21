import React, { useMemo, useEffect, useState, useRef } from 'react';
import stylesIngredients from './BurgerIngredients.module.css';
import Tabs from '../BurgerIngredients/Tabs/Tabs';
import IngredientList from './IngredientList/IngredientList';
import Modal from '../Modal/Modal';
import IngredientDetails from '../Modal/IngredientDetails/IngredientDetails';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getIngredientsData } from '../../services/actions/index';
import { useParams } from "react-router-dom";

export default function BurgerIngredients () {
  const dispatch = useDispatch();

  const ingredients = useSelector((store) => store.ingredient.ingredientsData);
  const [currentCard, setCardIngredient] = useState(null);
  const [currentTab, setCurrentTab] = useState('bun');
  
  const bun = useMemo(() => ingredients.filter(element => element.type === 'bun'), [ingredients]);
  const sauce = useMemo(() => ingredients.filter(element => element.type === 'sauce'), [ingredients]);
  const main = useMemo(() => ingredients.filter(element => element.type === 'main'), [ingredients]); 
  
  const ingredientGroups = {
    sauce: useRef(),
    bun: useRef(),
    main: useRef(),
  };

  const handleScroll = (evt) => {
    const { scrollTop } = evt.target;
    const bunOffset = scrollTop;
    const mainOffset = Math.abs(
      ingredientGroups.main.current.offsetTop - ingredientGroups.bun.current.offsetTop - scrollTop,
    );
    const sauceOffset = Math.abs(
      ingredientGroups.sauce.current.offsetTop - ingredientGroups.bun.current.offsetTop - scrollTop,
    );
    
    const minOffset = Math.min(bunOffset, sauceOffset, mainOffset);
    if (currentTab !== 'sauce' && minOffset === sauceOffset) {
      setCurrentTab('sauce');
    } else if (currentTab !== 'bun' && minOffset === bunOffset) {
      setCurrentTab('bun');
    } else if (currentTab !== 'main' && minOffset === mainOffset) {
      setCurrentTab('main');
    };
  }

  const handleTabElement = (element) => {
    ingredientGroups[element].current.scrollIntoView({ behavior: 'smooth' });
    setCurrentTab(element);
  };

  const closeAllModals = () => {
    setCardIngredient(null);
  };

  useEffect(() => {
    document.title = "react burger";
    dispatch(getIngredientsData());
  },[dispatch]);


  const handleCardElement = (item) => {
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
    const card = getCardItem(ingredients, cardElement);
    handleCardElement(card);
  }

  return (
    <section className={`${stylesIngredients.container} mb-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs current={currentTab} onChange={handleTabElement}/>
      <div className={stylesIngredients.menu} onScroll={handleScroll}>
        <IngredientList ref={ingredientGroups.bun} onCardClick={handleIngredientCard} title="Булки" data={bun}/>
        <IngredientList ref={ingredientGroups.sauce} onCardClick={handleIngredientCard} title="Соусы" data={sauce}/>
        <IngredientList ref={ingredientGroups.main} onCardClick={handleIngredientCard} title="Начинки" data={main}/>
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

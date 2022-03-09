import React from 'react';
import stylesIngredients from './BurgerIngredients.module.css';
import { Tab, Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import bun from '../../images/bun.png'; /*потом удалить*/
import sauce from '../../images/sause.png';


function Tabs () {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className={stylesIngredients.tab}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

function Ingredient () {
  return (
    <li className={stylesIngredients.list_item}>
      <img src={bun} alt="image" className={`${stylesIngredients.image} pl-4 pr-4`} />
      <div className={`${stylesIngredients.price} mt-1 mb-1`}>
        <span className={`${stylesIngredients.price_counter} text text_type_digits-default mr-2`}>55</span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${stylesIngredients.name} text text_type_main-small mb-6`}>Краторная булка N-200i</h3>
      <div className={stylesIngredients.counter}>
        <Counter count={1} size="default" />
      </div>
    </li>
  )
}


export default function BurgerIngredients () {
  return (
    <section className={`${stylesIngredients.ingredients} mb-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      <div className={stylesIngredients.menu}>
        <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
        <ul className={`${stylesIngredients.list} ml-4`}>
          <Ingredient />
          <Ingredient />
        </ul>
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <ul className={`${stylesIngredients.list} ml-4`}>
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
        </ul>
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <ul className={`${stylesIngredients.list} ml-4`}>
          <Ingredient />
          <Ingredient />
          <Ingredient />
          <Ingredient />
        </ul>
      </div>
    </section>
  )
}
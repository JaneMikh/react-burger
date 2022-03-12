import React from 'react';
import stylesIngredients from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsList } from '../../utils/data';
import Ingredient from './IngredientCard/IngredientCard';


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

export default function BurgerIngredients () {
  return (
    <section className={`${stylesIngredients.container} mb-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      <div className={stylesIngredients.menu}>
        <h2 className="text text_type_main-medium mt-10 mb-6">Булки</h2>
        <ul className={`${stylesIngredients.menu__list} ml-4`}>
          {IngredientsList.map(item => 
            (item.type="bun" &&
              <Ingredient 
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
            )
          )}
        </ul>
        <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
        <ul className={`${stylesIngredients.menu__list} ml-4`}>
        {IngredientsList.map(item => 
            (item.type="sauce" &&
              <Ingredient 
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
            )
          )}
        </ul>
        <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
        <ul className={`${stylesIngredients.menu__list} ml-4`}>
        {IngredientsList.map(item => 
            (item.type="main" &&
              <Ingredient 
              key={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
            )
          )} 
        </ul>
      </div>
    </section>
  )
}
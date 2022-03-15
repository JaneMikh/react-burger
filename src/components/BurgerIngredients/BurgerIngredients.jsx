import React from 'react';
import stylesIngredients from './BurgerIngredients.module.css';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/data';
import Tabs from '../BurgerIngredients/Tabs/Tabs';
import IngredientList from '../BurgerIngredients/IngredientList/IngredientList';


export default function BurgerIngredients ({ bun, sauce, main }) {
  return (
    <section className={`${stylesIngredients.container} mb-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      <div className={stylesIngredients.menu}>
        <IngredientList title="Булки" data={bun}/>
        <IngredientList title="Соусы" data={sauce}/>
        <IngredientList title="Начинки" data={main}/>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  bun: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  sauce: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  main: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}

import React from 'react';
import PropTypes from 'prop-types';
import Ingredient from '../IngredientCard/IngredientCard';
import stylesList from './IngredientList.module.css';
import { ingredientPropTypes } from '../../../utils/data';

export default function IngredientList ({ data, title }) {
  return (
    <>
      <h2 className="text text_type_main-medium mt-10 mb-6">{title}</h2>
      <ul className={`${stylesList.list} ml-4`}>
        {data.map(item => (
          <Ingredient
            card={item}
            key={item._id}
            image={item.image}
            price={item.price}
            name={item.name}
          />
        ))
        }
      </ul>
    </>
  )
}
  
IngredientList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}
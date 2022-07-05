import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/constants';
import Ingredient from '../IngredientCard/IngredientCard';
import stylesList from './IngredientList.module.css';



export default function IngredientList ({ data, title, onCardClick }) {

  return (
    <>
      <h2 className="text text_type_main-medium mt-10 mb-6">{title}</h2>
      <ul className={`${stylesList.list} ml-4`}>
        {data.map(item => (
          <Ingredient
            key={item._id}
            onCardClick={onCardClick}
            image={item.image}
            price={item.price}
            name={item.name}
          />
        ))
        }
      </ul>
    </>
  );
}
  
IngredientList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
  onCardClick: PropTypes.func.isRequired,
}
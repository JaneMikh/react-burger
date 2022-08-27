import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/constants';
import Ingredient from '../IngredientCard/IngredientCard';
import stylesList from './IngredientList.module.css';

const IngredientList = forwardRef(({ data, title }, ref) => (
    <>
      <h2 ref={ref} className="text text_type_main-medium mt-10 mb-6">{title}</h2>
      <ul className={`${stylesList.list} ml-4`}>
        {data.map(item => (
          <Ingredient
            key={item._id}
            card={item}
          />
        ))
        }
      </ul>
    </>
));
  
IngredientList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
}

export default IngredientList;
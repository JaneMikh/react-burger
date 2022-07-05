import React from 'react';
import PropTypes from 'prop-types';

export const ingredientURL = 'https://norma.nomoreparties.space/api';

 // Объект с определённой структурой
export const ingredientPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number, 
});

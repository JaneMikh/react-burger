import React from 'react';
import stylesCardInfo from './IngredientDetails.module.css';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function IngredientDetails () {
    
  const { id } = useParams();
  const ingredients = useSelector((store) => store.ingredient.ingredientsData);
  const ingredientModal = ingredients.find((item) => item._id === id);

    return (
        <>
        {ingredientModal && (
        <div className={`${stylesCardInfo.popup__container} pr-25 pb-15 pl-25`}>
            <img src={ingredientModal.image_large} alt={ingredientModal.name} className={stylesCardInfo.popup__image}/>
            <p className={`${stylesCardInfo.popup__aligner} text text_type_main-medium mt-4 mb-8`}>
                {ingredientModal.name}
            </p>
            <ul className={stylesCardInfo.popup__list}>
                <li className={`${stylesCardInfo.popup__element} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive mb-2">
                        Калории, ккал
                    </p>
                    <p className={`${stylesCardInfo.popup__aligner} text text_type_main-default text_color_inactive`}>
                        {ingredientModal.calories}
                    </p>
                </li>
                <li className={`${stylesCardInfo.popup__element} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive mb-2">
                        Белки, г
                    </p>
                    <p className={`${stylesCardInfo.popup__aligner} text text_type_main-default text_color_inactive`}>
                        {ingredientModal.proteins}
                    </p>
                </li>
                <li className={`${stylesCardInfo.popup__element} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive mb-2">
                         Жиры, г
                    </p>
                    <p className={`${stylesCardInfo.popup__aligner} text text_type_main-default text_color_inactive`}>
                        {ingredientModal.fat}
                    </p>
                </li>
                <li className={`${stylesCardInfo.popup__element} mr-5`}>
                    <p className="text text_type_main-default text_color_inactive mb-2">
                        Углеводы, г
                    </p>
                    <p className={`${stylesCardInfo.popup__aligner} text text_type_main-default text_color_inactive`}>
                        {ingredientModal.carbohydrates}
                    </p>
                </li>
            </ul>
        </div>
        )}
        </>
    );
}

IngredientDetails.propTypes = {
    //ingredient: PropTypes.object.isRequired
   // ingredient: PropTypes.object,
};
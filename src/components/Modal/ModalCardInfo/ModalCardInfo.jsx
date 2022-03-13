import React from 'react';
import stylesCardInfo from './ModalCardInfo.module.css';
import closeButton from '../../../images/close-button.svg';
import {IngredientsList} from '../../../utils/data';

export default function CardInfo () {

    const {image_large, name, calories, proteins, fat, carbohydrates} = IngredientsList[2];
    
    return (
        <div className={stylesCardInfo.popup}>
            <div className={`${stylesCardInfo.popup__container} pt-10 pr-10 pb-15 pl-10`}>
                <img src={closeButton} alt="Закрыть" className={stylesCardInfo.popup__closeButton} />
                <h1 className="text text_type_main-large">Детали ингредиента</h1>
                <img src={image_large} alt="Ингредиент" className={stylesCardInfo.popup__image}/>
                <p className={`${stylesCardInfo.popup__aligner} text text_type_main-medium mt-4 mb-8`}>
                    {name}
                </p>
                <ul className={stylesCardInfo.popup__list}>
                    <li className={`${stylesCardInfo.popup__element} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Калории, ккал
                        </p>
                        <p className={`${stylesCardInfo.popup__aligner} text text_type_main-default text_color_inactive`}>
                            {calories}
                        </p>
                    </li>
                    <li className={`${stylesCardInfo.popup__element} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Белки, г
                        </p>
                        <p className={`${stylesCardInfo.popup__aligner} text text_type_main-default text_color_inactive`}>
                            {proteins}
                        </p>
                    </li>
                    <li className={`${stylesCardInfo.popup__element} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Жиры, г
                        </p>
                        <p className={`${stylesCardInfo.popup__aligner} text text_type_main-default text_color_inactive`}>
                            {fat}
                        </p>
                    </li>
                     <li className={`${stylesCardInfo.popup__element} mr-5`}>
                        <p className="text text_type_main-default text_color_inactive mb-2">
                            Углеводы, г
                        </p>
                        <p className={`${stylesCardInfo.popup__aligner} text text_type_main-default text_color_inactive`}>
                            {carbohydrates}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
}


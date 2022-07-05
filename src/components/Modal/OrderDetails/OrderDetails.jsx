import React from 'react';
import stylesOrder from './OrderDetails.module.css';
import readyIcon from '../../../images/done-icon.svg';

export default function OrderDetails ({orderNumber}) {
    return (
        <div className={`${stylesOrder.popup__container} pt-4 pr-25 pb-30 pl-25`}>
            <p className={`${stylesOrder.popup__aligner} text text_type_digits-large mb-8`}>{orderNumber}</p>
            <p className={`${stylesOrder.popup__text} text text_type_main-medium`}>Идентификатор заказа</p>
            <img src={readyIcon} alt="Готово" className={`${stylesOrder.popup__image} mt-15 mb-15`} />
            <p className={`${stylesOrder.popup__aligner} text text_type_main-small mb-2`}>Ваш заказ начали готовить</p>
            <p className={`${stylesOrder.popup__aligner} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
        </div>
    );
}
import React from 'react';
import stylesOrder from './ModalOrderInfo.module.css';
import readyIcon from '../../../images/done-icon.svg';
import closeButton from '../../../images/close-button.svg';

export default function OrderInfo () {
    return (
     <div className={stylesOrder.popup}>
         <div className={`${stylesOrder.popup__container} pt-30 pr-25 pb-30 pl-25`}>
            <img src={closeButton} alt="Закрыть" className={stylesOrder.popup__closeButton} />
            <h1 className={`${stylesOrder.popup__aligner} text text_type_digits-large mb-8`}>034536</h1>
            <p className={`${stylesOrder.popup__text} text text_type_main-medium`}>Идентификатор заказа</p>
            <img src={readyIcon} alt="Готово" className={`${stylesOrder.popup__image} mt-15 mb-15`} />
            <p className={`${stylesOrder.popup__aligner} text text_type_main-small mb-2`}>Ваш заказ начали готовить</p>
            <p className={`${stylesOrder.popup__aligner} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
         </div>
     </div>    
    )
}
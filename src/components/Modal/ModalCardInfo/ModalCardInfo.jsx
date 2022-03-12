import React from 'react';
import stylesCardInfo from './ModalCardInfo.module.css';
import closeButton from '../../../images/close-button.svg';


export default function CardInfo () {
    return (
        <div className={stylesCardInfo.popup}>
            <div className={`${stylesCardInfo.popup__container} pt-10 pr-10 pb-15 pl-10`}>
                <img src={closeButton} alt="Закрыть" className={stylesCardInfo.popup__closeButton} />
                <h1 className="text text_type_main-large">Детали ингредиента</h1>
                   
            </div>
        </div>
    )
}
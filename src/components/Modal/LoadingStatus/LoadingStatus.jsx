import React from 'react';
import modalStyle from './LoadingStatus.module.css';
import PropTypes from "prop-types";

//Назначение: для обработки ошибок при офрмлении заказа
export default function LoadingStatus ({ download, error }) {

    return (
        <>
            {download && (
            <div className={modalStyle.content}>
                <h2 className={`${modalStyle.text} text text_type_main-large`}>Получение номера заказа...</h2>
                <p className="text text_type_main-medium mt-15">Пожалуйста, подождите</p>
            </div>
            )}
            {error && (
            <div className={modalStyle.content}>
                <h2 className={`${modalStyle.text} text text_type_main-large`}>Уппс...Произошла ошибка (:</h2>
            </div>
            )}
        </>
    );
}

LoadingStatus.propTypes = {
    download: PropTypes.bool,
    error: PropTypes.bool,
}

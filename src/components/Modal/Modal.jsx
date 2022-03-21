import React from 'react';
import {useEffect} from 'react';
import ModalOverlay from '../Modal/ModalOverlay/ModalOverlay';
import { createPortal } from 'react-dom';
import stylesModal from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

export default function Modal ({ isPopupOpen, onClose, children, title }) {
    const modalRoot = document.getElementById("react-modals");

    //Побочные эффекты
    useEffect(() => {
        const handleEscClose = (evt) => {
            if (evt.key === 'Escape' && isPopupOpen) {
                onClose();
            }
        }
        document.addEventListener('keydown', handleEscClose);

        return () => {
            document.addEventListener('keydown', handleEscClose);  
        }
    }, [onClose, isPopupOpen]);

    

    return  createPortal(
        (
            <>
                <section className={`${stylesModal.container}
                ${isPopupOpen && stylesModal.modal_visible}
                `}>
                    <ModalOverlay onCloseOverlay={onClose} />
                        <div className={stylesModal.modal__container}>
                            <div className={`${stylesModal.modal__text} pt-10 pr-10 pl-10`}>
                                <h1 className="text text_type_main-large">{title}</h1>
                                <button onClick={onClose} className={stylesModal.modal__button}>
                                    <CloseIcon type="primary" />
                                </button>
                            </div>
                            {children}
                        </div>
                </section>
            </>
        ),
        modalRoot    
    );
}

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    isPopupOpen: PropTypes.bool.isRequired,
}


/*function handleCloseOverlay(evt) {
        if (evt.target.className.includes('container')) {
            onClose();
        }
    }
    document.addEventListener('mousedown', handleCloseOverlay);*/
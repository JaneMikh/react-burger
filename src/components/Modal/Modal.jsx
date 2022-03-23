import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../Modal/ModalOverlay/ModalOverlay';
import stylesModal from './Modal.module.css';

export default function Modal ({ isPopupOpen, onClose, children, title }) {
    const modalRoot = document.getElementById("react-modals");

    useEffect(() => {
        const handleEscClose = (evt) => {
            if (evt.key === 'Escape' && isPopupOpen) {
                onClose();
            }
        }
        return () => {
            document.addEventListener('keydown', handleEscClose);  
        }
    }, [onClose, isPopupOpen]);

    return createPortal(
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
    children: PropTypes.element.isRequired,
};

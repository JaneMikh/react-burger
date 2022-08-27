import React from 'react';
import PropTypes from 'prop-types';
import stylesOverlay from './ModalOverlay.module.css';

export default function ModalOverlay ({ onCloseOverlay }) {
    return (
        <div onClick={onCloseOverlay} className={stylesOverlay.overlay}></div>
    );
}

ModalOverlay.propTypes = {
   onCloseOverlay: PropTypes.func.isRequired,
}
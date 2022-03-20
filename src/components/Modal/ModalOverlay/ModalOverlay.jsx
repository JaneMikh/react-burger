import React from 'react';
import stylesOverlay from './ModalOverlay.module.css';

export default function ModalOverlay ({ onCloseOverlay }) {
    return (
        <div onClick={onCloseOverlay} className={stylesOverlay.overlay}></div>
    )
}
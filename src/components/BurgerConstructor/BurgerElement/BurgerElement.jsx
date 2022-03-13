import React from 'react';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../../utils/data';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerElement (props) {
    return (
        <>
            <DragIcon type="primary" />
            <ConstructorElement
                type={props.type}
                isLocked={props.isLocked}
                text={props.card.name}
                price={props.card.price}
                thumbnail={props.card.image}
            />   
        </> 
    );
}

BurgerElement.propTypes = {
    type: PropTypes.string.isRequired,
    isLocked: PropTypes.bool.isRequired,
    card: ingredientPropTypes.isRequired,
}

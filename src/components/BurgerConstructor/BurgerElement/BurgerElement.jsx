import React from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { DELETE_ITEM, CHANGE_ITEM } from '../../../services/actions/index';
import { useDispatch } from 'react-redux';
import { useDrop, useDrag } from "react-dnd";
import stylesConstructor from '../BurgerConstructor.module.css';


export default function BurgerElement ( {item, index} ) {
    const dispatch = useDispatch();
    const ref = useRef(null);
    
    const deleteCardElement = () => {
        dispatch({
          type: DELETE_ITEM,
          item: item,
        });
    };

    const changeElement = (item, hoverIndex) => {
        dispatch({
          type: CHANGE_ITEM,
          hoverIndex: hoverIndex,
          dragItem: item.item,
          dragIndex: item.index,
        });
    }

    const [{ opacity }, dragRef] = useDrag({
        type: "card",
        item: {item, index: index},
        collect: (monitor) => ({
          opacity: monitor.isDragging() ? 0.5 : 1,
        }),
    });
    
    const [, drop] = useDrop({
        accept: "card",
        drop(item) {
          changeElement(item, index);
        },
    });
    
    dragRef(drop(ref));

    return (
        <li ref={ref} style={{ opacity }} className={`${stylesConstructor.list__element} pl-4 pr-4 mb-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => {
                    deleteCardElement(item);
                }}
           />  
        </li> 
    );
}

BurgerElement.propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
}

import React from 'react';
import stylesConstructor from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import bun from '../../images/bun.png'; /*потом удалить*/
import subtract from '../../images/subtract.svg';


export default function BurgerConctructor () {
    return (
        <section className={`${stylesConstructor.content} mt-25`}>
            <ul className={stylesConstructor.list}>
                <li className={`${stylesConstructor.list_element} ml-4 mr-4`}>
                <DragIcon type="primary" />
                <ConstructorElement 
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={bun}/>    
                </li>  
                <li className="mt-4 ml-4 mr-4">
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={bun}/>       
                </li>
                <li className="mt-4 ml-4 mr-4">
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={bun}/>       
                </li>
                <li className="mt-4 ml-4 mr-4">
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={bun}/>       
                </li>
                <li className="mt-4 ml-4 mr-4">
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={bun}/>       
                </li>
                <li className="mt-4 ml-4 mr-4">
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={bun}/>       
                </li>
                <li className="mt-4 ml-4 mr-4">
                <DragIcon type="primary" />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={bun}/>       
                </li>
                <li className="mt-4 ml-4 mr-4">
                <DragIcon type="primary" /> 
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={bun}/>
                </li>
                
            </ul>
            
            <div className={`${stylesConstructor.price} pt-10 pb-20 pr-4`}>
                <div className={`${stylesConstructor.price_item} mr-10`}>
                    <p className="mr-2 text text_type_digits-medium">610</p>
                    <img src={subtract} alt="icon" className={stylesConstructor.image} />
                </div>
                <Button type="primary" size="large">Оформить заказ</Button>    
            </div>
        </section>
    )
}


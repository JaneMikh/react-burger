import React from 'react';
import stylesConstructor from './BurgerConstructor.module.css';
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import subtract from '../../images/subtract.svg';
import { IngredientsList } from '../../utils/data';


const [bun] = IngredientsList.filter(item => item._id === "60666c42cc7b410027a1a9b2");

function BurgerElement(props) {
    return (
        <ConstructorElement 
            type={props.type}
            isLocked={props.isLocked}
            text={props.name}
            price={props.price}
            thumbnail={props.image}
        />    
    )
}

export default function BurgerConctructor () {
    return (
        <section className={`${stylesConstructor.container} mt-25 mb-10`}>
            <ul className={stylesConstructor.list}>
                {bun && (
                    <>
                        <li className={`${stylesConstructor.list__element} pl-4 pr-4 mb-4`}>
                            <DragIcon type="primary" />
                            <BurgerElement  
                                type="top"
                                isLocked={true}
                                name={`${bun.name} (верх)`}
                                price={bun.price}
                                image={bun.image}
                            />
                        </li>  
                    </>    
                )}
                {IngredientsList.map(item => {
                    if (item._type !== "bun") {
                        return (
                            <>
                            <li key={item._id} className={`${stylesConstructor.list__element} pl-4 pr-4 mb-4`}>
                                <DragIcon type="primary" />
                                <BurgerElement  
                                    isLocked={false}
                                    name={item.name}
                                    price={item.price}
                                    image={item.image}
                                />
                            </li>  
                        </>  
                    )}
                })

                }

                 {bun && (
                    <>
                        <li className={`${stylesConstructor.list__element} pl-4 pr-4 mb-4`}>
                            <DragIcon type="primary" />
                            <BurgerElement  
                                type="bottom"
                                isLocked={true}
                                name={`${bun.name} (низ)`}
                                price={bun.price}
                                image={bun.image}
                            />
                        </li>  
                    </>    
                )}
            </ul>
            
            <div className={`${stylesConstructor.price} pt-10 pr-4`}>
                <div className={`${stylesConstructor.price__item} mr-10`}>
                    <p className="mr-2 text text_type_digits-medium">610</p>
                    <img src={subtract} alt="icon" className={stylesConstructor.image} />
                </div>
                <Button type="primary" size="large">Оформить заказ</Button>    
            </div>
        </section>
    )
}


import React from "react";
import feedIdStyle from "./Feed.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/action-types/wsActionTypes";




export default function Feed () {

    const ingredientsData = useSelector((store) => store.ingredient.ingredientsData);

    return (
        <>
            <div className={feedIdStyle.main}>
                <h2 className={`${feedIdStyle.number} text text_type_digits-default mb-10`}>#123456</h2>
                <p className="text text_type_main-medium mb-3"></p>
                <p className="text text_type_main-default mb-15">Выполнен</p>
                <p className="text text_type_main-medium mb-6">Состав:</p>
                <div className={`${feedIdStyle.container}`}>
                    <div className={feedIdStyle.content}>
                        <ul className={feedIdStyle.list}>
                            {ingredientsData.map((item) => {
                                return (
                                    <li className={feedIdStyle.list__element}
                                        key={item._id}
                                    >
                                    <div className={feedIdStyle.description}>
                                    <div className={feedIdStyle.image}>
                                        <img 
                                            src={ item.image } 
                                            alt={ item.name } 
                                            className={`${feedIdStyle.image__element}`} 
                                        />
                                    </div>
                                    <p className="text text_type_main-default pl-4 ">{ item.name }</p>
                                    </div>
                                    <div className={feedIdStyle.price}>
                                        <p className="text text_type_digits-default mr-2">{item.count}&nbsp;x&nbsp;{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                </li>
                                )
                            })} 
                        </ul>    
                    </div>
                </div>
                <div className={`${feedIdStyle.totalPrice} mt-10`}>
                    <p className="text text_type_main-default text_color_inactive">Вчера, 13:50 i-GMT+3</p>
                    <div className={feedIdStyle.price}>
                        <p className="text text_type_digits-default mr-2"></p>{" "}
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </>
    )
}

export function FeedPage () {
    return (
        <section className={feedIdStyle.page}>
            <Feed />
        </section>
    )
}

export function FeedForModal () {
    return (
        <section className={`${feedIdStyle.modal} pl-10 pr-10 pb-10`}>
            <Feed />
        </section>
    )
}

import React from "react";
import feedStyles from "./FeedElement.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


export default function FeedElement ({ item }) {

    //console.log(item.name);
    return (
        
        <li className={`${feedStyles.list__element} pt-6 pb-6 pl-6 pr-6`}>
            <div className={feedStyles.wrap}>
                <div className={`${feedStyles.info} mb-6`}>
                    <p className="text text_type_digits-default">#123456</p>
                    <p className="text text_type_main-small text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                </div>
                <p className="text text_type_main-medium mb-2">{item.name}</p>
                <p className="text text_type_main-small mb-6">Готовится</p>
                <div className={feedStyles.content}>
                    <div className={feedStyles.images}>
                        <div className={`${feedStyles.cover}`}>
                            <div className={feedStyles.cover__box}>
                                <p className={`${feedStyles.cover__text} text text_type_main-default`}>+3</p>
                            </div>
                            <div className={feedStyles.image__element}>
                                <img src={ item.image } alt={ item.name } className={`${feedStyles.image}`} />
                            </div>
                        </div>
                        <div className={feedStyles.image__element}>
                            <img src={ item.image } alt={ item.name } className={`${feedStyles.image}`} />
                        </div>
                        <div className={feedStyles.image__element}>
                            <img src={ item.image } alt={ item.name } className={`${feedStyles.image}`} />
                        </div>
                        <div className={feedStyles.image__element}>
                            <img src={ item.image } alt={ item.name } className={`${feedStyles.image}`} />
                        </div>
                        <div className={feedStyles.image__element}>
                            <img src={ item.image } alt={ item.name } className={`${feedStyles.image}`} />
                        </div>
                        <div className={feedStyles.image__element}>
                            <img src={ item.image } alt={ item.name } className={`${feedStyles.image}`} />
                        </div>  
                    </div>
                    <div className={feedStyles.price}>
                        <p className="text text_type_digits-default mr-2">1234</p>
                        <div className={feedStyles.price__icon}>
                            <CurrencyIcon />
                        </div>
                    </div>
                </div>
            </div>
        </li>
        
    )
}
import React from "react";
import orderInfoStyle from "./OrderInfo.module.css";


export default function OrderInfo () {
    return (
        <section className={orderInfoStyle.main}>
            <div className={orderInfoStyle.content}>
                <div className={`${orderInfoStyle.orders} mr-9`}>
                    <p className={`${orderInfoStyle.orders__title} text text_type_main-medium mb-6`}>Готовы:</p>
                    <ul className={orderInfoStyle.orders__list}>
                        <li className={orderInfoStyle.orders__item}>
                            <p className={`${orderInfoStyle.orders__text} ${orderInfoStyle.orders__text_done} text text text_type_digits-default mb-2`}>123456</p>
                        </li>
                        <li className={orderInfoStyle.orders__item}>
                            <p className={`${orderInfoStyle.orders__text} ${orderInfoStyle.orders__text_done} text text text_type_digits-default mb-2`}>123456</p>
                        </li>
                        <li className={orderInfoStyle.orders__item}>
                            <p className={`${orderInfoStyle.orders__text} ${orderInfoStyle.orders__text_done} text text text_type_digits-default mb-2`}>123456</p>
                        </li>
                        <li className={orderInfoStyle.orders__item}>
                            <p className={`${orderInfoStyle.orders__text} ${orderInfoStyle.orders__text_done} text text text_type_digits-default mb-2`}>123456</p>
                        </li>
                        <li className={orderInfoStyle.orders__item}>
                            <p className={`${orderInfoStyle.orders__text} ${orderInfoStyle.orders__text_done} text text text_type_digits-default mb-2`}>123456</p>
                        </li>
                        <li className={orderInfoStyle.orders__item}>
                            <p className={`${orderInfoStyle.orders__text} ${orderInfoStyle.orders__text_done} text text text_type_digits-default mb-2`}>123456</p>
                        </li>
                    </ul>
                </div>
                <div className={orderInfoStyle.orders}>
                    <p className={`${orderInfoStyle.orders__title} text text_type_main-medium mb-6`}>В работе:</p>
                    <ul className={orderInfoStyle.orders__list}>
                        <li className={orderInfoStyle.orders__item}>
                            <p className={`${orderInfoStyle.orders__text} text text text_type_digits-default mb-2`}>654321</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`${orderInfoStyle.sum} mt-15`}>
                <p className={`${orderInfoStyle.sum__text} text text_type_main-medium`}>Выполнено за все время:</p>
                <p className={orderInfoStyle.sum__count}>28&nbsp;752</p>
            </div>
            <div className={`${orderInfoStyle.sum} mt-15`}>
                <p className={`${orderInfoStyle.sum__text} text text_type_main-medium`}>Выполнено за сегодня:</p>
                <p className={orderInfoStyle.sum__count}>138</p>
            </div>
        </section>
    )
}
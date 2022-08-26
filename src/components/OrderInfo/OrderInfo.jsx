import React from "react";
import orderInfoStyle from "./OrderInfo.module.css";
import { useSelector } from "react-redux";

export default function OrderInfo () {

    const orderInfo = {
        data: null,
        total: 0,
        totalToday: 0,
        orderIsDone: [],
        orderInProgress: [],
    }

    const orderData = useSelector((store) => store.ws.messages);
   //console.log(orderData);


    if (orderData.length > 0) {
        const arr = orderData.length - 1;
        orderInfo.data = orderData[arr].orders;
        //console.log(orderInfo.data);
        orderInfo.total = orderData[arr].total;
        //console.log(orderInfo.total);
        orderInfo.totalToday = orderData[arr].totalToday;
        //console.log(orderInfo.totalToday);
        orderInfo.data.forEach((element) => {
            if (element.status === "done") {
                orderInfo.orderIsDone.push(element.number);
                //console.log(orderInfo.orderIsDone);
            } else {
                orderInfo.orderInProgress.push(element.number);
                console.log(orderInfo.orderInProgress);
            }
        });
    }

    return (
        <>
        <section className={orderInfoStyle.main}>
            <div className={orderInfoStyle.orderInfo}>
                <div className={`${orderInfoStyle.orders} mr-9`}>
                    <p className={`${orderInfoStyle.orders__title} text text_type_main-medium mb-6`}>Готовы:</p>
                    <div className={orderInfoStyle.container}>
                        <div className={orderInfoStyle.content}>
                            <ul className={orderInfoStyle.orders__list}>
                                {orderInfo.orderIsDone.map((item) => {
                                    return (
                                        <li className={orderInfoStyle.orders__item} key={item}>
                                            <p 
                                                className={`
                                                    ${orderInfoStyle.orders__text} 
                                                    ${orderInfoStyle.orders__text_done} 
                                                    text text text_type_digits-default
                                                `}
                                            >
                                                {item}
                                             </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={orderInfoStyle.orders}>
                    <p className={`${orderInfoStyle.orders__title} text text_type_main-medium mb-6`}>В работе:</p>
                    <div className={orderInfoStyle.container}>
                        <div className={orderInfoStyle.content}>
                            <ul className={orderInfoStyle.orders__list}>
                                {orderInfo.orderInProgress.map((item) => {
                                    return (
                                        <li className={orderInfoStyle.orders__item} key={item}>
                                            <p 
                                                className={`
                                                    ${orderInfoStyle.orders__text} 
                                                    text text text_type_digits-default
                                                `}
                                            >
                                                {item}
                                            </p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${orderInfoStyle.sum} mt-15`}>
                <p className={`${orderInfoStyle.sum__text} text text_type_main-medium`}>Выполнено за все время:</p>
                <p className={orderInfoStyle.sum__count}>{ orderInfo.total }</p>
            </div>
            <div className={`${orderInfoStyle.sum} mt-15`}>
                <p className={`${orderInfoStyle.sum__text} text text_type_main-medium`}>Выполнено за сегодня:</p>
                <p className={orderInfoStyle.sum__count}>{ orderInfo.totalToday }</p>
            </div>
        </section>
        </>
    );
}

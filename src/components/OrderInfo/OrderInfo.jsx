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
        textSize: "default",
    }

    const orderData = useSelector((store) => store.ws.messages);

    if (orderData.length > 0) {
        const arr = orderData.length - 1;
        orderInfo.data = orderData[arr].orders;
        orderInfo.total = orderData[arr].total;
        orderInfo.totalToday = orderData[arr].totalToday;
        orderInfo.data.forEach((element) => {
            if (element.status === "done") {
                orderInfo.orderIsDone.push(element.number);
            } else {
                orderInfo.orderInProgress.push(element.number);
            }
        });
    }

    if (orderInfo.orderIsDone.length < 30) {
        orderInfo.textSize = "default"
    } else {
        orderInfo.textSize = "small"
    }

    return (
        <>
        <section className={orderInfoStyle.main}>
            <div className={orderInfoStyle.orderInfo}>
                <div className={`${orderInfoStyle.orders} mr-9`}>
                    <p className="text text_type_main-medium mb-6">Готовы:</p>
                    <div className={orderInfoStyle.orders__box}>
                        <ul className={orderInfoStyle.orders__list}>
                            {orderInfo.orderIsDone.map((item) => {
                                return (
                                <li key={item} className={`${orderInfoStyle.orders__done} text text text_type_digits-${orderInfo.textSize}`}>
                                       { item } 
                                    </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className={orderInfoStyle.orders}>
                <p className="text text_type_main-medium mb-6">В работе:</p>
                    <div className={orderInfoStyle.orders__box}>
                        <ul className={orderInfoStyle.orders__list}>
                            {orderInfo.orderInProgress.map((item) => {
                                return (
                                    <li key={item} className={`text text text_type_digits-${orderInfo.textSize}`}>
                                       { item } 
                                    </li>
                                    );
                                })
                            }
                        </ul>
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

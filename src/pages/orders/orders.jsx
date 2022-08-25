import React from "react";
import FeedInfo from "../../components/FeedInfo/FeedInfo";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import orderStyles from "./orders.module.css";


export default function Orders () {
    return (
        <section className={orderStyles.page}>
            <div className={`mr-15`}>
                <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
                <div className={`${orderStyles.container}`}>
                    <div className={orderStyles.content}>
                        <FeedInfo/>
                    </div>
                </div>
            </div>
            <OrderInfo />


        </section>

    )
}
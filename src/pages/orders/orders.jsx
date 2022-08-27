import React, { useEffect } from "react";
import FeedInfo from "../../components/FeedInfo/FeedInfo";
import OrderInfo from "../../components/OrderInfo/OrderInfo";
import orderStyles from "./orders.module.css";
import { useDispatch } from "react-redux";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/action-types/wsActionTypes";


export default function Orders() {

    const dispatch = useDispatch();

    //Открытие и закрытие WS
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START, payload: "/all" });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED, payload: "" });
        };
    }, []);

    return (
        <section className={orderStyles.page}>
            <div className="mr-15">
                <h1 className="text text_type_main-large mt-10 mb-5">Лента заказов</h1>
                <div className={orderStyles.container}>
                    <div className={orderStyles.content}>
                        <FeedInfo/>
                    </div>
                </div>
            </div>
            <OrderInfo />
        </section>
    );
}

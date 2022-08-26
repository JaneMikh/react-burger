import React, { useEffect, useState } from "react";
import feedStyles from "./FeedInfo.module.css";
import FeedElement from "./FeedElement/FeedElement";
import { useSelector } from "react-redux";


export default function FeedInfo () {
    let data = null;
    const feedData = useSelector((store) => store.ws.messages);
    
    if (feedData.length > 0) {
        const arr = feedData.length - 1;
        data = feedData[arr].orders;
    }
    
    //Это все 50 заказов
    //console.log(data);
    //Это совсем вся инфа с суммарным количестов заказов и т.д.
    //console.log(feedData);
    
    return (
        <ul className={feedStyles.list}>
            {data!= null && data.map(item => (
                <FeedElement
                    key={item._id}
                    item={item}
                />
            ))}     
        </ul>
    )
}
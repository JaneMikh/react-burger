import React from "react";
import feedStyles from "./FeedInfo.module.css";
import FeedElement from "./FeedElement/FeedElement";
import { useSelector } from "react-redux";


export default function FeedInfo () {
    const feedData = useSelector((store) => store.ws.messages);
    let data = null;

    if (feedData.length > 0) {
        const arr = feedData.length - 1;
        data = feedData[arr].orders;
    }

    return (
        <ul className={feedStyles.list}>
            {data!== null && data.map(item => (
                <FeedElement
                    key={item._id}
                    item={item}
                />
            ))}     
        </ul>
    );
}

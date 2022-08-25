import React from "react";
import feedStyles from "./FeedInfo.module.css";
import FeedElement from "./FeedElement/FeedElement";
import { useSelector } from "react-redux";

export default function FeedInfo () {
    const data = useSelector((store) => store.ingredient.ingredientsData);
   // console.log(data);
    /*return (
        <section className={`${feedStyles.container} mt-10`}>
            <div className={feedStyles.content}>
                <ul className={feedStyles.list}>
                {data.map(item => (
                    <FeedElement
                        key={item._id}
                        item={item}
                    />
                ))}     
            </ul>
        </div>
        </section>*/
    return (
        <ul className={feedStyles.list}>
            {data.map(item => (
                <FeedElement
                    key={item._id}
                    item={item}
                />
            ))}     
        </ul>
    )
}
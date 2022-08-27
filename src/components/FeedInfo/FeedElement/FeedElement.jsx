import React from "react";
import feedStyles from "./FeedElement.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FeedImage from "./FeedImage/FeedImage";
import PropTypes from "prop-types";


export default function FeedElement ({ item, profile }) {
    const ingredientsData = useSelector((store) => store.ingredient.ingredientsData);
    const ingredientsIdArr = item.ingredients;
    const location = useLocation();
   
    const feedElementInfo = {
        ingredientsArr: [],
        id: item._id,
        date: item.createdAt,
        url: profile,
        day: "",
        price: 0,
        imageCount: 0,
    }
    
    const day = new Date();
    const today = day.getDate();
    
    const findIndexT = feedElementInfo.date.indexOf("T"); //10
    const findTime = feedElementInfo.date.slice(findIndexT + 1, findIndexT + 6);
    const findDay = feedElementInfo.date.slice(findIndexT - 2, findIndexT);
   
   
    if (feedElementInfo.url === true) {
        feedElementInfo.url = `/profile/order/${feedElementInfo.id}`
    } else { 
        feedElementInfo.url = `/feed/${feedElementInfo.id}`
    }
     
    today.toString() === findDay
        ? (feedElementInfo.day = "Сегодня")
        : (today - Number(findDay) === 1)
        ? (feedElementInfo.day = "Вчера")
        : (today - Number(findDay) === 2)
        ? (feedElementInfo.day = "2 дня назад")
        : (feedElementInfo.day = "Архивный заказ");

    let sum = 0;
    sum = ingredientsIdArr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, []);

    ingredientsData.map((element) => {
        const data = ingredientsIdArr.find((item) => element._id === item);
        if (data) {
            feedElementInfo.ingredientsArr.push(element);
        }
    });
    
    feedElementInfo.ingredientsArr.map((item) => {
        feedElementInfo.price += sum[item._id] * (item.type === 'bun' ? item.price * 2 : item.price);
    });

    return (
        <Link
            to={{
                pathname: feedElementInfo.url,
                state: { background: location },
            }}
            className={feedStyles.link}
            key={feedElementInfo.id}
        >
        <li className={`${feedStyles.list__element} pt-6 pb-6 pl-6 pr-6 mr-2`}>
            <div className={feedStyles.wrap}>
                <div className={`${feedStyles.info} mb-6`}>
                    <p className="text text_type_digits-default">#{ item.number }</p>
                    <p className="text text_type_main-small text_color_inactive">
                        {feedElementInfo.day}&nbsp;{findTime}&nbsp;i-GMT+3
                    </p>
                </div>
                <p className="text text_type_main-medium mb-6">{ item.name }</p>
                <div className={feedStyles.content}>
                    <div className={feedStyles.images}>
                    {feedElementInfo.ingredientsArr.reverse().map((item) => {
                        if (feedElementInfo.ingredientsArr.length <= 6) {
                            return (<FeedImage data={item} key={item._id} />
                            )} else {
                             return (
                                <FeedImage
                                    imageNumber={ feedElementInfo.imageCount += 1 }
                                    arrLength={ feedElementInfo.ingredientsArr.length }
                                    data={ item }
                                    key={ item._id }
                                />
                            )}
                        })}
                    </div>
                    <div className={feedStyles.price}>
                        <p className="text text_type_digits-default mr-2">{ feedElementInfo.price }</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </li>
    </Link> 
    );
}

FeedElement.propTypes = {
    item: PropTypes.object.isRequired,
    profile: PropTypes.bool,
}
import React, { useEffect } from "react";
import feedIdStyle from "./FeedForModal.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/action-types/wsActionTypes";


export default function FeedForModal () {

    const ingredientsData = useSelector((store) => store.ingredient.ingredientsData);
    const orderData = useSelector((store) => store.ws.messages);

    const { id } = useParams();

    const feedInfo = {
        data: null,
        orderArr: [], //тут хранится один заказ
        status: null,
        date: "",
        day: "",
        price: 0,
        orderNumber: 0,
        burgerName: "",
        ingredientsArr: [],
        ingrArray: [], //тутхранятся карточки с burgerdata после сравнения их id с данными заказа
        statusData: {
            color: "",
            text: "",
        }
    }

    //Получаем массив данных с заказами с сервера и передаем их в поля объекта feedInfo
    if (orderData.length > 0) {
        const arr = orderData.length - 1;
        feedInfo.data = orderData[arr].orders;
        //console.log(feedInfo.data);


        //Найдем карточку с заказом и вытащим из него дату и статус заказа
        feedInfo.orderArr = feedInfo.data.find((element) => {
           return element._id === id
        });
        
        feedInfo.burgerName = feedInfo.orderArr.name;
        feedInfo.status = feedInfo.orderArr.status;
        feedInfo.date = feedInfo.orderArr.createdAt;
        feedInfo.orderNumber = feedInfo.orderArr.number;
        feedInfo.ingredientsArr = feedInfo.orderArr.ingredients;
        // console.log(feedInfo.ingredientsArr); //Приходит массив из id трех ингредиентов
    }

   if (feedInfo.status === "done") {
        feedInfo.statusData.text = "Выполнен";
        feedInfo.statusData.color = "#00CCCC";
    } else if (feedInfo.status === "pending") {
        feedInfo.statusData.text = "Отменен";
        feedInfo.statusData.color = "#B22222";
    } else {
        feedInfo.statusData.text = "Готовится";
        feedInfo.statusData.color = "#F2F2F3";
    }

    //Информация о дате. Выбрать нужные элементы из строки "2022-08-25T17:15:22.906Z"
    const day = new Date();
    const today = day.getDate();
    
    const findIndexT = feedInfo.date.indexOf("T"); //10
    const findTime = feedInfo.date.slice(findIndexT + 1, findIndexT + 6);
    const findDay = feedInfo.date.slice(findIndexT - 2, findIndexT);

    today.toString() === findDay
        ? (feedInfo.day = "Сегодня")
        : (today - Number(findDay) === 1)
        ? (feedInfo.day = "Вчера")
        : (today - Number(findDay) === 2)
        ? (feedInfo.day = "2 дня назад")
        : (feedInfo.day = "Архивный заказ");

    const sumOfIngredients = feedInfo.ingredientsArr.reduce(function (sum, data) {
        sum[data] = (sum[data] || 0) + 1;
            return sum;
    }, []);
  
    ingredientsData.map((element) => {
        //тут сравнение между id элемента с заказа с id элемента ингредиента из burgerData
        //чтобы знать, что отрисовывать
        const data = feedInfo.ingredientsArr.find(item => element._id === item);
       // console.log(data);

        //Если все ОК, то помесить этот элемент в отдельный массив
       if (data) {
            feedInfo.ingrArray.push(element);
        }
       //console.log(feedInfo.ingrArray);
    });

    
    feedInfo.ingrArray.map((item) => {
        feedInfo.price += sumOfIngredients[item._id] * item.price;
    });

    return (
        <>
            <div className={feedIdStyle.main}>
                <h2 className={`${feedIdStyle.number} text text_type_digits-default mb-10`}>#{feedInfo.orderNumber}</h2>
                <p className="text text_type_main-medium mb-3">{ feedInfo.burgerName }</p>
                <p className="text text_type_main-default mb-15" style={{color: feedInfo.statusData.color}}>{feedInfo.statusData.text}</p>
                <p className="text text_type_main-medium mb-6">Состав:</p>
                <div className={`${feedIdStyle.container}`}>
                    <div className={feedIdStyle.content}>
                        <ul className={feedIdStyle.list}>
                            {feedInfo.ingrArray.map((item) => {
                                return (
                                    <li className={feedIdStyle.list__element}
                                        key={item._id}
                                    >
                                    <div className={feedIdStyle.description}>
                                    <div className={feedIdStyle.image}>
                                        <img 
                                            src={ item.image } 
                                            alt={ item.name } 
                                            className={`${feedIdStyle.image__element}`} 
                                        />
                                    </div>
                                    <p className="text text_type_main-default pl-4 ">{ item.name }</p>
                                    </div>
                                    <div className={feedIdStyle.price}>
                                        <p className="text text_type_digits-default mr-2">{sumOfIngredients[item._id]}&nbsp;x&nbsp;{item.price}</p>
                                        <CurrencyIcon type="primary" />
                                    </div>
                                </li>
                                )
                            })} 
                        </ul>    
                    </div>
                </div>
                <div className={`${feedIdStyle.totalPrice} mt-10`}>
                    <p className="text text_type_main-default text_color_inactive">{feedInfo.day}&nbsp;{findTime}&nbsp;i-GMT+3</p>
                    <div className={feedIdStyle.price}>
                        <p className="text text_type_digits-default mr-2">{ feedInfo.price }</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </>
    );
}

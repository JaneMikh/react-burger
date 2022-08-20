import React from 'react';
import { ListIcon, ProfileIcon, BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesHeader from './AppHeader.module.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';


export default function AppHeader() {
    return (
        <header className={stylesHeader.header}>
            <div className={stylesHeader.content}>
                <nav className={stylesHeader.navigation}>
                    <ul className={stylesHeader.list}>
                        <li className={`${stylesHeader.list__element} pl-5 pr-5 pb-4 pt-4 mr-2`}>
                            <Link to="/" exact={true} className={stylesHeader.link}>
                                <BurgerIcon type="primary"/>
                                <p className={'text text_type_main-default ml-2'}>Конструктор</p>
                            </Link>
                        </li>
                        <li className={`${stylesHeader.list__element} pl-5 pr-5 pb-4 pt-4`}>
                            <Link to="/feeds" exact={true} className={stylesHeader.link} href="#">
                                <ListIcon type="secondary" />
                                <p className={'text text_type_main-default text_color_inactive ml-2'}>Лента заказов</p> 
                            </Link>
                        </li>
                    </ul> 
                </nav>
                <img src={logo} alt="logo" className={stylesHeader.logo} />
                <div className={`${stylesHeader.list_element} text text_type_main-default pl-5 pr-5 pb-4 pt-4`}>
                    <Link to="/profile" className={stylesHeader.link}>
                        <ProfileIcon type="secondary" />
                        <p className={'text text_type_main-default text_color_inactive ml-2'}>Личный кабинет</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}
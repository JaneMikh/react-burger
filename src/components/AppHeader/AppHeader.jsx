import React from 'react';
import { ListIcon, ProfileIcon, BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesHeader from './AppHeader.module.css';
import logo from '../../images/logo.svg';

export default function AppHeader() {
    return (
        <header className={stylesHeader.header}>
            <div className={stylesHeader.content}>
                <nav className={stylesHeader.navigation}>
                    <ul className={stylesHeader.list}>
                        <li className={`${stylesHeader.list__element} pl-5 pr-5 pb-4 pt-4 mr-2`}>
                            <a className={stylesHeader.link} href="#">
                                <BurgerIcon type="primary"/>
                                <p className={'text text_type_main-default ml-2'}>Конструктор</p>
                            </a>
                        </li>
                        <li className={`${stylesHeader.list__element} pl-5 pr-5 pb-4 pt-4`}>
                            <a className={stylesHeader.link} href="#">
                                <ListIcon type="secondary" />
                                <p className={'text text_type_main-default text_color_inactive ml-2'}>Лента заказов</p> 
                            </a>
                        </li>
                    </ul> 
                </nav>
                <img src={logo} alt="logo" className={stylesHeader.logo} />
                <div className={`${stylesHeader.list_element} text text_type_main-default pl-5 pr-5 pb-4 pt-4`}>
                    <a className={stylesHeader.link} href="#">
                        <ProfileIcon type="secondary" />
                        <p className={'text text_type_main-default text_color_inactive ml-2'}>Личный кабинет</p>
                    </a>
                </div>
            </div>
        </header>
    )
}
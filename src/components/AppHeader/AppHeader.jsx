import React from "react";
import { ListIcon, ProfileIcon, BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import stylesHeader from './AppHeader.module.css';
import logo from '../../images/logo.svg';
import { NavLink, useLocation } from 'react-router-dom';

export default function AppHeader() {

    const { pathname } = useLocation();

    return (
        <header className={stylesHeader.header}>
            <div className={stylesHeader.content}>
                <nav className={stylesHeader.navigation}>
                    <ul className={stylesHeader.list}>
                        <li className={`${stylesHeader.list__element} pl-5 pr-5 pb-4 pt-4 mr-2`}>
                            <NavLink 
                                to="/" 
                                className={stylesHeader.link}
                                activeClassName={stylesHeader.link_active}
                            >
                                   <BurgerIcon type={pathname === "/" ? 'primary' : 'secondary'}/>
                                   <p className={pathname === "/" ? "text text_type_main-default ml-2" : "text text_type_main-default text_color_inactive ml-2"}>Конструктор</p>
                            </NavLink>
                        </li>
                        <li className={`${stylesHeader.list__element} pl-5 pr-5 pb-4 pt-4`}>
                            <NavLink 
                                to="/feed"
                                className={stylesHeader.link}
                                activeClassName={stylesHeader.link_active}
                             >
                                <ListIcon type={pathname === "/feeds" ? "primary" : "secondary"} />
                                <p className={pathname === "/feeds" ? "text text_type_main-default ml-2" : "text text_type_main-default text_color_inactive ml-2"}>Лента заказов</p> 
                            </NavLink>
                        </li>
                    </ul> 
                </nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" className={stylesHeader.logo} />
                </NavLink>
                <div className={`${stylesHeader.list_element} text text_type_main-default pl-5 pr-5 pb-4 pt-4`}>
                    <NavLink 
                        to="/profile" 
                        className={stylesHeader.link}
                    >
                        <ProfileIcon type={pathname === "/profile" ? "primary" : "secondary"}  />
                        <p className={pathname === "/profile" ? "text text_type_main-default ml-2" : "text text_type_main-default text_color_inactive ml-2"}>Личный кабинет</p>
                    </NavLink>
                </div>
            </div>
        </header>
    )

}


/*//Состояние переключения
    const [navState, setNavState] = useState({
        constructor: true,
        feeds: false,
        user: false,
    });

   function onClickButton (item) {
        item === "constructor"
        ? setNavState({ constructor: true, feeds: false, user: false })
        : item === "feeds"
        ? setNavState({ constructor: false, feeds: true, user: false })
        : setNavState({ constructor: false, feeds: false, user: true })
    }   
    */
{/*return (
        <header className={stylesHeader.header}>
            <div className={stylesHeader.content}>
                <nav className={stylesHeader.navigation}>
                    <ul className={stylesHeader.list}>
                        <li className={`${stylesHeader.list__element} pl-5 pr-5 pb-4 pt-4 mr-2`}>
                            <NavLink 
                                to="/" 
                                className={stylesHeader.link}
                                activeClassName={stylesHeader.link_active}
                                //onClick={() => onClickButton("constructor")}
                            >
                                   <BurgerIcon type={navState.constructor ? "primary" : "secondary"}/>
                                    <p className={navState.constructor ? "text text_type_main-default ml-2" : "text text_type_main-default text_color_inactive ml-2"}>Конструктор</p>
                            </NavLink>
                        </li>
                        <li className={`${stylesHeader.list__element} pl-5 pr-5 pb-4 pt-4`}>
                            <NavLink to="/feeds"
                                className={stylesHeader.link}
                                onClick={() => onClickButton("feeds")}
                             >
                                <ListIcon type={navState.feeds ? "primary" : "secondary"} />
                                <p className={navState.feeds ? "text text_type_main-default ml-2" : "text text_type_main-default text_color_inactive ml-2"}>Лента заказов</p> 
                            </NavLink>
                        </li>
                    </ul> 
                </nav>
                <NavLink to="/">
                    <img src={logo} alt="logo" className={stylesHeader.logo} />
                </NavLink>
                <div className={`${stylesHeader.list_element} text text_type_main-default pl-5 pr-5 pb-4 pt-4`}>
                    <NavLink 
                    to="/profile" 
                    className={stylesHeader.link}
                    onClick={() => onClickButton("user")}
                    >
                        <ProfileIcon type={navState.user ? "primary" : "secondary"}  />
                        <p className={navState.user ? "text text_type_main-default ml-2" : "text text_type_main-default text_color_inactive ml-2"}>Личный кабинет</p>
                    </NavLink>
                </div>
            </div>
        </header>
    )*/}
import React, { useState } from "react";
import profStyles from "./ProfileMenu.module.css";
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useAuth } from "../../services/auth";

export default function ProfileMenu () {
    //const { pathname } = useLocation();
    const auth = useAuth();
    const history = useHistory();

    const goLogin = () => {
        history.push('/login');
    }
  
    const handleLogout = (evt) => {
        evt.preventDefault();
        auth.signOutUser(goLogin);
    }

    const [menuState, setMenuState] = useState({ profile: true, orderHistory: false });
    const handleElement = (element) => {
        if (element === "profile") {
            setMenuState({ profile: false, orderHistory: true });
          history.push("/profile");
        } else {
            setMenuState({ profile: true, orderHistory: false });
          history.push("/profile/orders");
        }
    }
 
    return (
        <nav className={`${profStyles.nav} pr-15 mt-30`}>
            <ul className={profStyles.nav__menu}>
                <li className={profStyles.nav__item}>
                    <NavLink 
                        onClick={() => handleElement("profile")}
                        activeClassName={"text_color_primary"}
                        className={/*pathname === "/profile" */ menuState.profile
                        ? `${profStyles.nav__link} text text_type_main-medium` 
                        : `${profStyles.nav__link} text text_type_main-medium text_color_inactive`}
                        to="/profile"
                    >
                        Профиль
                    </NavLink>
                </li>
                <li className={profStyles.nav__item}>
                    <NavLink 
                        onClick={() => handleElement("orderhistory")}
                        activeClassName={"text_color_primary"}
                        className={/*pathname === "/profile/orders" */ menuState.orderHistory
                        ? `${profStyles.nav__link} text text_type_main-medium` 
                        :`${profStyles.nav__link} text text_type_main-medium text_color_inactive`}
                        to="/profile/orders"
                    >
                        История заказов
                    </NavLink>
                </li>
                <li className={profStyles.nav__item}>
                    <NavLink 
                        onClick={handleLogout}
                        className={`${profStyles.nav__link} text text_type_main-medium text_color_inactive`}
                        to="/logout"
                    >
                        Выход
                    </NavLink>
                </li>
            </ul>
            {/*pathname === "/profile" */ menuState.profile && (
                <p className="text text_type_main-default text_color_inactive pt-20">
                    В этом разделе вы можете изменить&nbsp;свои персональные данные
                </p>
            )}
            {/*pathname === "/profile/orders"*/ menuState.orderHistory && (
                <p className="text text_type_main-default text_color_inactive pt-20">
                    В этом разделе вы можете просмотреть свою историю заказов
                </p>
            )}
        </nav>
    )
}
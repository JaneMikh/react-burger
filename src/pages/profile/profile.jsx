import React, { useEffect, useState, useRef, useCallback } from "react";
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import profStyles from './profile.module.css';
import { useAuth } from '../../services/auth';
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from '../../services/actions/route';
import { getUserData } from '../../services/actions/route';
import { NavLink, useLocation, useHistory } from 'react-router-dom';


export default function Profile () {
    const { pathname } = useLocation();
    const history = useHistory();
    let auth = useAuth();
    const dispatch = useDispatch();
    const routeState = useSelector((store) => store.route);
    const userProfileData = routeState.authProfile;

    const nameRef = useRef(null);
    const loginRef = useRef(null);
    
    const onIconClickName = () => {
        setTimeout(() => nameRef.current.focus(), 0);
    };
    const onIconClickEmail = () => {
        setTimeout(() => loginRef.current.focus(), 0);
    };

    //Name
    const [valueName, setValueName] = useState("");
    const onChangeName = (evt) => { setValueName(evt.target.value) }
    //Email
    const [valueEmail, setValueEmail] = useState("");
    const onChangeEmail = (evt) => { setValueEmail(evt.target.value) };
    //Password
    const [valuePassword, setValuePassword] = useState("");
    const onChangePassword = (evt) => { setValuePassword(evt.target.value) };

    useEffect(() => {
        if (!useAuth) {
            document.title = "react burger";  
            dispatch(getUserData(auth.user));
        }
    }, [dispatch, useAuth]);
    
    useEffect(() => {
        setValueName(userProfileData.name);
        setValueEmail(userProfileData.email);
        setValuePassword(userProfileData.password);
    }, [userProfileData]);

   /* const handleLogout = useCallback((evt) => {
        evt.preventDefault();
        auth.signOutUser(localStorage.getItem("refreshToken"));
    }, [auth]);
   */
    
    const goLogin = () => {
      history.push('/login');
    }

    const handleLogout = (evt) => {
        evt.preventDefault();
        auth.signOutUser(goLogin);
    }

    const saveProfileData = (evt) => {
        evt.preventDefault();
        dispatch(updateUserProfile(valueEmail, valuePassword, valueName));
    }

    const cancelChangesHandler = () => {
        setValueName(userProfileData.name);
        setValueEmail(userProfileData.email);
        setValuePassword(userProfileData.password);
    }

    return (
        <section className={profStyles.page}>
            <div className={profStyles.main}>
                <nav className={profStyles.nav}>
                    <ul className={profStyles.nav__menu}>
                        <li className={profStyles.nav__item}>
                            <NavLink 
                                activeClassName={"text_color_primary"}
                                className={pathname === "/profile" 
                                ? `${profStyles.nav__link} text text_type_main-medium` 
                                : `${profStyles.nav__link} text text_type_main-medium text_color_inactive`}
                                to="/profile"
                            >
                                Профиль
                            </NavLink>
                        </li>
                        <li className={profStyles.nav__item}>
                            <NavLink 
                                activeClassName={"text_color_primary"}
                                className={pathname === "/profile/orders" 
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
                    {pathname === "/profile" && (
                   <p className="text text_type_main-default text_color_inactive pt-20">
                        В этом разделе вы можете изменить&nbsp;свои персональные данные
                    </p>
                    )}
                </nav>
                <form className={`${profStyles.content} pb-20`}>
                    <Input
                        onChange={ onChangeName }
                        value={valueName ? valueName : ""}
                        name={"имя"}
                        type={"text"}
                        placeholder={"Имя"}
                        icon={"EditIcon"}
                        ref={nameRef}
                        onIconClick={onIconClickName}
                    />
                    <Input
                        onChange={ onChangeEmail }
                        value={valueEmail ? valueEmail : ""}
                        name={"email"}
                        type={"email"}
                        placeholder={"Логин"}
                        icon={"EditIcon"}
                        ref={loginRef}
                        onIconClick={onIconClickEmail}
                    />
                    <PasswordInput
                        name={"password"}
                        value={valuePassword ? valuePassword : ""}
                        onChange={ onChangePassword }
                    />
                </form>
            </div>
            <div className={profStyles.button}>
                <div className={profStyles.button__element}>
                    <Button onClick={ saveProfileData } type="primary" size="medium">Сохранить</Button>
                    <Button onClick ={ cancelChangesHandler } type="primary" size="medium">Отмена</Button>
                </div>
            </div>
        </section>
    )
}
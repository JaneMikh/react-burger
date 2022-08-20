import React, { useEffect, useState, useCallback } from "react";
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import profStyles from './profile.module.css';
import { useAuth } from '../../services/auth';
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from '../../services/actions/route';
import { getUserData } from '../../services/actions/route';

export default function Profile () {
    //Name
    const [valueName, setValueName] = useState("");
    const onChangeName = (evt) => { setValueName(evt.target.value) }
    //Email
    const [valueEmail, setValueEmail] = useState("");
    const onChangeEmail = (evt) => { setValueEmail(evt.target.value) };
    //Password
    const [valuePassword, setValuePassword] = useState("");
    const onChangePassword = (evt) => { setValuePassword(evt.target.value) };

    const auth = useAuth();
    const dispatch = useDispatch();
    const state = useSelector((store) => store);
    const userProfileData = state.route.authProfile;
   
    useEffect(() => {
        dispatch(getUserData(userProfileData));
    }, [dispatch]);
    
    useEffect(() => {
        setValueName(userProfileData.name);
        setValueEmail(userProfileData.email);
        setValuePassword(userProfileData.password);
        //console.log(userProfileData);
    }, [userProfileData]);


    const handleLogout = useCallback((evt) => {
        evt.preventDefault();
        auth.signOutUser(localStorage.getItem("refreshToken"));
    }, [auth]
    );
   
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
                        <li className={`${profStyles.nav__item} text text_type_main-medium`}>Профиль</li>
                        <li className={`${profStyles.nav__item} text text_type_main-medium text_color_inactive`}>История заказов</li>
                        <li onClick={ handleLogout } className={`${profStyles.nav__item} text text_type_main-medium text_color_inactive`}>Выход</li>
                    </ul>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        В этом разделе вы можете изменить&nbsp;свои персональные данные
                    </p>
                </nav>
                <form className={`${profStyles.content} pb-20`}>
                    <Input
                        onChange={ onChangeName }
                        value={valueName}
                        name={"имя"}
                        type={"text"}
                        placeholder={"Имя"}
                        icon={"EditIcon"}
                    />
                    <Input
                        onChange={ onChangeEmail }
                        value={valueEmail}
                        name={"email"}
                        type={"email"}
                        placeholder={"Логин"}
                        icon={"EditIcon"}
                    />
                    <PasswordInput
                        name={"password"}
                        value={valuePassword}
                        onChange={ onChangePassword }
                    />
                </form>
            </div>
            <div className={profStyles.button}>
                <div className={`${profStyles.button__element} pt-20`}>
                    <Button onClick={ saveProfileData } type="primary" size="medium">Сохранить</Button>
                    <Button onClick ={ cancelChangesHandler } type="primary" size="medium">Отмена</Button>
                </div>
            </div>
        </section>
    )
}
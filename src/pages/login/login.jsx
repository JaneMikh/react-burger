import React, { useCallback, useState } from 'react';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from '../page.module.css';
import { useAuth } from '../../services/auth';
import { Link, Redirect, useLocation } from "react-router-dom";

export default function Login () {
   
    const auth = useAuth();
    const location = useLocation();

    const [valueEmail, setValueEmail] = useState("");
    const onChangeEmail = (evt) => { setValueEmail (evt.target.value) };

    const [valuePassword, setValuePassword] = useState("");
    const onChangePassword = (evt) => {
        setValuePassword(evt.target.value)}
    
    const handleLoginSubmit = useCallback((evt) => {
        evt.preventDefault();
        auth.signIn(valueEmail, valuePassword);
        
        }, [auth, valuePassword, valueEmail]
    );
      
    if (auth.user.name) {
        return <Redirect to={location?.state?.from || "/"}/>;
    }

    return (
        <section className={mainStyles.page}>
            <form onSubmit={ handleLoginSubmit } className={`${mainStyles.content} pb-20`}>
                <h2 className="text text_type_main-medium">Вход</h2>
                <EmailInput
                    name={"email"}
                    value={valueEmail}
                    onChange={onChangeEmail}
                />
                <PasswordInput
                    name={"password"}
                    value={valuePassword}
                    onChange={onChangePassword}
                />
                <Button type="primary" size="medium">
                    Войти
                </Button>
            </form>
            <div className={`${mainStyles.links} pb-4`}>
                <p className="text text_type_main-default text_color_inactive">
                    Вы - новый пользователь?&nbsp;
                </p>
                <Link to="/register" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Зарегистрироваться</Link>
            </div>
            <div className={mainStyles.links}>
                <p className="text text_type_main-default text_color_inactive">
                    Забыли пароль?&nbsp;
                </p>
                <Link to="/forgot-password" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Восстановить пароль</Link>
            </div>  
        </section>
    );
}
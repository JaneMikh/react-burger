import React, { useState } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from '../page.module.css';
import { forgotPassword } from '../../services/actions/route';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";


export default function ForgotPassword () {
   
    const dispatch = useDispatch();
    const routeState = useSelector((store) => store.route);
    const [valueEmail, setValueEmail] = useState("");
    
    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        setValueEmail(valueEmail);
        dispatch(forgotPassword(valueEmail));
    }

    if (routeState.loginSuccess) {
        return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
        );
    }

    if (routeState.forgotPasswordSuccess) {
        return (
            <Redirect
              to={{
                pathname: "/reset-password",
              }}
            />
        );
    }

    return (
        <section className={mainStyles.page}>
            <form onSubmit={ handleFormSubmit } className={`${mainStyles.content} pb-20`}>
                <h2 className="text text_type_main-medium">Восстановление пароля</h2>
                <Input
                    type="email"
                    placeholder="Укажите e-mail"
                    value={valueEmail}
                    onChange={(e) => setValueEmail(e.target.value)}
                />
                <Button type="primary" size="medium">
                    Восстановить
                </Button>
            </form>
            <div className={`${mainStyles.links} pb-4`}>
                <p className="text text_type_main-default text_color_inactive">
                    Вспомнили пароль?&nbsp;
                </p>
                <Link to="/login" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Войти</Link>
            </div>
        </section>
    );
}



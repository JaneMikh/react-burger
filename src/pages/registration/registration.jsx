import React, { useState } from 'react';
import { EmailInput, Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from './registration.module.css';
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from '../../services/actions/route';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Registration () {
    const dispatch = useDispatch();
    const routeState = useSelector((store) => store.route);
    //Name
    const [valueName, setValueName] = useState("");
    const onChangeName = (evt) => { setValueName(evt.target.value) };
    //Email
    const [valueEmail, setValueEmail] = useState("");
    const onChangeEmail = (evt) => { setValueEmail(evt.target.value) };
    //Password
    const [valuePassword, setValuePassword] = useState("");
    const onChangePassword = (evt) => { setValuePassword(evt.target.value) };

    const handleRegSubmit = (evt) => {
        evt.preventDefault();
        dispatch(registerAction(valueEmail, valuePassword, valueName));
    }
   
    if (routeState.registrationSuccess) {
        return (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
        );
    }

    return (
        <section className={mainStyles.page}>
            <form onSubmit={ handleRegSubmit } className={`${mainStyles.content} pb-20`}>
                <h2 className="text text_type_main-medium">Регистрация</h2>
                <Input
                    value={valueName}
                    type={"text"}
                    placeholder={"Имя"}
                    onChange={onChangeName}
                />
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
                    Зарегистрироваться
                </Button>
            </form>
            <div className={mainStyles.links}>
                    <p className="text text_type_main-default text_color_inactive">
                    Уже зарегистрированы?&nbsp;
                    </p>
                    <Link 
                        to="/login"
                        className={`${mainStyles.link} text text_type_main-default text_color_accent`}
                    >
                        Войти
                    </Link>
            </div>    
        </section>
    )
}
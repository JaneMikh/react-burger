import React from 'react';
import { EmailInput, Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from './registration.module.css';
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from '../../services/actions/route';
import { Link } from "react-router-dom";


export default function Registration () {
    
    const dispatch = useDispatch();

    const [valueName, setValueName] = React.useState("");
    const [valueEmail, setValueEmail] = React.useState("");
    const onChangeEmail = e => { setValueEmail(e.target.value) };

    const [valuePassword, setValuePassword] = React.useState("")
    const onChangePassword = e => {
        setValuePassword(e.target.value)};

    const handleRegSubmit = (evt) => {
        evt.preventDefault();
        dispatch(registerAction(valueEmail, valuePassword, valueName))
    };

   
    return (
        <section className={mainStyles.page}>
            <form onSubmit={ handleRegSubmit } className={`${mainStyles.content} pb-20`}>
                <h2 className="text text_type_main-medium">Регистрация</h2>
                <Input
                    onChange={e => setValueName(e.target.value)}
                    value={valueName}
                    type={"text"}
                    placeholder={"Имя"}
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
                    <Link to="/login" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Войти</Link>
            </div>    
        </section>
    )
}
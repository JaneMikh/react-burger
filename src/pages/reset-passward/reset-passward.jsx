import React from "react";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from '../registration/registration.module.css';
import { resetPassword } from '../../services/actions/route';
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function ResetPassword () {
    const dispatch = useDispatch();

    const [valuePassword, setValuePassword] = React.useState("")
    const onChangePassword = e => {
        setValuePassword(e.target.value)};

    const [valueToken, setValueToken] = React.useState("");   

    const handleTokenSubmit = (evt) => {
        evt.preventDefault();
        setValueToken(valueToken);
        dispatch(resetPassword(valueToken, valuePassword));
    }

    return (
        <section className={mainStyles.page}>
            <form onSubmit={ handleTokenSubmit } className={`${mainStyles.content} pb-20`}>
                <h2 className="text text_type_main-medium">Восстановление пароля</h2>
                <PasswordInput
                    name={"password"}
                    value={valuePassword}
                    onChange={onChangePassword}
                />
                <Input
                    value={valueToken}
                    onChange={(e) => setValueToken(e.target.value)}
                    placeholder="Введите код из письма"
                />
                <Button type="primary" size="medium">
                    Сохранить
                </Button>
            </form>
            <div className={`${mainStyles.links} pb-4`}>
                <p className="text text_type_main-default text_color_inactive">
                    Вспомнили пароль?&nbsp;
                </p>
                <Link to="/login" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Войти</Link>
            </div>

        </section>

    )
}
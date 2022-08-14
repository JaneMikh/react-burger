import React from "react";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from '../registration/registration.module.css';

export default function ResetPassward () {
    const [valuePassward, setValuePassward] = React.useState("")
    const onChangePassward = e => {
        setValuePassward(e.target.value)};

    const [valueToken, setValueToken] = React.useState("");   


    return (
        <section className={mainStyles.page}>
            <form className={`${mainStyles.content} pb-20`}>
                <h2 className="text text_type_main-medium">Восстановление пароля</h2>
                <PasswordInput
                    name={"password"}
                    value={valuePassward}
                    onChange={onChangePassward}
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
                <a href="" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Войти</a> {/*change into Link component <Link to="/login"*/}
            </div>

        </section>

    )
}
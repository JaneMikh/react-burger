import React from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from '../registration/registration.module.css';



export default function ForgotPassword () {
    const [valueEmail, setValueEmail] = React.useState("");
    
    return (
        <section className={mainStyles.page}>
            <form className={`${mainStyles.content} pb-20`}>
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
                <a href="" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Войти</a> {/*change into Link component <Link to="/login"*/}
            </div>
        </section>

    )
}



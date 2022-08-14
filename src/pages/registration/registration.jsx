import React from 'react';
import { EmailInput, Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from './registration.module.css';

export default function Registration () {
    
    const [valueName, setValueName] = React.useState("");
    const [valueEmail, setValueEmail] = React.useState("");
    const onChangeEmail = e => { setValueEmail (e.target.value) };

    const [valuePassward, setValuePassward] = React.useState("")
    const onChangePassward = e => {
        setValuePassward(e.target.value)};

    return (
        <section className={mainStyles.page}>
            <form className={`${mainStyles.content} pb-20`}>
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
                    value={valuePassward}
                    onChange={onChangePassward}
                />
                <Button type="primary" size="medium">
                    Зарегистрироваться
                </Button>
            </form>
            <div className={mainStyles.links}>
                    <p className="text text_type_main-default text_color_inactive">
                    Уже зарегистрированы?&nbsp;
                    </p>
                    <a href="" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Войти</a> {/*change into Link component <Link to="/login">*/}
            </div>    
        </section>
    )
}
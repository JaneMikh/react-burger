import React from "react";
import { Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import profStyles from './profile.module.css';

export default function Profile () {

    const [valueName, setValueName] = React.useState("");
    const [valueEmail, setValueEmail] = React.useState("");
    const onChangeEmail = e => { setValueEmail (e.target.value) };

    const [valuePassward, setValuePassward] = React.useState("")
    const onChangePassward = e => {
        setValuePassward(e.target.value)};

    return (
        <section className={profStyles.page}>
            <div className={profStyles.main}>
                <nav className={profStyles.nav}>
                    <ul className={profStyles.nav__menu}>
                        <li className={`${profStyles.nav__item} text text_type_main-medium`}>Профиль</li>
                        <li className={`${profStyles.nav__item} text text_type_main-medium text_color_inactive`}>История заказов</li>
                        <li className={`${profStyles.nav__item} text text_type_main-medium text_color_inactive`}>Выход</li>
                    </ul>
                    <p className="text text_type_main-default text_color_inactive pt-20">
                        В этом разделе вы можете изменить&nbsp;свои персональные данные
                    </p>
                </nav>
                <form className={`${profStyles.content} pb-20`}>
                    <Input
                        onChange={e => setValueName(e.target.value)}
                        value={valueName}
                        name={"email"}
                        type={"text"}
                        placeholder={"Имя"}
                        icon={"EditIcon"}
                    />
                    <Input
                        onChange={onChangeEmail}
                        value={valueEmail}
                        name={"email"}
                        type={"email"}
                        placeholder={"Логин"}
                        icon={"EditIcon"}
                    />
                    <PasswordInput
                        name={"password"}
                        value={valuePassward}
                        onChange={onChangePassward}
                    />
                </form>
            </div>
        </section>
    )

}
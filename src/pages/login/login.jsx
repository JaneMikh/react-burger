import React, { useCallback } from 'react';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from '../registration/registration.module.css';
import { useAuth } from '../../services/auth';

export default function Login () {
   
    const auth = useAuth();
    const [valueEmail, setValueEmail] = React.useState("");
    const onChangeEmail = (evt) => { setValueEmail (evt.target.value) };

    const [valuePassword, setValuePassword] = React.useState("")
    const onChangePassword = (evt) => {
        setValuePassword(evt.target.value)}
    
    const handleLoginSubmit = useCallback((evt) => {
        evt.preventDefault();
        auth.signIn(valueEmail, valuePassword);
        
        }, [auth, valuePassword, valueEmail]
    );
      
        //у основной страницы padding-top: 362px; нужно поменять стили на уникальный
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
                <a href="" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Зарегистрироваться</a> {/*change into Link component <Link to="/register"*/}
            </div>
            <div className={mainStyles.links}>
                <p className="text text_type_main-default text_color_inactive">
                    Забыли пароль?&nbsp;
                </p>
                <a href="" className={`${mainStyles.link} text text_type_main-default text_color_accent`}>Восстановить пароль</a> {/*change into Link component <Link to="/forgot-password"*/}
            </div>  
        </section>
    )
}
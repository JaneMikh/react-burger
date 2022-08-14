import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import mainStyles from '../registration/registration.module.css';


export default function PageIsNotFound () {
    return (
        <section className={mainStyles.page}>
            <div className={`${mainStyles.content} pb-20`}>
                <h1 className="text text_type_digits-large">404</h1>
                <p className="text text_type_main-large">Страница не найдена</p>
                <div className="pt-10 pb-10">
                    <a href="" className="pr-10">
                        <Button>Конструктор</Button> {/*change into Link component <Link to="/">*/}
                    </a>
                    <a href=""> {/*change into Link component <Link to="/login">*/}
                        <Button>Авторизация</Button>
                    </a>
                </div>
            </div>

        </section>
    )

}
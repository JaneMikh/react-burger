import React, { useEffect, useState, useRef } from "react";
import profStyles from './ProfileInfo.module.css';
import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAuth } from "../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../services/actions/route";
import { getUserData } from "../../services/actions/route";

export default function ProfileInfo () {
    const auth = useAuth();
    const dispatch = useDispatch();
    const routeState = useSelector((store) => store.route);
    const userProfileData = routeState.authProfile;

    const nameRef = useRef(null);
    const loginRef = useRef(null);
    
    const onIconClickName = () => {
        setTimeout(() => nameRef.current.focus(), 0);
    }
    const onIconClickEmail = () => {
        setTimeout(() => loginRef.current.focus(), 0);
    }

    //Name
    const [valueName, setValueName] = useState("");
    const onChangeName = (evt) => { setValueName(evt.target.value) }
    //Email
    const [valueEmail, setValueEmail] = useState("");
    const onChangeEmail = (evt) => { setValueEmail(evt.target.value) };
    //Password
    const [valuePassword, setValuePassword] = useState("");
    const onChangePassword = (evt) => { setValuePassword(evt.target.value) };

    useEffect(() => {
        if (!useAuth) {
            document.title = "react burger";  
            dispatch(getUserData(auth.user));
        }
    }, [dispatch, useAuth]);
    
    useEffect(() => {
        setValueName(userProfileData.name);
        setValueEmail(userProfileData.email);
        setValuePassword(userProfileData.password);
    }, [userProfileData]);


    const saveProfileData = (evt) => {
        evt.preventDefault();
        dispatch(updateUserProfile(valueEmail, valuePassword, valueName));
    }

    const cancelChangesHandler = () => {
        setValueName(userProfileData.name);
        setValueEmail(userProfileData.email);
        setValuePassword(userProfileData.password);
    }

    return (
        <section className={`${profStyles.content} mt-30`}>
            <form className={`${profStyles.form} pb-20`}>
                <Input
                    onChange={ onChangeName }
                    value={valueName ? valueName : ""}
                    name={"имя"}
                    type={"text"}
                    placeholder={"Имя"}
                    icon={"EditIcon"}
                    ref={nameRef}
                    onIconClick={onIconClickName}
                />
                <Input
                    onChange={ onChangeEmail }
                    value={valueEmail ? valueEmail : ""}
                    name={"email"}
                    type={"email"}
                    placeholder={"Логин"}
                    icon={"EditIcon"}
                    ref={loginRef}
                    onIconClick={onIconClickEmail}
                />
                <PasswordInput
                    name={"password"}
                    value={valuePassword ? valuePassword : ""}
                    onChange={ onChangePassword }
                />
            </form>
            <div className={profStyles.button__element}>
                <Button onClick={ saveProfileData } type="primary" size="medium">Сохранить</Button>
                <Button onClick ={ cancelChangesHandler } type="primary" size="medium">Отмена</Button>
            </div>
        </section>
    )
}
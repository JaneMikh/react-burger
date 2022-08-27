import React, { useEffect } from "react";
import profStyles from './profile.module.css';
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import FeedProfile from "../../components/FeedProfile/FeedProfile";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/action-types/wsActionTypes";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getCookie } from "../../utils/cookie";

export default function Profile () {

    let data = null;
    const dispatch = useDispatch();
    const userData = useSelector((store) => store.route.authProfile);
    const feedData = useSelector((store) => store.ws.messages);
    
    //Открытие и закрыти WS с передачей токена
    useEffect(() => {
        const token = "?token=" + getCookie("token");

        if (userData) {
            dispatch({ type: WS_CONNECTION_START, payload: token });
            
        }
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED, payload: "" });
        }
    }, [userData]);

    if (feedData.length > 0) { data = feedData[feedData.length - 1].orders; }

   return (
        <>
            <section className={profStyles.page}>
                <div className={profStyles.main}>
                    <ProfileMenu />
                    <Switch>
                        <Route path="/profile" exact={true}>
                            <ProfileInfo />
                        </Route>
                        <Route path="/profile/orders" exact={true}>
                            <FeedProfile data={ data } />
                        </Route>
                    </Switch>
                </div>
            </section>
        </>
    );
}

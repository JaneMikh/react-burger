import React, { useEffect } from "react";
import profStyles from './profile.module.css';
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import FeedInfo from "../../components/FeedInfo/FeedInfo";
import FeedProfile from "../../components/FeedProfile/FeedProfile";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from "../../services/action-types/wsActionTypes";

import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, Switch, Route } from "react-router-dom";
import { useAuth } from "../../services/auth";
import { getCookie } from "../../utils/cookie";


export default function Profile () {

    let data = null;
    const userData = useSelector((store) => store.route.authProfile);
    
    const dispatch = useDispatch();

   useEffect(() => {
        const token = "?token=" + getCookie("token");

        if (userData) {
            dispatch({ type: WS_CONNECTION_START, payload: token });
            
        }
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED, payload: "" });
        }
    }, [userData]);

    const feedData = useSelector((store) => store.ws.messages);
    
    
    if (feedData.length > 0) {
        data = feedData[feedData.length - 1].orders;
    }

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
    )
}
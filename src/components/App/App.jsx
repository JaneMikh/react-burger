import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory, useLocation} from "react-router-dom";
import stylesMain from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import Registration from '../../pages/registration/registration';
import Login from '../../pages/login/login';
import ForgotPassword from '../../pages/forgot-passward/forgot-passward';
import ResetPassword from '../../pages/reset-passward/reset-passward';
import Profile from '../../pages/profile/profile';
import PageIsNotFound from '../../pages/page404/page404';
import MainPage from '../../pages/main';


function App () {



    return (
        <section className={stylesMain.page}>
            <AppHeader />
            <ResetPassword />
            {/*<MainPage />*/}
        </section>
    );
}

export default App;
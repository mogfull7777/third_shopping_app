import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from "./component/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotEmail from "./pages/ForgotEmail";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Main />
    },
    {
        path : "/login",
        element : <Login />
    },
    {
        path : "/signup",
        element : <SignUp />
    },
    {

        path : "/fotgot/email",
        element : <ForgotEmail />
    },
    {
        path : "/forgot/password",
        element : <ForgotPassword />
    },
    {
        path : "/profile",
        element : <Profile />
    }
])

export default Router;
import React from 'react';
import Header from "./component/Header";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import Footer from "./component/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </div>
    );
};

export default App;
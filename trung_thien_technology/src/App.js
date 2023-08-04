
import './css/Libs.css';
import './css/Main.scss.css';
import './css/Angle.css';
import React from "react";

import {Footer} from "./components/header-footer/Footer";
import {Routes, Route} from 'react-router-dom';
import {SideBar} from "./components/main/SideBar";
import {Header} from "./components/header-footer/Header";
import {Main} from "./components/main/Main";
import {ShoppingCart} from "./components/main/ShoppingCart";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/shopping-cart" element={<ShoppingCart/>}/>
                {/*<Route path="/detail" element={<ProductDetail/>}/>*/}
                <Route path="" element={<Main/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;

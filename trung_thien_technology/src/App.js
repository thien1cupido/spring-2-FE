
import './css/Libs.css';
import './css/Main.scss.css';
import './css/Angle.css';
import React from "react";

import {Footer} from "./components/header-footer/Footer";
import {Routes, Route} from 'react-router-dom';
import {Header} from "./components/header-footer/Header";
import {Main} from "./components/main/Main";
import {ShoppingCart} from "./components/main/ShoppingCart";
import {ProductD} from "./components/main/ProductD";
import {Login} from "./components/main/Login";
import {ToastContainer} from "react-toastify";
import {AllProduct} from "./components/main/AllProduct";
import {ProductList} from "./components/admin/product/ProductList";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/shopping-cart" element={<ShoppingCart/>}/>
                <Route path="/product-detail/:id" element={<ProductD/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/all-product" element={<AllProduct/>}/>
                <Route path="/" element={<Main/>}/>
                <Route path="/product/list" element={<ProductList/>}/>
            </Routes>
            <Footer/>
            <ToastContainer/>
        </>
    );
}

export default App;

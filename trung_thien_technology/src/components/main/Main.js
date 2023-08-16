import React, {useEffect} from "react";
import '../../css/General.scss.css';
import {SideBar2} from "./SideBar2";
import {Content} from "./Content";
import {PC} from "./PC";

export function Main() {

    useEffect(() => {
        document.title="Trang chủ"
    }, [])

    return (
        <>
            <div className="container">
                <SideBar2/>
                <Content/>
                <PC/>
            </div>
        </>
    );
}
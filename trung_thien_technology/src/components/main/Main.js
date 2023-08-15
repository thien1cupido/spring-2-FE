import React from "react";
import '../../css/General.scss.css';
import {SideBar2} from "./SideBar2";
import {Content} from "./Content";
import {PC} from "./PC";

export function Main() {
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
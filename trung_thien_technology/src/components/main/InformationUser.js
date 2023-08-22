import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import React, { useEffect, useState } from "react";


export function InformationUser() {
    return(
        <>
            <div className="containerr" style={{marginTop:"8%"}}>
                <div className="avatar">
                    <img
                        src="https://i.pinimg.com/564x/eb/57/6f/eb576ff023487bcb1fa3ad61ee7b23ee.jpg"
                        alt=""
                    />
                </div>
                <div className="name">
                    <h1>HO HOANG</h1>
                    <div className="specialize">Frond-End Developer</div>
                    <ul className="contact">
                        <li>
                            <span>P</span> +84123456789
                        </li>
                        <li>
                            <span>E</span> hohoang.dev@gmail.com
                        </li>
                        <li>
                            <span>W</span> lundevweb.com
                        </li>
                    </ul>
                </div>
                <div className="info">
                    <ul>
                        <li>
                            From <b>HCMC</b> - VietNam
                        </li>
                        <li>01/01/0101</li>
                        <li>AAAA University</li>
                    </ul>
                </div>
                <div className="intro">
                    <h2>INTRODUCE MYSELT</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi omnis
                    quasi dolores modi eius aliquam ipsum soluta, dolore tenetur excepturi
                    praesentium porro alias itaque enim labore qui necessitatibus molestias hic
                    cum deserunt ab! Illum sed eveniet distinctio, alias sunt repudiandae labore
                    a dolorum tenetur? Harum deleniti mollitia odio neque.
                </div>
            </div>
        </>
    )
}
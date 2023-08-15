import React from "react";
import {Carousel} from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Marquee} from "./Marqee";

export function Content() {
    return (
        <>
            <div className="owl-stage-outer" style={{
                marginTop: "34px",
                marginBottom: "50px",
                width: "80%",
                display: "flex",
                marginLeft: "inherit"
            }}>
                <Carousel className="owl-stage" interval={3000} infiniteLoop={true} autoPlay={true}  showArrows={false} showThumbs={false} showStatus={false}>
                        <img src="https://mega.com.vn/media/banner/01_Aug94019c6c156a1053f20fe0fbde64b6d2.png" alt=""/>
                        <img src="https://mega.com.vn/media/banner/01_Augb260c1628207f80a69a1937de0610cfd.png" alt=""/>
                        <img src="https://mega.com.vn/media/banner/09_Aug74ca18f6e255f3402ee9eae5402ceee1.png" alt=""/>
                        <img src="https://mega.com.vn/media/banner/25_May19a6a9085bc66dde26a8720afef6f892.png" alt=""/>
                        <img src="https://mega.com.vn/media/banner/02_Aug1a2bb0c78a39829e7c773625174604c6.png" alt=""/>
                </Carousel>
            </div>
            <Marquee/>
        </>
    );
}
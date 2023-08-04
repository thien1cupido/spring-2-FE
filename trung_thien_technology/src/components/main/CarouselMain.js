import React from "react";
import {Carousel} from "react-bootstrap";

export function CarouselMain() {
    return (
        <>
            <Carousel interval={2000} >
                <Carousel.Item>
                    <img
                        className="slider"
                        src="https://cdn.nguyenkimmall.com/images/companies/_1/Content/tin-tuc/gia-dung/9-loai-quat-thong-dung-dung-trong-gia-dinh-tren-thi-truong-viet-nam-h5.jpg"
                        alt="First slide"
                        style={{width: "80%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider-item fade-box slick-slide"
                        src="https://yoobao.com.vn/wp-content/uploads/2020/01/quat-dien-mini-Yoobao-F04-6400mAh-726304.jpg"
                        alt="Second slide"
                        style={{width: "80%"}}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slider-item fade-box slick-slide "
                        src="https://quatdasinchatluong.com/wp-content/uploads/2022/04/quat-tich-dien-dan-dung.jpg"
                        alt="Third slide"
                        style={{width: "80%"}}
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}
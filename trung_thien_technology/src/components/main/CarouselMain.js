import React from "react";
import {Carousel} from "react-bootstrap";

export function CarouselMain() {
    return (
        <>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        style={{with: "960px"}}
                        src="https://mega.com.vn/media/banner/02_Aug1a2bb0c78a39829e7c773625174604c6.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{with: "960px"}}
                        src="https://mega.com.vn/media/banner/02_Augb42fff87381d92e0de514596d3e8c685.png
"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{with: "960px"}}
                        src="https://mega.com.vn/media/banner/02_Augb42fff87381d92e0de514596d3e8c685.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}
import React, {useEffect, useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as productService from '../../service/ProductService';
import {CurrencyFormatter} from "../../util/ConverUnit";
import {Link} from "react-router-dom";
import {addToCart} from "../../redux/ShoppingCartReducer";
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

export function PC() {
    const [pc, setPC] = useState([]);
    const dispatch = useDispatch();

    const getAllPCApi = async () => {
        const res = await productService.findAllProductByPC();
        setPC(res?.data)
    }
    useEffect(() => {
        getAllPCApi();
    }, [])

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (

        <>
            <section
                className="category-home js-product-ajax js-category-home loaded"
                data-id={3}
                id="wrap-category3"
                style={{marginTop: '30px'}}
            >
                <div className="title">
                    <span className="h-title">Máy bộ</span>
                    <div className="sub_cat_title">
                        <a href="" className="red viewall">
                            Xem tất cả <i className="fa fa-angle-double-right" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
                <div
                    className="product-list carousel-5-item owl-carousel owl-theme custom-nav owl-loaded owl-drag"
                >
                    <div className="owl-stage-outer">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            rewind={true}
                            rewindWithAnimation={true}
                            customTransition="all 1s ease 0s"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >{
                            pc?.map((pc, index) => (
                                <div className="owl-item" style={{width: 240}} key={index}>
                                    <div className="p-item">
                                        <div className="p-container">
                                            <Link to={`/product-detail/${pc.id}`} className="p-img">
                                                <img
                                                    src={pc.image}
                                                    alt="ttt"
                                                />
                                            </Link>
                                            <h3 className="p-name" style={{fontSize: "15px"}}>
                                                <Link to={`/product-detail/${pc.id}`}>{pc.name}</Link>
                                            </h3>
                                            <span className="p-price">
                                            <CurrencyFormatter amount={pc.price}/> đ
                                        </span>
                                            <span className="p-old-price"/>
                                            <div className="p-bottom">
              <span className="stock instock">
                <i className="fa fa-check"/>
              </span>
                                                <span onClick={() => (
                                                    toast("Đã thêm vào giỏ hàng !"),
                                                        dispatch(
                                                            addToCart({
                                                                id: pc.id,
                                                                name: pc.name,
                                                                price: pc.price,
                                                                img: pc.image,
                                                                quantity: 1
                                                            })
                                                        ))
                                                }
                                                className="p-buy icons"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        </Carousel>

                    </div>
                </div>

            </section>

        </>
    );
}
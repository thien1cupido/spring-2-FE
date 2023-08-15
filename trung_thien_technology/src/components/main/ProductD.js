import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import * as productService from '../../service/ProductService';
import {CurrencyFormatter} from "../../util/ConverUnit";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/ShoppingCartReducer";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ProductD() {
    const param = useParams();
    const [image, setImage]=useState([])
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const getProductApi = async () => {
        const res = await productService.findProductById(param.id);
        setProduct(res.data);
    }
    const getImageApi = async () => {
        const res = await productService.findAllImageById(param.id);
        setImage(res.data);
    }

    useEffect(() => {
        getImageApi();
        getProductApi();
    }, [param.id]);


    useEffect(()=>{
        document.title=product?.name;
        window.scrollTo(0,0);
    },[])
    if (!product) {
        return null;
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="product-inner">
                            <div className="product-main">
                                <div id="breadcrumb">
                                    <ol itemScope="" itemType="http://schema.org/BreadcrumbList">
                                        <li
                                            itemProp="itemListElement"
                                            itemScope=""
                                            itemType="http://schema.org/ListItem"
                                        >
                                            <a href="/" itemProp="item">
                                                <span itemProp="name">Trang chủ</span>

                                            </a>
                                            <meta itemProp="position" content={1}/>
                                        </li>
                                        <li>
                                            <i className="fa fa-angle-right"></i>
                                        </li>
                                        <li
                                            itemProp="itemListElement"
                                            itemScope=""
                                            itemType="http://schema.org/ListItem"
                                        >
                                            <a href="" itemProp="item" className="current">
                                                <span itemProp="name">{product.name}</span>
                                            </a>
                                            <meta itemProp="position" content={2}/>
                                        </li>
                                    </ol>
                                </div>
                                <div className="clearfix"/>
                                <div className="d-flex flex-wrap">
                                    <div className="col-lg-4 col-md-12 col-12 product-gallery">
                                        <div className="product-gallery--inner sticky-gallery">
                                            <div
                                                className="product-gallery--slide swiper  swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                                                id="slideProduct"
                                            >
                                                <div
                                                    className="swiper-wrapper"
                                                    id="swiper-wrapper-341a37665db0ffb3"
                                                    aria-live="polite"
                                                    style={{transform: "translate3d(0px, 0px, 0px)"}}
                                                >
                                                    <div
                                                        className="product-gallery--photo swiper-slide swiper-slide-next"
                                                        data-image={product.image}
                                                        role="group"
                                                        aria-label=" / "
                                                        style={{width: 372}}
                                                    >
                                                        <div className="product-gallery--item boxlazy-img">
                                                            <div className="boxlazy-img--insert lazy-img--prod">
                                                                <a
                                                                    data-fancybox="gallery"
                                                                    className="boxlazy-img--aspect"
                                                                    href="//product.hstatic.net/200000722513/product/1_17f74834dacc4eb99ad85d3637bfae65_master.png"
                                                                >
                                                                    <img
                                                                        src={product.image}
                                                                        className="gallery-demo swiper-lazy"
                                                                        alt="img"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span
                                                    className="swiper-notification"
                                                    aria-live="assertive"
                                                    aria-atomic="true"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-12 product-info">
                                        <div className="info-wrapper">
                                            <div className="info-header">
                                                <div className="info-content">
                                                    <div className="info-top">
                                                        <div className="product-name">
                                                            <h3>
                                                                {product?.name}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="info-bottom">
                                                        <div className="product-price">
                                                            <span className="pro-price"
                                                                  style={{fontSize: "25px"}}>
                                                                 <CurrencyFormatter amount={product?.price}/> đ
                                                            </span>
                                                        </div>
                                                        <div className="product-actions" >
                                                            <div className="quantity" style={{margin: "25px 0px "}}>
                                                                <button className="btn btn-primary" style={{marginRight: "5px"}}
                                                                    onClick={() =>
                                                                        setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                                                                    }
                                                                >
                                                                    -
                                                                </button>
                                                                <span style={{marginRight: "7px"}}>
                                                                {quantity}
                                                                </span>
                                                                <button className="btn btn-primary"
                                                                    onClick={() => setQuantity((prev) => prev + 1)}>+
                                                                </button>
                                                            </div>
                                                            <div className="action-buys" >
                                                                <button
                                                                    type="button"
                                                                    className="button btn-buynow"
                                                                    onClick={() =>(
                                                                        toast("Đã thêm vào giỏ hàng !"),
                                                                        dispatch(
                                                                            addToCart({
                                                                                id: product.id,
                                                                                name: product.name,
                                                                                price: product.price,
                                                                                img: product.image,
                                                                                quantity,
                                                                            })
                                                                        )
                                                                        )

                                                                    }

                                                                >
                                                                    <span className="maintext">MUA NGAY</span>
                                                                </button>
                                                            </div>
                                                            <div className="action-installments d-none">
                                                                <button
                                                                    type="submit"
                                                                    name="installment"
                                                                    className="button btn-installment"
                                                                    id="btn-installment-phone"
                                                                >
                                                                    <span className="maintext">MUA TRẢ GÓP 0%</span>
                                                                    <span className="subtext">Thủ tục đơn giản</span>
                                                                </button>
                                                                <button
                                                                    type="submit"
                                                                    name="installment"
                                                                    className="button btn-installment"
                                                                    id="btn-installment-card"
                                                                >
                                                                    <span className="maintext">TRẢ GÓP QUA THẺ </span>
                                                                    <span className="subtext">Visa, Master, JCB</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="product-desc-short prtab2">
                                                            <p>
                          <span style={{fontSize: 18}}>
                            ✔&nbsp;Bảo hành chính hãng 24&nbsp;tháng.
                          </span>
                                                            </p>
                                                            <p>
                          <span style={{fontSize: 18}}>
                            ✔ Hỗ trợ đổi mới trong 7 ngày.
                          </span>
                                                            </p>
                                                            <p>
                          <span style={{fontSize: 18}}>
                            ✔ Windows bản quyền tích hợp.
                          </span>
                                                            </p>
                                                            <p>
                          <span style={{fontSize: 18}}>
                            ✔ Miễn phí giao hàng toàn quốc.
                          </span>
                                                            </p>

                                                            <hr/>
                                                            <p></p>
                                                        </div>
                                                        <div
                                                            className="product-discount-promo-box discount-promo--app d-none"
                                                            id="discount-promo--app"
                                                        >
                                                            <div className="box-header">
                                                                <h2>Khuyến mãi</h2>
                                                            </div>
                                                            <div
                                                                className="box-content product-appdiscount"
                                                                id="discount-promo--product"
                                                                data-id={1048475342}
                                                                data-vid=""
                                                                data-title="Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                            >
                                                                <div className="discount-promo--content">
                                                                    <div className="discount-promo--lists"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="product-combo-promo-box combo-promo--app d-none"
                                                            id="combo-promo--app"
                                                        >
                                                            <div className="box-header">
                                                                <h2>Gợi ý mua kèm</h2>
                                                            </div>
                                                            <div
                                                                className="box-content product-appcombo"
                                                                id="combo-promo--product"
                                                                data-id={1048475342}
                                                                data-vid=""
                                                                data-title="Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                            >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="product-inner">
                            <div className="product-block product-desc">
                                <div className="product-wrap">
                                    <div className="product-desc--content expandable-toggle opened">
                                        <div className="desc-content">
                                            <p/>
                                            <h2>
                  <span style={{fontSize: 22}}>
                    <strong>THÔNG SỐ KĨ THUẬT:</strong>
                  </span>
                                            </h2>
                                            <div className="scroll-table">
                                                <table
                                                    id="tblGeneralAttribute"
                                                    border={1}
                                                    cellPadding={3}
                                                    cellSpacing={0}
                                                    style={{
                                                        backgroundColor: "#ffffff",
                                                        borderCollapse: "collapse",
                                                        borderSpacing: 0,
                                                        border: "1px solid #eeeeee",
                                                        boxSizing: "border-box",
                                                        color: "#333333",
                                                        fontFamily: "Roboto,sans-serif",
                                                        fontSize: 13,
                                                        marginBottom: 20,
                                                        marginLeft: "auto",
                                                        marginRight: "auto",
                                                        maxWidth: "100%",
                                                        minWidth: 500,
                                                        width: "100%"
                                                    }}
                                                    className="table table-bordered"
                                                >
                                                    <tbody>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                                                            <strong>
                            <span style={{fontSize: 16}}>
                              <a href="https://gearvn.com/collections/cpu-bo-vi-xu-ly">
                                CPU
                              </a>
                            </span>
                                                            </strong>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              Intel Core i9-13900H 4.1GHz up to 5.4GHz, 14 Cores
                              20 Threads ,24MB Cache
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                                                            <strong>
                            <span style={{fontSize: 16}}>
                              <a href="https://gearvn.com/collections/ram-pc">
                                RAM
                              </a>
                            </span>
                                                            </strong>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              32GB (16x2) DDR5 5200MHz (2x SO-DIMM socket, up to
                              64GB SDRAM)
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                                                            <strong>
                            <span style={{fontSize: 16}}>
                              <a
                                  target="_blank"
                                  href="https://gearvn.com/collections/o-cung-di-dong-hdd-box"
                              >
                                Ổ lưu trữ
                              </a>
                            </span>
                                                            </strong>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              2TB SSD PCIE G4X4 (2 slots M.2 NVMe PCIe Gen4)
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                                                            <strong>
                            <span style={{fontSize: 16}}>
                              <a href="https://gearvn.com/collections/vga-card-man-hinh">
                                Card đồ họa
                              </a>
                            </span>
                                                            </strong>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              NVIDIA® GeForce RTX™ 4070 8GB GDDR6 + MUX Switch
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                                                            <strong>
                            <span style={{fontSize: 16}}>
                              <a
                                  target="_blank"
                                  href="https://gearvn.com/pages/man-hinh"
                              >
                                Màn hình
                              </a>
                            </span>
                                                            </strong>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              16" UHD+ (3840x2400), 16:10, 100% DCI-P3, OLED,
                              DisplayHDR True Black 600
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                                                            <br/>
                                                            <br/>
                                                            <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Cổng giao tiếp</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              1 x Thunderbolt 4/ DP / USB Type-C (hỗ trợ sạc PD)
                              <br/>1 x USB 3.2 Gen2 Type-C / DP
                              <br/>1 x USB 3.2 Gen2 Type-A
                              <br/>1 x HDMI 2.1 (8K@60Hz / 4K@120Hz)
                              <br/>1 x Đầu độc thẻ MicroSD
                              <br/>1 x Jack combo Audio
                              <br/>1 x RJ45
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                                                            <strong>
                            <span style={{fontSize: 16}}>
                              <a href="https://gearvn.com/collections/ban-phim-may-tinh">
                                Bàn phím
                              </a>
                            </span>
                                                            </strong>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              Per-Key RGB Gaming Keyboard by SteelSeries
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Audio</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{color: "#000000"}}>
                            <span style={{fontSize: 16}}>
                              2 x 2W loa con và 4 x 2W loa trầm, thiết kế bởi
                              Dynaudio, Nahimic 3 Audio Enhancer, hỗ trợ Hi-Res
                              Audio
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Kết nối có dây (LAN)</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              Killer Ethernet E3100 (tối đa tới&nbsp; 2.5GbE)
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Kết nối không dây</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              Intel® Killer™ AX1675 Wi-Fi 6E, Bluetooth v5.3
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                                                            <strong>
                            <span style={{fontSize: 16}}>
                              <a href="https://gearvn.com/collections/webcam">
                                Webcam
                              </a>
                            </span>
                                                            </strong>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              IR FHD type (30fps@1080p) có cần gạt che Camera
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Pin</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              4 Cell 99.9WHrs
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Trọng lượng</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>1.88 kg</span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Hệ điều hành</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              Windows 11 Home
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        style={{boxSizing: "border-box"}}
                                                        className="row-info"
                                                    >
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Màu sắc</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              Selenite Gray
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style={{
                                                                backgroundColor: "#f7f7f7 !important",
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 201
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              <strong>Kích thước</strong>
                            </span>
                          </span>
                                                        </td>
                                                        <td
                                                            style={{
                                                                borderColor: "#eeeeee",
                                                                borderStyle: "solid",
                                                                borderWidth: 1,
                                                                boxSizing: "border-box",
                                                                padding: 8,
                                                                verticalAlign: "top",
                                                                width: 630
                                                            }}
                                                        >
                          <span style={{fontSize: 16}}>
                            <span style={{color: "#000000"}}>
                              355.8 x 259.7 x 19.95 (mm)
                            </span>
                          </span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <p/>
                                            <h2 style={{textAlign: "justify"}}>
                                                <strong>
                    <span style={{fontSize: 22}}>
                      Đánh giá chi tiết laptop gaming MSI Stealth 16 Mercedes
                      AMG A13VG 289VN
                    </span>
                                                </strong>
                                            </h2>
                                            <p style={{textAlign: "justify"}}>
                  <span style={{fontSize: 18}}>
                    Tại sự kiện{" "}
                      <a href="https://gearvn.com/blogs/cong-nghe/computex-2023">
                      Computex 2023
                    </a>{" "}
                      vừa qua, MSI vừa có màn comeback chấn động khi thông báo hợp
                    tác với thương hiệu siêu xe hàng đầu Thế giới Mercedes. Màn
                    bắt tay giữa hai gã khổng lồ thuộc hai ngành hàng khác nhau
                    đương nhiên đã chiếm trọn spotlight trong sự kiện công nghệ
                    lớn nhất hành tinh. Không làm dân tình thất vọng,{" "}
                      <strong>MSI Stealth 16 Mercedes AMG A13VG 289VN</strong> đã
                    chính thức cập bến nhà{" "}
                      <a target="_blank" href="https://gearvn.com/">
                      GEARVN
                    </a>{" "}
                      với mức giá cực kỳ hấp dẫn.
                  </span>
                                            </p>
                                            <p style={{textAlign: "center"}}>
                                                <img
                                                    alt="GEARVN - Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                    src="//file.hstatic.net/200000722513/file/gearvn-laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn-1_56e0cde74ea24fec9371c0748d905045.png"
                                                />
                                            </p>
                                            <h3 style={{textAlign: "justify"}}>
                                                <strong>
                    <span style={{fontSize: 20}}>
                      Cảm hứng thiết kế từ siêu xe Mercedes
                    </span>
                                                </strong>
                                            </h3>
                                            <p style={{textAlign: "justify"}}>
                  <span style={{fontSize: 18}}>
                    Nếu MSI đã quá bành trướng trong lĩnh vực gaming thì
                    Mercedes cũng chẳng kém cạnh khi là một trong những ông lớn
                    sản xuất xe đua, xe hạng sang trứ danh trên Thế giới. MSI
                    Stealth thuộc series{" "}
                      <a href="https://gearvn.com/pages/laptop-gaming">
                      laptop gaming
                    </a>{" "}
                      cao cấp của nhà Rồng với sự đầu tư chỉn chu từ mặt thiết kế
                    đến hiệu năng để mang đến trải nghiệm sử dụng tốt nhất cho
                    người dùng.&nbsp;
                  </span>
                                            </p>
                                            <p style={{textAlign: "center"}}>
                                                <img
                                                    alt="GEARVN - Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                    src="//file.hstatic.net/200000722513/file/gearvn-laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn-__6__cbf1f9d3cfc340f599f4143e9d94e0e6_1024x1024.jpg"
                                                />
                                            </p>
                                            <p style={{textAlign: "justify"}}>
                  <span style={{fontSize: 18}}>
                    Phiên bản MSI Stealth 16 Mercedes AMG A13VG 289VN lần này sở
                    hữu ngoại hình tương đối mới mẻ khi nó được lấy cảm hứng từ
                    dòng xe sang Mercedes AMG, từ khe thông gió theo hình dáng
                    AMG logo hay nút nguồn “<strong>Start Engine</strong>” như
                    thể bạn đang khởi động chiếc siêu xe của mình. Và còn rất
                    nhiều chi tiết nhỏ mang ngôn ngữ thiết kế mới nữa như
                    spacebar họa tiết đường drift độc quyền của AMG, phần bản lề
                    hay hệ thống loa Dynaudio được đục lỗ theo dòng chữ AMG,...
                  </span>
                                            </p>
                                            <p style={{textAlign: "center"}}>
                                                <img
                                                    alt="GEARVN - Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                    src="//file.hstatic.net/200000722513/file/gearvn-laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn-__5__6f340f1cbda7429f8bcedb797e9c3e50_1024x1024.jpg"
                                                />
                                            </p>
                                            <p style={{textAlign: "justify"}}>
                  <span style={{fontSize: 18}}>
                    Vẫn là chất liệu nhôm Anodized thường thấy với tông màu
                    Selenite Gray mạnh mẽ chủ đạo cùng hai logo ở mặt lưng và
                    logo hình rồng huyền thoại ở một góc màn hình giúp tăng tính
                    nhận diện thương hiệu cho{" "}
                      <a href="https://gearvn.com/collections/laptop">laptop</a>.
                    Nhờ được hoàn thiện bằng chất liệu hợp kim nhôm-magie cao
                    cấp nên trọng lượng của MSI Stealth 16 Mercedes tương đối
                    nhẹ, chỉ khoảng dưới 2kg và độ dày chưa đến 20mm. Điều này
                    đã đáp ứng đúng tiêu chí thiết kế laptop gaming phải tối ưu
                    để tiện lợi cho quá trình di chuyển của người dùng.&nbsp;
                  </span>
                                            </p>
                                            <h3 style={{textAlign: "justify"}}>
                                                <strong>
                    <span style={{fontSize: 20}}>
                      Bàn phím và touchpad được tối ưu thiết kế
                    </span>
                                                </strong>
                                            </h3>
                                            <p style={{textAlign: "justify"}}>
                  <span style={{fontSize: 18}}>
                    Mặc dù ngôn ngữ thiết kế được đổi mới và được lấy cảm hứng
                    từ dòng xe AMG thì MSI Stealth 16 Mercedes AMG A13VG 289VN
                    vẫn còn giữ lại thiết kế{" "}
                      <a href="https://gearvn.com/collections/ban-phim-steelseries">
                      bàn phím SteelSeries
                    </a>{" "}
                      quen thuộc cùng hệ thống đèn RGB trên mỗi phím. Trải nghiệm
                    gõ phím trên MSI Stealth phải nói là đỉnh của chóp. Phần
                    touchpad có hơi thất vọng một tí vì nó chẳng phải kiểu
                    touchpad tàn hình như dòng{" "}
                      <a href="https://gearvn.com/products/laptop-gaming-msi-raider-ge76-12uhs-480vn">
                      MSI Raider
                    </a>{" "}
                      cùng nhà nhưng bù lại touchpad sở hữu kích thước trung bình,
                    được phủ kính, độ nhạy và tracking chính xác để bạn thao tác
                    cơ bản thoải mái nhất có thể.
                  </span>
                                            </p>
                                            <p style={{textAlign: "center"}}>
                                                <img
                                                    alt="GEARVN - Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                    src="//file.hstatic.net/200000722513/file/gearvn-laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn-__4__007125a6bc5d45c59241e7722b1c14ff_1024x1024.jpg"
                                                />
                                            </p>
                                            <h3 style={{textAlign: "justify"}}>
                                                <strong>
                    <span style={{fontSize: 20}}>
                      Hiệu năng MSI Stealth 16 Mercedes AMG khủng như siêu xe
                    </span>
                                                </strong>
                                            </h3>
                                            <p style={{textAlign: "justify"}}>
                  <span style={{fontSize: 18}}>
                    Chúng ta đã đề cập khá nhiều đến ngoại hình nhưng hiệu năng
                    cuối cùng vẫn là điều mọi game thủ tìm kiếm. Laptop được
                    trang bị{" "}
                      <a href="https://gearvn.com/collections/cpu-bo-vi-xu-ly">
                      bộ vi xử lý
                    </a>{" "}
                      Intel Core i9-13900H, 14 nhân 20 luồng cùng khả năng ép xung
                    lên đến 5.4GHz. Laptop còn được hỗ trợ{" "}
                      <a href="https://gearvn.com/collections/vga-card-man-hinh">
                      card đồ họa
                    </a>{" "}
                      NVIDIA GeForce{" "}
                      <a href="https://gearvn.com/collections/vga-rtx-4070-ti">
                      RTX 4070
                    </a>{" "}
                      mới nhất cho khả năng tái tạo hình ảnh chất lượng, hình ảnh
                    đồ họa trông sắc nét và ấn tượng. Hiệu năng hết nước chấm
                    như thế thì quả thật MSI Stealth 16 Mercedes AMG Motorsport
                    sẽ là miếng mồi ngon cho game thủ.
                  </span>
                                            </p>
                                            <p style={{textAlign: "center"}}>
                                                <img
                                                    alt="GEARVN - Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                    src="//file.hstatic.net/200000722513/file/gearvn-laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn-__3__3f65490ca43741cfae68ce00dbe12931_1024x1024.jpg"
                                                />
                                            </p>
                                            <h3 style={{textAlign: "justify"}}>
                                                <strong>
                    <span style={{fontSize: 20}}>
                      Màn hình hiển thị chất lượng cao
                    </span>
                                                </strong>
                                            </h3>
                                            <p style={{textAlign: "justify"}}>
                  <span style={{fontSize: 18}}>
                    Màn hình sở hữu kích thước 16 inch, độ phân giải UHD+ kết
                    hợp với công nghệ OLED cho khả năng hiển thị sống động, sắc
                    nét và sắc nét. Không những thế, MSI còn trang bị cho model
                    laptop gaming chuẩn xe đua này các phiên bản AI mới nhất
                    giúp game thủ, designer, nhà sáng tạo nội dung có thể tận
                    dụng chiếc laptop của mình làm tốt mọi tác vụ hình ảnh, đồ
                    họa một cách thông minh, sáng tạo và nhanh chóng nhưng vẫn
                    đảm bảo an toàn về vấn đề riêng tư.
                  </span>
                                            </p>
                                            <p style={{textAlign: "center"}}>
                                                <img
                                                    alt="GEARVN - Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                    src="//file.hstatic.net/200000722513/file/gearvn-laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn-__2__532854068e14452980a71996632d6516_1024x1024.jpg"
                                                />
                                            </p>
                                            <h3 style={{textAlign: "justify"}}>
                                                <strong>
                    <span style={{fontSize: 20}}>
                      Cổng kết nối và hệ thống tản nhiệt đầy đủ cho game thủ
                    </span>
                                                </strong>
                                            </h3>
                                            <p style={{textAlign: "justify"}}>
                  <span style={{fontSize: 18}}>
                    Mặc dù thiết kế của MSI Stealth 16 Mercedes AMG A13VG 289VN
                    khá mỏng&nbsp;nhưng MSI vẫn trang bị đầy đủ các loại cổng
                    kết nối thông dụng và phổ biến nhất như USB Type A, USB Type
                    C, microSD, HDMI,{" "}
                      <a href="https://gearvn.com/blogs/thu-thuat-giai-dap/nhung-cai-tien-cua-cong-thunderbolt-4-ma-ban-nen-biet">
                      Thunderbolt 4
                    </a>{" "}
                      hỗ trợ sạc nhanh thiết bị, cổng DC, jack cắm tai nghe. Song
                    song đó là hệ thống tản nhiệt{" "}
                      <a href="https://gearvn.com/blogs/thu-thuat-giai-dap/cooler-boost-5">
                      Cooler Boost 5
                    </a>{" "}
                      độc quyền của hãng với quạt kép, 5 ống đồng tản nhiệt đảm
                    bảo nhiệt độ trên CPU và GPU không bị quá nhiệt, góp phần
                    duy trì hiệu năng cao cấp trên laptop gaming.
                  </span>
                                            </p>
                                            <p style={{textAlign: "center"}}>
                                                <img
                                                    alt="GEARVN - Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN"
                                                    src="//file.hstatic.net/200000722513/file/gearvn-laptop-gaming-msi-stealth-16-mercedes-amg-a13vg-289vn-__3__4db3a415efd04c80872c9d5449947ea3_1024x1024.png"
                                                />
                                            </p>
                                            <p/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
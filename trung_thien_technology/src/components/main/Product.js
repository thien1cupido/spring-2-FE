import React from "react";
import {Link} from "react-router-dom";

export function Product() {
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
                        <a href="/pc-cpu-intel.html">PC CPU INTEL</a>
                        <a href="/pc-cpu-amd.html">PC CPU AMD</a>
                        <a href="/may-bo-mega.html" className="red viewall">
                            Xem tất cả <i className="fa fa-angle-double-right" aria-hidden="true"/>
                        </a>
                    </div>
                </div>
                <div
                    className="product-list carousel-5-item owl-carousel owl-theme custom-nav owl-loaded owl-drag"
                    id="category2"
                    data-limit={10}
                    data-holder="#category2"
                    data-url="/ajax/get_json.php?action=product&action_type=product-list&category=2&sort=order&show=10"
                    data-container="#wrap-category2"
                >

                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev">
                            <i className="fa fa-angle-left" aria-hidden="true"/>
                        </button>
                        <button type="button" role="presentation" className="owl-next disabled">
                            <i className="fa fa-angle-right" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="owl-dots disabled"/>
                </div>


            </section>
            <div style={{display:"flex ",marginTop:"20px"}}>
                <div className="owl-item" style={{width: "20%"}}>
                    <div className="p-item">
                        <div className="p-container">
                            <a
                                href="/laptop-gaming-acer-aspire-7-a715-42g-r05g-nh.qaysv.007-den-cpu-r5-5500u-ram-8gb-ssd-512gb-vga-gtx-1650-4gb-ddr6-15.6-inch-fhd-144hz-ips-win11.html"
                                className="p-img"
                            >
                                <span className="icon-offer"/>
                                <img
                                    src="https://mega.com.vn/media/product/250_20893_aspire_7a_01.png"
                                    alt="Laptop Gaming Acer Aspire 7 A715-42G-R05G (NH.QAYSV.007) Đen (Cpu R5 5500U ,Ram 8gb, Ssd 512Gb, Vga GTX 1650 4GB DDR6, 15.6 inch FHD 144Hz IPS, Win11)"
                                />
                            </a>
                            <div className="p-brand-img">
                                <img
                                    className="p-brand-img"
                                    src="https://mega.com.vn/media/brand/acer.png"
                                    alt="Acer"
                                />
                            </div>
                            <h3 className="p-name">
                                <a href="/laptop-gaming-acer-aspire-7-a715-42g-r05g-nh.qaysv.007-den-cpu-r5-5500u-ram-8gb-ssd-512gb-vga-gtx-1650-4gb-ddr6-15.6-inch-fhd-144hz-ips-win11.html">
                                    Laptop Gaming Acer Aspire 7 A715-42G-R05G (NH.QAYSV.007) Đen
                                    (Cpu R5 5500U ,Ram 8gb, Ssd 512Gb, Vga GTX 1650 4GB DDR6, 15.6
                                    inch FHD 144Hz IPS, Win11)
                                </a>
                            </h3>
                            <span className="p-price">14.900.000đ</span>&nbsp;
                            <span className="p-old-price"/>
                            <div className="p-bottom">
              <span className="stock instock">
                <i className="fa fa-check"/>{" "}
              </span>
                                <span
                                    className="p-buy icons"

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-item" style={{width: "20%"}}>
                    <div className="p-item">
                        <div className="p-container">
                            <a
                                href="/laptop-acer-aspire-5-a514-56p-35x7-nx.khrsv.001-gray-cpu-i3-1315u-ram-8gb-ssd-512gb-vga-uhd-graphics-14-inch-wuxga-win-11.html"
                                className="p-img"
                            >
                                <span className="icon-offer"/>
                                <img
                                    src="https://mega.com.vn/media/product/250_24453_aspire_5_01.png"
                                    alt="Laptop Acer Aspire 5 A514-56P-35X7 (NX.KHRSV.001) Gray (Cpu i3-1315U, Ram 8GB, SSD 512GB, Vga UHD Graphics, 14 inch WUXGA, Win 11)"
                                />
                            </a>
                            <div className="p-brand-img">
                                <img
                                    className="p-brand-img"
                                    src="https://mega.com.vn/media/brand/acer.png"
                                    alt="Acer"
                                />
                            </div>
                            <h3 className="p-name">
                                <Link
to={"/detail"}
                                >
                                    Laptop Acer Aspire 5 A514-56P-35X7 (NX.KHRSV.001) Gray (Cpu
                                    i3-1315U, Ram 8GB, SSD 512GB, Vga UHD Graphics, 14 inch WUXGA,
                                    Win 11)
                                </Link>
                            </h3>
                            <span className="p-price">11.950.000đ</span>&nbsp;
                            <span className="p-old-price"/>
                            <div className="p-bottom">
              <span className="stock instock">
                <i className="fa fa-check"/>{" "}
              </span>
                                <span
                                    className="p-buy icons"

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-item" style={{width: "20%"}}>
                    <div className="p-item">
                        <div className="p-container">
                            <Link to={"/detail"}
                                className="p-img"
                            >
                                <span className="icon-offer"/>
                                <img
                                    src="https://mega.com.vn/media/product/250_24291_nitro4_01.png"
                                    alt="Laptop Acer Nitro 17 Phoenix AN17-51-50B9 (NH.QK5SV.001) Đen (Cpu i5-13500H, Ram 8GB, SSD 512GB, Vga RTX 4050 6GB, 17.3 inch FHD, Win 11)"
                                />
                            </Link>
                            <div className="p-brand-img">
                                <img
                                    className="p-brand-img"
                                    src="https://mega.com.vn/media/brand/acer.png"
                                    alt="Acer"
                                />
                            </div>
                            <h3 className="p-name">
                                <Link
to={"/detail"}
                                >
                                    Laptop Acer Nitro 17 Phoenix AN17-51-50B9 (NH.QK5SV.001) Đen
                                    (Cpu i5-13500H, Ram 8GB, SSD 512GB, Vga RTX 4050 6GB, 17.3 inch
                                    FHD, Win 11)
                                </Link>
                            </h3>
                            <span className="p-price">32.990.000đ</span>&nbsp;
                            <span className="p-old-price"/>
                            <div className="p-bottom">
              <span
                  className="p-buy icons"
              />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-item" style={{width: "20%"}}>
                    <div className="p-item">
                        <div className="p-container">
                            <Link to={"/detail"}
                                className="p-img"
                            >
                                <span className="icon-offer"/>
                                <img
                                    src="https://mega.com.vn/media/product/250_17766_5_01.png"
                                    alt="Laptop Acer SWIFT 5 SF514-55T-51NZ (NX.HX9SV.002) Vàng (Core i5-1135G7, Ram 8GB, SSd 512gb, 14 inch, FHD, Win 10, Touch)"
                                />
                            </Link>
                            <div className="p-brand-img">
                                <img
                                    className="p-brand-img"
                                    src="https://mega.com.vn/media/brand/acer.png"
                                    alt="Acer"
                                />
                            </div>
                            <h3 className="p-name">
                                <Link to={"/detail"}>
                                    Laptop Acer SWIFT 5 SF514-55T-51NZ (NX.HX9SV.002) Vàng (Core
                                    i5-1135G7, Ram 8GB, SSd 512gb, 14 inch, FHD, Win 10, Touch)
                                </Link>
                            </h3>
                            <span className="p-price">21.190.000đ</span>&nbsp;
                            <span className="p-old-price">22.790.000đ</span>
                            {/*<span className="p-discount icons">-8%</span>*/}
                            <div className="p-bottom">
              <span className="stock instock">
                <i className="fa fa-check"/>{" "}
              </span>
                                <span
                                    className="p-buy icons"

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-item" style={{width: "20%"}}>
                    <div className="p-item">
                        <div className="p-container">
                            <a
                                href="/laptop-dell-vostro-3405-v4r53500u001w-black-cpu-r5-3500u-2.1-ghz-4mb-up-to-3.7ghz-ram-4gb-2400-ssd-256gb-m2-pcie-win-10-14-inch.html"
                                className="p-img"
                            >
                                <span className="icon-offer"/>
                                <img
                                    src="https://mega.com.vn/media/product/250_17863_ltde0364_01.png"
                                    alt="Laptop Dell Vostro 3405 V4R53500U001W-Black (Cpu R5-3500U( 2.1 Ghz, 4Mb up to 3.7Ghz), Ram 4gb 2400, Ssd 256gb M2 PCIe, Win 10, 14 inch)"
                                />
                            </a>
                            <div className="p-brand-img">
                                <img
                                    className="p-brand-img"
                                    src="https://mega.com.vn/media/brand/dell.png"
                                    alt="Dell"
                                />
                            </div>
                            <h3 className="p-name">
                                <Link to={"/detail"} >
                                    Laptop Dell Vostro 3405 V4R53500U001W-Black (Cpu R5-3500U( 2.1
                                    Ghz, 4Mb up to 3.7Ghz), Ram 4gb 2400, Ssd 256gb M2 PCIe, Win 10,
                                    14 inch)
                                </Link>
                            </h3>
                            <span className="p-price">11.900.000đ</span>&nbsp;
                            <span className="p-old-price">12.950.000đ</span>
                            {/*<span className="p-discount icons">-9%</span>*/}
                            <div className="p-bottom">
              <span
                  className="p-buy icons"

              />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
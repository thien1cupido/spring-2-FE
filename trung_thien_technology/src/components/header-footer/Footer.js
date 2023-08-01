import React from "react";

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container py-3">
                    <div className="row">
                        {/* info */}
                        <div className="info col-12 col-md-3 mb-3">
                            <div className="title">Thông tin liên hệ</div>
                            {/* Showroom */}
                            <div className="showroom">
                                <div className="item">
                                    <p
                                        className="name"
                                        data-toggle="collapse"
                                        aria-expanded="true"
                                        aria-controls="showroom0"
                                    >
                                        SHOWROOM ĐÀ NẴNG
                                    </p>
                                    <div className="sr-content collapse show" id="showroom0">
                                        <p className="address">Địa chỉ: 280, Q. Sơn Trà, TP Đà Nẵng</p>
                                        <p className="tel">079 352 123 - (0236) 2323213</p>
                                        <div className="pb-2" />
                                    </div>
                                </div>
                                <div className="item">
                                    <p
                                        className="name"
                                        data-toggle="collapse"
                                        href="#showroom1"
                                        aria-expanded="false"
                                        aria-controls="showroom1"
                                    >
                                        TTBH CẦN THƠ
                                    </p>
                                    <div className="sr-content collapse " id="showroom1">
                                        <p className="address">
                                            Địa chỉ: 30 Nguyễn Văn Linh, P. Hưng Lợi, Q. Ninh Kiều, TP Cần
                                            Thơ
                                        </p>
                                        <div className="pb-2" />
                                    </div>
                                </div>
                                <div className="item">
                                    <p
                                        className="name"
                                        data-toggle="collapse"
                                        href="#showroom2"
                                        aria-expanded="false"
                                        aria-controls="showroom2"
                                    >
                                        TTBH - ĐÀ LẠT
                                    </p>
                                    <div className="sr-content collapse " id="showroom2">
                                        <p className="address">
                                            Địa chỉ: 47C - 47D Phù Đổng Thiên Vương, P.8, Đà Lạt, Lâm Đồng
                                        </p>
                                        <div className="pb-2" />
                                    </div>
                                </div>
                                <div className="item">
                                    <p
                                        className="name"
                                        data-toggle="collapse"
                                        href="#showroom3"
                                        aria-expanded="false"
                                        aria-controls="showroom3"
                                    >
                                        TTBH - NHA TRANG
                                    </p>
                                    <div className="sr-content collapse " id="showroom3">
                                        <p className="address">
                                            Địa chỉ: 51 Đường Âu Cơ, P. Phước Tân, Nha Trang, Khánh Hòa
                                        </p>
                                        <div className="pb-2" />
                                    </div>
                                </div>
                                <div className="item">
                                    <p
                                        className="name"
                                        data-toggle="collapse"
                                        aria-expanded="false"
                                        aria-controls="showroom4"
                                    >
                                        TTBH - BÌNH DƯƠNG
                                    </p>
                                    <div className="sr-content collapse " id="showroom4">
                                        <p className="address">
                                            Địa chỉ: 97K Tân Lập, P. Đông Hòa, TP. Dĩ An, Bình Dương
                                        </p>
                                        <div className="pb-2" />
                                    </div>
                                </div>
                            </div>
                            {/* Social Links */}
                            <div className="oneshop-social-links">
                                <a href="https://www.facebook.com/spone.vn" className="item facebook">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                    href="https://www.youtube.com/c/SPONEoffical/"
                                    className="item youtube"
                                >
                                    <i className="fab fa-youtube" />
                                </a>
                                <a href="" className="item instagram">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>{" "}
                        </div>
                        {/* links */}
                        <div className="footer-links col-12 col-md-3 mx-auto mb-3">
                            <div
                                className="title"
                                data-toggle="collapse"
                                data-target="#footer-links-1"
                                aria-expanded="false"
                                aria-controls="footer-links-1"
                            >
                                Hỗ trợ khách hàng
                            </div>
                            <div className="collapse" id="footer-links-1">
                                <ul id="menu-ho-tro-khach-hang" className="menu">
                                    <li
                                        id="menu-item-67460"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67460"
                                    >
                                        <a href="https://sp-one.vn/chinh-sach-chung/">Chính sách chung</a>
                                    </li>
                                    <li
                                        id="menu-item-67462"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67462"
                                    >
                                        <a href="https://sp-one.vn/chinh-sach-bao-hanh/">
                                            Chính sách bảo hành
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-67458"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67458"
                                    >
                                        <a href="https://sp-one.vn/chinh-sach-thanh-toan/">
                                            Chính sách thanh toán
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-67459"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67459"
                                    >
                                        <a href="https://sp-one.vn/chinh-sach-doi-tra-va-nhap-lai/">
                                            Chính sách đổi trả và nhập lại
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-67457"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67457"
                                    >
                                        <a href="https://sp-one.vn/chinh-sach-van-chuyen/">
                                            Chính sách vận chuyển và giao nhận
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-67461"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-67461"
                                    >
                                        <a
                                            rel="privacy-policy"
                                            href="https://sp-one.vn/chinh-sach-bao-mat-thong-tin/"
                                        >
                                            Chính sách bảo mật thông tin
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-67456"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67456"
                                    >
                                        <a href="https://sp-one.vn/chinh-sach-xu-ly-khieu-nai/">
                                            Chính sách xử lý khiếu nại
                                        </a>
                                    </li>
                                </ul>{" "}
                            </div>
                        </div>
                        {/* links */}
                        <div className="footer-links col-12 col-md-3 mx-auto mb-3">
                            <div
                                className="title"
                                data-toggle="collapse"
                                data-target="#footer-links-2"
                                aria-expanded="false"
                                aria-controls="footer-links-2"
                            >
                                Thông tin khuyến mãi
                            </div>
                            <div className="collapse" id="footer-links-2">
                                <ul id="menu-thong-tin-khuyen-mai" className="menu">
                                    <li
                                        id="menu-item-67467"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67467"
                                    >
                                        <a href="https://sp-one.vn/tong-hop-khuyen-mai-sp-one/">
                                            Tổng hợp khuyến mãi Trung Thiện Technology
                                        </a>
                                    </li>
                                    <li
                                        id="menu-item-67468"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67468"
                                    >
                                        <a href="https://sp-one.vn/huong-dan-tra-gop-tai-spone/">
                                            Hướng Dẫn Trả Góp tại Trung Thiện Technology – Trả Góp 0% Với
                                            Thẻ Tín Dụng
                                        </a>
                                    </li>
                                </ul>{" "}
                            </div>
                        </div>
                        {/* FB */}
                        <div className="footer-links col-12 col-md-3 mb-3">
                            <div
                                className="title"
                                data-toggle="collapse"
                                data-target="#footer-links-3"
                                aria-expanded="false"
                                aria-controls="footer-links-3"
                            >
                                Tổng đài hỗ trợ
                            </div>
                            <div className="collapse" id="footer-links-3">
                                <div className="oneshop-contact-list">
                                    <div className="item">
                                        <span className="group">Kinh Doanh</span>
                                        <span className="sdt">0236 383 55 66</span>
                                    </div>
                                    <div className="item">
                                        <span className="group">Kỹ thuật bảo hành</span>
                                        <span className="sdt">0236 383 55 68</span>
                                    </div>
                                </div>
                            </div>
                            {/* BCT */}
                            <a href="http://online.gov.vn/Home/WebDetails/55878">
                                <img
                                    src="https://sp-one.vn/Content/themes/oneshop2021/assets/images/bct.png"
                                    style={{ width: 180 }}
                                    className="lazyloaded"
                                    data-ll-status="loaded"
                                />
                                <noscript>
                                    &lt;img
                                    src="https://sp-one.vn/Content/themes/oneshop2021/assets/images/bct.png"
                                    style="width: 180px;"&gt;
                                </noscript>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-lg-auto px-0 px-lg-3 mb-2 mb-lg-0">
                                © 2023 Trung Thiện Technology : Máy tính PC | Laptop cao cấp &amp;
                                Workstation chính hãng hàng đầu Việt Nam{" "}
                            </div>
                            <div className="col-xs-12 col-lg-auto ml-auto px-0 px-lg-3">
                                <a target="_blank" href="http://oneshop.asia/">
                                    Cung cấp bởi: Trungthien.asia | E-commerce solutions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
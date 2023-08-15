import React from "react";

export function Footer() {
    return (
        <>
            <footer className="main-footer">
                <div className="main-footer--top">
                    <div className="container-fluid">
                        <div className="row " style={{display:"flex",justifyContent:"center"}}>
                            <div style={{width:"20%"}} >
                                <div className="footer-col footer-link toggle-footer toggle-first">
                                    <div className="footer-title">
                                        <h4>Về Trung Thiện Technology </h4>
                                        <span className="icon-title"></span>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li className="item"><a href="/pages/gioi-thieu-gearvn" title="Giới thiệu">Giới
                                                thiệu</a></li>
                                            <li className="item"><a href="https://tuyendung.gearvn.com/"
                                                                    title="Tuyển dụng">Tuyển dụng</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div style={{width:"17%"}}>
                                <div className="footer-col footer-link toggle-footer">
                                    <div className="footer-title">
                                        <h4>Chính sách </h4>
                                        <span className="icon-title"></span>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li className="item"><a href="/pages/chinh-sach-bao-hanh"
                                                                    title="Chính sách bảo hành">Chính sách bảo hành</a>
                                            </li>
                                            <li className="item"><a href="/pages/huong-dan-thanh-toan-gearvn"
                                                                    title="Chính sách thanh toán">Chính sách thanh
                                                toán</a></li>
                                            <li className="item"><a href="/pages/chinh-sach-giao-hang"
                                                                    title="Chính sách giao hàng">Chính sách giao
                                                hàng</a></li>
                                            <li className="item"><a href="/pages/chinh-sach-bao-mat"
                                                                    title="Chính sách bảo mật">Chính sách bảo mật</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div style={{width:"15%"}}>
                                <div className="footer-col footer-link toggle-footer">
                                    <div className="footer-title">
                                        <h4>Thông tin </h4>
                                        <span className="icon-title"></span>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li className="item"><a href="/pages/he-thong-showroom-gearvn"
                                                                    title="Hệ thống cửa hàng">Hệ thống cửa hàng</a></li>
                                            <li className="item"><a href="/pages/he-thong-showroom-gearvn"
                                                                    title="Trung tâm bảo hành">Trung tâm bảo hành</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div style={{width:"23%"}}>
                                <div className="footer-col footer-block toggle-footer">
                                    <div className="footer-title"><h4>TỔNG ĐÀI HỖ TRỢ <span>(Miễn phí gọi)</span></h4>
                                    </div>
                                    <div className="footer-content">
                                        <div className="list-info">
                                            <p><span>Gọi mua: </span> <a href="tel:18006975">1800.6975 <span> (8:00 - 21:00) </span>
                                            </a></p><p><span>CSKH: </span> <a href="tel:18006173">1800.6173<span> (8:00 - 21:00) </span>
                                        </a></p><p><span>Email: </span> <a
                                            href="mailto:cskh@gearvn.com">cskh@trungthientechnology.com</a></p></div>
                                    </div>
                                </div>
                            </div>
                            <div style={{width:"25%"}}>
                                <div className="footer-col footer-block toggle-footer">
                                    <div className="footer-title"><h4>Đơn vị vận chuyển</h4></div>
                                    <div className="footer-content">
                                        <ul style={{display:"flex"}}>
                                            <li><img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                     src="//theme.hstatic.net/200000722513/1001090675/14/ship_1.png?v=247"
                                                     data-src="//theme.hstatic.net/200000722513/1001090675/14/ship_1.png?v=247"
                                                     alt="Hình thức vận chuyển 1" sizes="73px"/></li>
                                            <li><img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                     src="//theme.hstatic.net/200000722513/1001090675/14/ship_2.png?v=247"
                                                     data-src="//theme.hstatic.net/200000722513/1001090675/14/ship_2.png?v=247"
                                                     alt="Hình thức vận chuyển 2" sizes="73px"/></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-col footer-block toggle-footer">
                                    <div className="footer-title"><h4>Cách thức thanh toán</h4></div>
                                    <div className="footer-content">
                                        <ul className="list-pay">
                                            <li><img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                     src="//theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=247"
                                                     data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=247"
                                                     alt="Phương thức thanh toán 1" sizes="73px"/></li>
                                            <li><img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                     src="//theme.hstatic.net/200000722513/1001090675/14/pay_4.png?v=247"
                                                     data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_4.png?v=247"
                                                     alt="Phương thức thanh toán 4" sizes="73px"/></li>
                                            <li><img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                     src="//theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=247"
                                                     data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=247"
                                                     alt="Phương thức thanh toán 5" sizes="73px"/></li>
                                            <li><img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                     src="//theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=247"
                                                     data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=247"
                                                     alt="Phương thức thanh toán 6" sizes="73px"/></li>
                                            <li><img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                     src="//theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=247"
                                                     data-src="//theme.hstatic.net/200000722513/1001090675/14/pay_8.png?v=247"
                                                     alt="Phương thức thanh toán 8" sizes="73px"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-footer--copyright">
                    <div className="container-fluid">
                        <div className="line">
                            <div className="d-flex align-items-lg-center flex-lg-nowrap flex-wrap">
                                <h4 className="footer-title">Kết nối với chúng tôi</h4>
                                <div className="footer-content   " style={{display:"flex",justifyContent:"space-between"}}>
                                    <div className="social-list">
                                        <a href="https://www.facebook.com/gearvnhcm" target="_blank" rel="nofollow">
                                            <img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                 src="https://file.hstatic.net/200000636033/file/facebook_1_0e31d70174824ea184c759534430deec.png"
                                                 data-src="https://file.hstatic.net/200000636033/file/facebook_1_0e31d70174824ea184c759534430deec.png"
                                                 alt="Gearvn" sizes="220px"/>
                                        </a>
                                        <a href="https://www.tiktok.com/@gearvn.tiktok" target="_blank" rel="nofollow">
                                            <img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                 src="https://file.hstatic.net/200000722513/file/tiktok-logo_fe1e020f470a4d679064cec31bc676e4.png"
                                                 data-src="https://file.hstatic.net/200000722513/file/tiktok-logo_fe1e020f470a4d679064cec31bc676e4.png"
                                                 alt="Gearvn" sizes="220px"/>
                                        </a>
                                        <a href="https://bit.ly/GearvnVideos" target="_blank" rel="nofollow">
                                            <img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                 src="https://file.hstatic.net/200000636033/file/youtube_1_d8de1f41ca614424aca55aa0c2791684.png"
                                                 data-src="https://file.hstatic.net/200000636033/file/youtube_1_d8de1f41ca614424aca55aa0c2791684.png"
                                                 alt="Gearvn" sizes="220px"/>
                                        </a>
                                        <a href="https://gvn360.com/" target="_blank" rel="nofollow">
                                            <img data-sizes="auto" className="lazyautosizes lazyloaded"
                                                 src="https://file.hstatic.net/200000722513/file/2023-06-07_11.08.09_2bc09900263b4b1c8935646b4a7b2d32.jpg"
                                                 data-src="https://file.hstatic.net/200000722513/file/2023-06-07_11.08.09_2bc09900263b4b1c8935646b4a7b2d32.jpg"
                                                 alt="Gearvn" sizes="220px"/>
                                        </a>
                                        <a href="https://www.facebook.com/groups/VietnamGamingConner" target="_blank"
                                           rel="nofollow">
                                            <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded"
                                                 src="https://file.hstatic.net/200000636033/file/group_1_54d23abd89b74ead806840aa9458661d.png"
                                                 data-src="https://file.hstatic.net/200000636033/file/group_1_54d23abd89b74ead806840aa9458661d.png"
                                                 alt="Gearvn" sizes="220px"/>
                                        </a>
                                    </div>
                                    <div className="logo-footer">
                                        <a rel="nofollow" target="_blank"
                                           href="http://online.gov.vn/Home/WebDetails/74686">
                                            <img src="//theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=247"
                                                 data-src="//theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=247"
                                                 className=" lazyloaded" alt="Bộ Công Thương"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p className="d-none">Copyright © 2023 <a href="https://gearvn.com"><strong>Công ty TNHH Trung Thiện Technology</strong></a> <a href="https://www.haravan.com/?hchan=gearvn"
                                                                   rel="nofollow"></a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
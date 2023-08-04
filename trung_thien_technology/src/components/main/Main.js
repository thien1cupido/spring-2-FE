import React from "react";
import {CarouselMain} from "./CarouselMain";
import '../../css/General.scss.css';
import {Content} from "./Content";
import {Product} from "./Product";


export function Main() {
    return (
        <>
            <div className="mainBody-theme body-index">
                <section className="section section-slider">
                    <div className="container-fluid">
                        <div className="index-slider--wrap" style={{height: "565px"}}>
                            <div className="index-slider--nav">
                                <div className="sidebar-menu">
                                    <nav className="megamenu-nav">
                                        <ul className="megamenu-nav-main">

                                            <li className="megamenu-item mg-1">
                                                <a className="megamenu-link" href="/pages/laptop-van-phong">
						<span className="megamenu-icon" data-hover="laptop"><svg width="20" height="13"
                                                                                 viewBox="0 0 20 13" fill="none"
                                                                                 xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_5068_8551" fill="currentcolor">
<path
    d="M4.00002 1C3.44774 1 3.00002 1.44772 3.00002 2V8.5C3.00002 9.05229 3.44774 9.5 4.00002 9.5H16C16.5523 9.5 17 9.05229 17 8.5V2C17 1.44772 16.5523 1 16 1H4.00002ZM3.70002 0H10H16.3C16.7774 0 17.2353 0.184374 17.5728 0.512563C17.9104 0.840752 18.1 1.28587 18.1 1.75V8.75C18.1 9.21413 17.9104 9.65925 17.5728 9.98744C17.2353 10.3156 16.7774 10.5 16.3 10.5H3.70002C3.22263 10.5 2.7648 10.3156 2.42723 9.98744C2.08967 9.65925 1.90002 9.21413 1.90002 8.75V1.75C1.90002 1.28587 2.08967 0.840752 2.42723 0.512563C2.7648 0.184374 3.22263 0 3.70002 0Z"></path>
</mask>
<path
    d="M4.00002 1C3.44774 1 3.00002 1.44772 3.00002 2V8.5C3.00002 9.05229 3.44774 9.5 4.00002 9.5H16C16.5523 9.5 17 9.05229 17 8.5V2C17 1.44772 16.5523 1 16 1H4.00002ZM3.70002 0H10H16.3C16.7774 0 17.2353 0.184374 17.5728 0.512563C17.9104 0.840752 18.1 1.28587 18.1 1.75V8.75C18.1 9.21413 17.9104 9.65925 17.5728 9.98744C17.2353 10.3156 16.7774 10.5 16.3 10.5H3.70002C3.22263 10.5 2.7648 10.3156 2.42723 9.98744C2.08967 9.65925 1.90002 9.21413 1.90002 8.75V1.75C1.90002 1.28587 2.08967 0.840752 2.42723 0.512563C2.7648 0.184374 3.22263 0 3.70002 0Z"
    fill="currentcolor"></path>
<path d="M1 12L19 12" stroke="currentcolor" strokeLinecap="round"></path>
</svg></span>
                                                    <span className="megamenu-name">Laptop</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container"
                                                    style={{display: "none"}}>
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/laptop-van-phong">Thương hiệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-hoc-tap-va-lam-viec">ASUS</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-acer-hoc-tap-va-lam-viec">ACER</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-msi-hoc-tap-va-lam-viec">MSI</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-lenovo-hoc-tap-va-lam-viec">LENOVO</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-hp-van-phong-pho-thong">HP</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-dell-hoc-tap-va-lam-viec">DELL</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-lg-gram">LG Gram</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/laptop-van-phong">Giá bán</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-hoc-tap-va-lam-viec-duoi-15tr">Dưới
                                                                15 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-hoc-tap-va-lam-viec-tu-15tr-den-20tr">Từ
                                                                15 đến 20 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-hoc-tap-va-lam-viec-tren-20-trieu">Trên
                                                                20 triệu</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name" href="#">CPU Intel -
                                                                AMD</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-intel-core-i3">Intel Core
                                                                i3</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-intel-core-i5">Intel Core
                                                                i5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-intel-core-i7">Intel Core
                                                                i7</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-cpu-amd-ryzen">AMD Ryzen</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-intel-gen-13">Intel Gen 13</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name" href="#">Nhu cầu sử
                                                                dụng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-do-hoa">Đồ họa - Studio</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-hoc-sinh-sinh-vien">Học sinh -
                                                                Sinh
                                                                viên</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-cao-cap-mong-nhe">Mỏng nhẹ cao
                                                                cấp</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-studio-rtx-series">Studio RTX
                                                                40
                                                                series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name" href="#">Linh kiện
                                                                Laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ram-laptop">Ram laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ssd-laptop">SSD laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/o-cung-di-dong-hdd-box">Ổ cứng di
                                                                động</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/balo-tui-chong-soc">Phụ kiện
                                                                Laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/balo-tui-chong-soc">Balo - Túi chống
                                                                sốc</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/de-tan-nhiet-laptop">Đế tản nhiệt
                                                                LAPTOP</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-asus-hoc-tap-va-lam-viec">Laptop
                                                                ASUS</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-oled">ASUS OLED Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-vivobook-series">VivoBook
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-vivobook-pro-series">VivoBook
                                                                Pro Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-zenbook-series">Zenbook
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-expertbook">ExpertBook
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-proart">ProArt StudioBook
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-acer-hoc-tap-va-lam-viec">Laptop
                                                                ACER</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-acer-aspire-series">Aspire
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/acer-swift-series">Swift Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-msi-hoc-tap-va-lam-viec">Laptop
                                                                MSI</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/msi-modern-14-series">Modern
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/prestige-series">Prestige Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/laptop-msi-summit-e14-evo-a12m-211vn">Summit
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-msi-creator-series">CREATOR
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-lenovo-hoc-tap-va-lam-viec">Laptop
                                                                LENOVO</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lenovo-thinkbook">ThinkBook Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-ideapad-pro">IdeaPad Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-ideapad-pro">IdeaPad Pro
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lenovo-thinkpad">ThinkPad Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-lenovo-yoga-series">Yoga
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-11">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-dell-hoc-tap-va-lam-viec">Laptop
                                                                DELL</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-dell-inspiron-series">Inspiron
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-dell-vostro-series">Vostro
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-dell-latitude-series">Latitude
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-dell-xps-chinh-hang">XPS
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-12">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-hp-van-phong-pho-thong">Laptop
                                                                HP</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/pavilion-series">Pavilion Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-hp-envy-chinh-hang">Envy
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-hp-probook-series">Probook
                                                                Series</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-2">
                                                <a className="megamenu-link" href="/pages/laptop-gaming">
						<span className="megamenu-icon" data-hover="laptop-gaming"><svg width="23" height="16"
                                                                                        viewBox="0 0 23 16" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_5068_8558" fill="white">
<path
    d="M3.96432 4C3.41203 4 2.96432 4.44772 2.96432 5V11.5C2.96432 12.0523 3.41203 12.5 3.96432 12.5H15.9643C16.5166 12.5 16.9643 12.0523 16.9643 11.5V4H3.96432ZM3.66432 3H9.96432H16.2643C16.7417 3 17.1995 3.18437 17.5371 3.51256C17.8747 3.84075 18.0643 4.28587 18.0643 4.75V11.75C18.0643 12.2141 17.8747 12.6592 17.5371 12.9874C17.1995 13.3156 16.7417 13.5 16.2643 13.5H3.66432C3.18693 13.5 2.72909 13.3156 2.39153 12.9874C2.05396 12.6592 1.86432 12.2141 1.86432 11.75V4.75C1.86432 4.28587 2.05396 3.84075 2.39153 3.51256C2.72909 3.18437 3.18693 3 3.66432 3Z"></path>
</mask>
<path
    d="M3.96432 4C3.41203 4 2.96432 4.44772 2.96432 5V11.5C2.96432 12.0523 3.41203 12.5 3.96432 12.5H15.9643C16.5166 12.5 16.9643 12.0523 16.9643 11.5V4H3.96432ZM3.66432 3H9.96432H16.2643C16.7417 3 17.1995 3.18437 17.5371 3.51256C17.8747 3.84075 18.0643 4.28587 18.0643 4.75V11.75C18.0643 12.2141 17.8747 12.6592 17.5371 12.9874C17.1995 13.3156 16.7417 13.5 16.2643 13.5H3.66432C3.18693 13.5 2.72909 13.3156 2.39153 12.9874C2.05396 12.6592 1.86432 12.2141 1.86432 11.75V4.75C1.86432 4.28587 2.05396 3.84075 2.39153 3.51256C2.72909 3.18437 3.18693 3 3.66432 3Z"
    fill="currentcolor"></path>
<path d="M0.964294 15L18.9643 15" stroke="currentcolor" strokeLinecap="round"></path>
<path
    d="M10.9754 1.87868C11.5771 1.31607 12.3931 1 13.244 1H17.8274C18.2487 1 18.6659 1.0776 19.0551 1.22836C19.4444 1.37913 19.7981 1.6001 20.096 1.87868C20.3939 2.15726 20.6303 2.48797 20.7915 2.85195C20.9527 3.21593 21.0357 3.60603 21.0357 4C21.0357 4.39397 20.9527 4.78407 20.7915 5.14805C20.6303 5.51203 20.3939 5.84274 20.096 6.12132C19.7981 6.3999 19.4444 6.62087 19.0551 6.77164C18.6659 6.9224 18.2487 7 17.8274 7H13.244C12.3931 7 11.5771 6.68393 10.9754 6.12132C10.3737 5.55871 10.0357 4.79565 10.0357 4C10.0357 3.20435 10.3737 2.44129 10.9754 1.87868Z"
    fill="white" stroke="white" strokeWidth="2"></path>
<path
    d="M10.9754 1.87868C11.5771 1.31607 12.3931 1 13.244 1H17.8274C18.2487 1 18.6659 1.0776 19.0551 1.22836C19.4444 1.37913 19.7981 1.6001 20.096 1.87868C20.3939 2.15726 20.6303 2.48797 20.7915 2.85195C20.9527 3.21593 21.0357 3.60603 21.0357 4C21.0357 4.39397 20.9527 4.78407 20.7915 5.14805C20.6303 5.51203 20.3939 5.84274 20.096 6.12132C19.7981 6.3999 19.4444 6.62087 19.0551 6.77164C18.6659 6.9224 18.2487 7 17.8274 7H13.244C12.3931 7 11.5771 6.68393 10.9754 6.12132C10.3737 5.55871 10.0357 4.79565 10.0357 4C10.0357 3.20435 10.3737 2.44129 10.9754 1.87868Z"
    stroke="currentcolor"></path>
<path
    d="M17.625 3.79696C17.5852 3.75567 17.5379 3.72292 17.486 3.70056C17.434 3.67821 17.3782 3.66669 17.322 3.66667C17.2657 3.66665 17.2099 3.67813 17.1579 3.70044C17.1059 3.72276 17.0587 3.75548 17.0189 3.79674C16.9791 3.83799 16.9475 3.88698 16.9259 3.94089C16.9044 3.9948 16.8933 4.05259 16.8932 4.11096C16.8932 4.16932 16.9043 4.22712 16.9258 4.28105C16.9473 4.33498 16.9789 4.38399 17.0187 4.42527C17.099 4.50865 17.208 4.55552 17.3217 4.55556C17.4353 4.5556 17.5443 4.50882 17.6247 4.4255C17.7051 4.34218 17.7503 4.22915 17.7504 4.11127C17.7504 3.9934 17.7053 3.88034 17.625 3.79696Z"
    fill="currentcolor"></path>
<path
    d="M17.871 2.91345C17.9105 2.87101 17.9578 2.83715 18.0101 2.81385C18.0624 2.79056 18.1186 2.7783 18.1755 2.77779C18.2324 2.77727 18.2888 2.78852 18.3415 2.81087C18.3942 2.83321 18.442 2.86622 18.4823 2.90795C18.5225 2.94968 18.5543 2.9993 18.5759 3.05392C18.5974 3.10854 18.6083 3.16706 18.6078 3.22608C18.6073 3.28509 18.5955 3.34341 18.573 3.39763C18.5505 3.45186 18.5179 3.5009 18.477 3.5419C18.3961 3.62286 18.2879 3.66766 18.1755 3.66664C18.0631 3.66563 17.9556 3.61889 17.8762 3.53648C17.7967 3.45408 17.7516 3.34261 17.7507 3.22608C17.7497 3.10955 17.7929 2.99728 17.871 2.91345Z"
    fill="currentcolor"></path>
<path
    d="M19.343 3.80236C19.3034 3.75991 19.2561 3.72605 19.2039 3.70275C19.1516 3.67946 19.0953 3.6672 19.0384 3.66669C18.9815 3.66618 18.9251 3.67742 18.8724 3.69977C18.8197 3.72212 18.7719 3.75512 18.7317 3.79685C18.6914 3.83858 18.6596 3.8882 18.638 3.94282C18.6165 3.99744 18.6056 4.05597 18.6061 4.11498C18.6066 4.17399 18.6185 4.23231 18.6409 4.28654C18.6634 4.34076 18.696 4.3898 18.737 4.4308C18.8178 4.51176 18.9261 4.55656 19.0384 4.55554C19.1508 4.55453 19.2583 4.50779 19.3377 4.42539C19.4172 4.34298 19.4623 4.23151 19.4633 4.11498C19.4642 3.99845 19.421 3.88618 19.343 3.80236Z"
    fill="currentcolor"></path>
<path
    d="M17.8763 4.68562C17.9161 4.64436 17.9634 4.61164 18.0154 4.58933C18.0674 4.56701 18.1231 4.55554 18.1794 4.55556C18.2357 4.55558 18.2914 4.56709 18.3434 4.58945C18.3954 4.6118 18.4426 4.64456 18.4824 4.68584C18.5222 4.72713 18.5537 4.77614 18.5752 4.83007C18.5968 4.884 18.6078 4.94179 18.6078 5.00016C18.6078 5.05852 18.5967 5.11631 18.5751 5.17023C18.5536 5.22414 18.522 5.27313 18.4822 5.31438C18.4018 5.3977 18.2927 5.44449 18.1791 5.44445C18.0654 5.4444 17.9564 5.39754 17.8761 5.31416C17.7957 5.23078 17.7506 5.11772 17.7507 4.99984C17.7507 4.88197 17.7959 4.76894 17.8763 4.68562Z"
    fill="currentcolor"></path>
<path
    d="M12.6058 4.55555H11.7487V3.66666H12.6058V2.77777H13.463V3.66666H14.3201V4.55555H13.463V5.44444H12.6058V4.55555Z"
    fill="currentcolor"></path>
</svg></span>
                                                    <span className="megamenu-name">Laptop Gaming</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container"
                                                    style={{display: "none"}}>
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/laptop-gaming">Thương hiệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-acer">ACER /
                                                                PREDATOR</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-asus">ASUS / ROG</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-msi-gaming">MSI</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-lenovo">LENOVO</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-dell">DELL</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-gigabyte">GIGABYTE /
                                                                AORUS</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-hp">HP</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/laptop-gaming">Giá bán</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-gia-duoi-20-trieu">Dưới
                                                                20
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-gia-tu-20-den-25-trieu">Từ
                                                                20 đến 25 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-gia-tu-25-den-35-trieu">Từ
                                                                25 đến 30 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-tren-35-trieu">Trên 30
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-cao-cap-gia-soc">Gaming
                                                                cao
                                                                cấp</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/laptop-nvidia-rtx-40-series">Gaming RTX 40
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-gaming-acer">ACER |
                                                                PREDATOR</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-acer-nitro-series">Nitro
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-acer-aspire-7">Aspire
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-acer-predator-series">Predator
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-acer-conceptd">ConceptD
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/acer-rtx-40-series">ACER RTX 40
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-gaming-asus">ASUS | ROG
                                                                Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-rog-series">ROG Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-tuf-gaming-series">TUF
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-asus-gaming-zephyrus-series">Zephyrus
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-asus-rog-strix-g">ROG
                                                                Strix
                                                                G</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/laptop-gaming-asus-rog-flow-z13-gz301zc-ld110w">ROG
                                                                Flow series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tuf-rtx-40-series">TUF RTX 40
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/rog-rtx-4000-series">ROG RTX 40
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/may-choi-game-asus-rog-ally">ROG Ally</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-msi-gaming">MSI Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-msi-gf-series">GF Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-msi-gs-series">GS Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-msi-bravo-series">Bravo
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-msi-creator-series">Creator
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/msi-amd-series">MSI AMD Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/msi-crosshair-series">Crosshair
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/msi-rtx-40-series">MSI RTX 40
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-gaming-lenovo">LENOVO
                                                                Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-lenovo-legion">Legion
                                                                Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-ideapad-gaming">Ideapad
                                                                Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gaming-lenovo-rtx-40-series">Lenovo
                                                                RTX 40 Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-gaming-dell">DELL Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/dell-gaming-g-series">Dell Gaming G
                                                                series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-alienware">Alienware series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-dell-rtx-40-series">Dell RTX 40
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/laptop-gaming-gigabyte">GIGABYTE
                                                                Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gigabyte-g-series">GIGABYTE G5
                                                                |
                                                                G7</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gigabyte-aorus-series">GIGABYTE
                                                                AORUS</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/gigabyte-aero">GIGABYTE AERO</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-gigabyte-rtx-40-series">GIGABYTE
                                                                RTX 40 Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name" href="#">Card đồ
                                                                hoạ</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-nvidia-gtx-1650">GTX 1650</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-nvidia-rtx-3050-3050ti">RTX
                                                                3050 /
                                                                3050Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-nvidia-rtx-3060">RTX 3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-nvidia-rtx-cao-cap">RTX 3070 /
                                                                3080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-amd-radeon-rx">AMD Radeon
                                                                RX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/laptop-rtx-40-series">RTX 40
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name" href="#">Linh Kiện
                                                                Laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ram-laptop">Ram laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ssd-laptop">SSD laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/o-cung-di-dong-hdd-box">Ổ cứng di
                                                                động</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-11">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/linh-kien-phu-kien-laptop/">Phụ kiện
                                                                Laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/de-tan-nhiet-laptop">Đế tản nhiệt</a>

                                                        </div>

                                                    </div>

                                                </div>

                                            </li>

                                            <li className="megamenu-item mg-3">
                                                <a className="megamenu-link" href="/collections/top-pc-ban-chay">
						<span className="megamenu-icon" data-hover="pc-km-dac-biet"><svg width="20" height="20"
                                                                                         viewBox="0 0 20 20" fill="none"
                                                                                         xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="19" width="18" height="10" rx="1" transform="rotate(-90 1 19)" stroke="currentcolor"></rect>
<path d="M13 3H17C18.1046 3 19 3.89543 19 5V13C19 14.1046 18.1046 15 17 15H13" stroke="currentcolor"></path>
<path d="M16.5 18.5C16.7761 18.5 17 18.2761 17 18C17 17.7239 16.7761 17.5 16.5 17.5V18.5ZM13 18.5H16.5V17.5H13V18.5Z"
      fill="currentcolor"></path>
<circle cx="6" cy="5" r="1" fill="currentcolor"></circle>
<circle cx="6" cy="9" r="1" fill="currentcolor"></circle>
</svg></span>
                                                    <span className="megamenu-name">PC KM Đặc Biệt</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container"
                                                    style={{display: " none"}}>
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/top-pc-ban-chay">Giá tốt chơi hè</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-plus-a3050">Viper Plus a3050 -
                                                                Mua
                                                                màn 1,000đ</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-i1660s">Viper i1660s (11th) -
                                                                Mua
                                                                tản 1,000đ</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/pc-gvn-viper-a4060">Viper a4060 - Tặng
                                                                màn
                                                                hình</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i1650-gen-12">Minion i1650 -
                                                                9,990K</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/top-pc-ban-chay">KHUYẾN MÃI ĐẶC
                                                                BIỆT</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-plus-i4090">Titan Plus i4090 -
                                                                Tặng
                                                                tản nhiệt + voucher 5tr</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-plus-i4070ti">Phantom Plus
                                                                i4070Ti - Tặng tản nhiệt</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/pc-gvn-phantom-i4070ti">Phantom i4070TI -
                                                                Mua
                                                                màn 1,000đ</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-i4070">Phantom i4070 - Tặng
                                                                tản
                                                                nhiệt</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-i4060ti">Phantom i4060TI -
                                                                Tặng
                                                                tản nhiệt</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-plus-i4070">Viper Plus i4070 -
                                                                Tặng
                                                                tản nhiệt</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/top-pc-ban-chay">KHUYẾN MÃI ĐẶC
                                                                BIỆT</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-plus-i3060-white-edition">Viper
                                                                Plus i3060 WHITE - Voucher màn hình 1tr5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-i3060">Viper i3060 - Voucher
                                                                màn
                                                                hình 2tr</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-i3050-power-by-gigabyte">Viper
                                                                i3050 - Voucher màn hình 1tr500</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i3050">Minion i3050 - Voucher
                                                                màn
                                                                hình 1tr500</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i1650">Minion i1650 WHITE -
                                                                Tặng
                                                                RAM</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/pc-gaming-gvn-white">GVN WHITE EDITION</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-poseidon-9-i3090">Poseidon 9
                                                                i3090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-poseidon-s-white">Poseidon S
                                                                WHITE</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-plus-i4080">Phantom Plus
                                                                i4080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-plus-i3060-white-edition">Viper
                                                                Plus i3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i1650">Minion i1650</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/pc-custom-nuoc">GVN POSEIDON - CUSTOM
                                                                NƯỚC</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-poseidon-5-i3060">Poseidon 5 i3060 -
                                                                Tặng
                                                                tản nhiệt custom</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-poseidon-7-i3070">Poseidon 7 i3060 -
                                                                Tặng
                                                                tản nhiệt custom</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-poseidon-s-white">Poseidon S WHITE -
                                                                i5 -
                                                                3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-poseidon-plus-i3060">Poseidon S - i5
                                                                -
                                                                3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-poseidon-7-i3080">Poseidon 7
                                                                i3080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-poseidon-9-i3090">Poseidon 9
                                                                i3090</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/top-pc-ban-chay">GIAN HÀNG CHÍNH
                                                                HÃNG</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/asus-official-store">Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/pc-amd">AMD</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/corsair-icue">Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/nzxt-official-store">NZXT</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-4">
                                                <a className="megamenu-link" href="/pages/pc-gvn">
						<span className="megamenu-icon" data-hover="pc-gaming"><svg width="20" height="20"
                                                                                    viewBox="0 0 20 20" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="19" width="18" height="10" rx="1" transform="rotate(-90 1 19)" stroke="currentcolor"></rect>
<path d="M13 3H17C18.1046 3 19 3.89543 19 5V13C19 14.1046 18.1046 15 17 15H13" stroke="currentcolor"></path>
<path d="M16.5 18.5C16.7761 18.5 17 18.2761 17 18C17 17.7239 16.7761 17.5 16.5 17.5V18.5ZM13 18.5H16.5V17.5H13V18.5Z"
      fill="currentcolor"></path>
<circle cx="6" cy="5" r="1" fill="currentcolor"></circle>
<circle cx="6" cy="9" r="1" fill="currentcolor"></circle>
</svg></span>
                                                    <span className="megamenu-name">PC Gaming</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/pc-gaming-gvn-titan">GVN TITAN - Core
                                                                i9</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-plus-i4090">Titan Plus
                                                                i4090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-plus-i4080">Titan Plus
                                                                i4080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-plus-i4070ti">Titan Plus
                                                                i4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-i3060">Titan i3060</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/pc-gaming-gvn-phantom">GVN PHANTOM -
                                                                Core
                                                                i7</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-plus-i4080">Phantom Plus
                                                                i4080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-plus-i4070ti">Phantom Plus
                                                                i4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/pc-gvn-phantom-i4070ti">Phantom
                                                                i4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-i4070">Phantom i4070</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-i4060ti">Phantom i4060Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/pc-gvn-phantom-i4060/">Phantom i4060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-i3060">Phantom i3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-i3050">Phantom i3050</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/pc-gaming-gvn-viper">GVN VIPER - Core
                                                                i5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-plus-i4070">Viper Plus
                                                                i4070</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-plus-i3060-white-edition">Viper
                                                                Plus i3060 White</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-plus-i3060">Viper Plus
                                                                i3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-i4060ti">Viper i4060Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/pc-gvn-viper-i4060/">Viper i4060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-i3060">Viper i3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-i3050-power-by-gigabyte">Viper
                                                                i3050</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-i1660s">Viper i1660S (11th)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-i1650">Viper i1650 (11th)</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/pc-gaming-gvn-minion">GVN MINION -
                                                                Core
                                                                i3</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i3050">Minion i3050</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i1660s">Minion i1660S</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i1650-gen-12">Minion i1650</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i1650">Minion i1650 WHITE</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i1030">Minion i1030</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-minion-i730">Minion i730</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/pc-gaming-gvn-titan">GVN TITAN - Ryzen
                                                                9</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-plus-a4090">Titan Plus
                                                                a4090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-plus-a4080">Titan Plus
                                                                a4080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-plus-a4070ti">Titan Plus
                                                                a4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-titan-a3060">Titan a3060</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/pc-gaming-gvn-phantom">GVN PHANTOM -
                                                                Ryzen
                                                                7</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-plus-a4080">Phantom Plus
                                                                a4080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-plus-a4070ti">Phantom Plus
                                                                a4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-phantom-a3060">Phantom a3060</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/pc-gaming-gvn-viper">GVN VIPER - Ryzen
                                                                5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-plus-a3050">Viper Plus
                                                                a3050</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-a3060">Viper a3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-a1660s">Viper a1660S</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-viper-a1650">Viper a1650</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-5">
                                                <a className="megamenu-link" href="/pages/pc-thiet-ke-do-hoa">
						<span className="megamenu-icon" data-hover="pc-do-hoa"><svg width="20" height="20"
                                                                                    viewBox="0 0 20 20" fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="19" width="18" height="10" rx="1" transform="rotate(-90 1 19)" stroke="currentcolor"></rect>
<path d="M13 3H17C18.1046 3 19 3.89543 19 5V13C19 14.1046 18.1046 15 17 15H13" stroke="currentcolor"></path>
<path d="M16.5 18.5C16.7761 18.5 17 18.2761 17 18C17 17.7239 16.7761 17.5 16.5 17.5V18.5ZM13 18.5H16.5V17.5H13V18.5Z"
      fill="currentcolor"></path>
<circle cx="6" cy="5" r="1" fill="currentcolor"></circle>
<circle cx="6" cy="9" r="1" fill="currentcolor"></circle>
</svg></span>
                                                    <span className="megamenu-name">PC Đồ Họa</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/pc-thiet-ke-do-hoa">Thiết kế 2D</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-5-a3050">G-Studio 5 Plus
                                                                a3050</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-5-i1660s">G-Studio 5
                                                                i1660S</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/pc-thiet-ke-do-hoa">Thiết kế 3D kiến trúc,
                                                                mô
                                                                phỏng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-i4070ti">G-Studio 9
                                                                Plus
                                                                i4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-a4070ti">G-Studio 9
                                                                Plus
                                                                a4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-plus-a4070ti">G-Studio 7
                                                                Plus
                                                                a4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-plus-i4070ti">G-Studio 7
                                                                Plus
                                                                i4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-a3060">G-Studio 7
                                                                a3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-i3060">G-Studio 7
                                                                i3060</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/pc-thiet-ke-do-hoa">Hoạt họa và chỉnh sửa
                                                                video</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-a7900xtx">G-Studio 9
                                                                Plus
                                                                a7900XTX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-a4090">G-Studio 9
                                                                Plus
                                                                a4090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-i4090">G-Studio 9
                                                                Plus
                                                                i4090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-a4070ti">G-Studio 9
                                                                Plus
                                                                a4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-i4070ti">G-Studio 9
                                                                Plus
                                                                i4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-plus-a4070ti">G-Studio 7
                                                                Plus
                                                                a4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-plus-i4070ti">G-Studio 7
                                                                Plus
                                                                i4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-a3060">G-Studio 7
                                                                a3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-i3060">G-Studio 7
                                                                i3060</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/pc-thiet-ke-do-hoa">Render</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-a7900xtx">G-Studio 9
                                                                Plus
                                                                a7900XTX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-a4090">G-Studio 9
                                                                Plus
                                                                a4090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-i4090">G-Studio 9
                                                                Plus
                                                                i4090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-a4070ti">G-Studio 9
                                                                Plus
                                                                a4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-9-plus-i4070ti">G-Studio 9
                                                                Plus
                                                                i4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-plus-a4070ti">G-Studio 7
                                                                Plus
                                                                a4070Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-g-studio-7-plus-i4070ti">G-Studio 7
                                                                Plus
                                                                i4070Ti</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-6">
                                                <a className="megamenu-link" href="/pages/pc-van-phong">
						<span className="megamenu-icon" data-hover="pc-doanh-nghiep"><svg width="20" height="20"
                                                                                          viewBox="0 0 20 20"
                                                                                          fill="none"
                                                                                          xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="19" width="18" height="10" rx="1" transform="rotate(-90 1 19)" stroke="currentcolor"></rect>
<path d="M13 3H17C18.1046 3 19 3.89543 19 5V13C19 14.1046 18.1046 15 17 15H13" stroke="currentcolor"></path>
<path d="M16.5 18.5C16.7761 18.5 17 18.2761 17 18C17 17.7239 16.7761 17.5 16.5 17.5V18.5ZM13 18.5H16.5V17.5H13V18.5Z"
      fill="currentcolor"></path>
<circle cx="6" cy="5" r="1" fill="currentcolor"></circle>
<circle cx="6" cy="9" r="1" fill="currentcolor"></circle>
</svg></span>
                                                    <span className="megamenu-name">PC Doanh Nghiệp</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/giai-phap-pc-van-phong">Giải pháp trọn
                                                                bộ
                                                                GEARVN</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-pentium-man-hinh">Homework
                                                                Pentium + Màn hình</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-i3-man-hinh">Homework I3 +
                                                                Màn
                                                                hình</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/gvn-homework">Cấu hình GVN
                                                                Homework</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-pentium">Homework Pentium -
                                                                G6405</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-i3">Homework I3 - 10105</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-i3-gen-12">Homework I3 -
                                                                12100</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-i5-gen-12">Homework I5 -
                                                                12400</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-i7">Homework I7 - 12700</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-r3">Homework R3 - 3200G</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/gvn-homework-r5">Homework R5 - 5600G</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/may-bo-mini">Máy bộ Intel® NUC</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/nuc-celeron-pentium">NUC
                                                                Celeron/Pentium</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/pc-van-phong">NUC10 (CPU Intel 10th gen)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/nuc11-cpu-intel-11st-gen">NUC11 (CPU
                                                                Intel
                                                                11st gen)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/pc-van-phong">NUC Extreme kit - Hiệu năng
                                                                cao</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/may-bo-mini">Máy bộ Mini PC</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/asus-mini-pc-pn63-s1">ASUS Mini PC
                                                                PN63-S1</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/hp-prodesk-400-g6-mini">HP ProDesk 400
                                                                G6
                                                                Mini</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/hp-elitedesk-800-g6-mini">HP EliteDesk
                                                                800
                                                                G6 Mini</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/may-tinh-all-in-one">Máy tính để bàn
                                                                All
                                                                In One</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-7">
                                                <a className="megamenu-link" href="/pages/linh-kien-may-tinh">
						<span className="megamenu-icon" data-hover="linh-kien-pc"><svg width="18" height="18"
                                                                                       viewBox="0 0 18 18" fill="none"
                                                                                       xmlns="http://www.w3.org/2000/svg">
<rect x="3" y="3" width="12" height="12" rx="2" stroke="currentcolor"></rect>
<rect x="5" y="5" width="2" height="2" fill="currentcolor"></rect>
<rect x="6" y="15" width="1" height="3" rx="0.5" fill="currentcolor"></rect>
<rect x="3" y="6" width="1" height="3" rx="0.5" transform="rotate(90 3 6)" fill="currentcolor"></rect>
<rect x="6" width="1" height="3" rx="0.5" fill="currentcolor"></rect>
<rect x="18" y="6" width="1" height="3" rx="0.5" transform="rotate(90 18 6)" fill="currentcolor"></rect>
<rect x="11" y="15" width="1" height="3" rx="0.5" fill="currentcolor"></rect>
<rect x="3" y="11" width="1" height="3" rx="0.5" transform="rotate(90 3 11)" fill="currentcolor"></rect>
<rect x="11" width="1" height="3" rx="0.5" fill="currentcolor"></rect>
<rect x="18" y="11" width="1" height="3" rx="0.5" transform="rotate(90 18 11)" fill="currentcolor"></rect>
</svg></span>
                                                    <span className="megamenu-name">Linh kiện PC</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container"
                                                    style={{display: " none"}}>
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/vga-card-man-hinh">VGA - Card màn
                                                                hình</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-4090">RTX Ada 4090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-4080">RTX Ada 4080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-4070-ti">RTX Ada 4070 Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-4070">RTX Ada 4070</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-4060-ti">RTX Ada 4060 Ti
                                                                (Mới)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-4060">RTX Ada 4060 (Mới)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-ampere-3090-ti">RTX Ampere
                                                                3090
                                                                Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-ampere-3090">RTX Ampere
                                                                3090</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-ampere-3080">RTX Ampere
                                                                3080</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-ampere-3070-ti">RTX Ampere
                                                                3070
                                                                Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-ampere-3070">RTX Ampere
                                                                3070</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/nvidia-quadro">NVIDIA Quadro</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/vga-card-man-hinh">VGA - Card màn
                                                                hình</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-ampere-3060-ti">RTX Ampere
                                                                3060
                                                                Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-ampere-3060-12gb">RTX Ampere
                                                                3060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-rtx-ampere-3050">RTX Ampere
                                                                3050</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/gtx-1660-series-rtx-2060-series">GTX
                                                                1660
                                                                - RTX 2060</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-gtx-1650-4g">GTX 1650 - 1650 Super
                                                                4G</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/gt-710-gt-1030-gtx-1050-ti">GT
                                                                710/1030 -
                                                                GTX 1050 Ti</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vga-intel-arc-a380">Intel Arc A380</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/radeon-rx">AMD Radeon RX</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/cpu-bo-vi-xu-ly">CPU - Bộ vi xử lý</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-intel-core-i9">Intel Core i9</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-intel-core-i7">Intel Core i7</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-intel-core-i5">Intel Core i5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-intel-core-i3">Intel Core i3</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-intel-celeron-pentium">Intel
                                                                Celeron -
                                                                Pentium</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/intel-xeon">Intel Xeon</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-amd-ryzen-9">AMD Ryzen 9</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-amd-ryzen-7">AMD Ryzen 7</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-amd-ryzen-5">AMD Ryzen 5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-amd-ryzen-3">AMD Ryzen 3</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cpu-amd-threadripper">AMD
                                                                Threadripper</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/mainboard-bo-mach-chu">Bo mạch chủ</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-intel-z790-raptor-lake">Intel
                                                                Z790 (Mới)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-z690">Intel Z690</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-intel-b760-raptor-lake">Intel
                                                                B760 (Mới)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-intel-b660-alder-lake">Intel
                                                                B660</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-intel-h610-alder-lake">Intel
                                                                H610</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-intel-h510">Intel H510</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-x299x-lga2066">Intel
                                                                X299X</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-amd-x670">AMD X670 (Mới)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-ryzen-x570">AMD X570</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-amd-b650">AMD B650 (Mới)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/main-amd-ryzen-b550-socket-am4">AMD
                                                                B550</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/main-amd-ryzen-a320-socket-am4">AMD
                                                                A320</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/main-amd-ryzen-trx40-socket-str4">AMD
                                                                TRX40</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ram-pc">Ram - Bộ nhớ trong</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ram-pc-ddr5">RAM DDR5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ram-rgb-ddr4">Ram LED RGB - DDR4</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ddr4-8gb">Ram 8GB - DDR4</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ddr4-16g">Ram 16GB - DDR4</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ram-pc-corsair">Ram Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ram-pc-gskill">Ram G.Skill</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ram-pc-kingston">Ram Kingston</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ssd-o-cung-the-ran">Lưu trữ SSD -
                                                                HDD</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ssd-pcie-4-0">SSD M.2 PCIe NVMe Gen
                                                                4</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ssd-m-2-pcie-gen-3x4">SSD M.2 PCIe
                                                                NVMe</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ssd-sata-3">SSD 2.5' SATA 3</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ssd-240g">SSD 240G - 256G</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ssd-480-512gb">SSD 480G - 512G</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ssd-tren-1tb">SSD trên 1TB</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/hdd-o-cung-pc">HDD</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/case-thung-may-tinh">Case - Vỏ Máy
                                                                Tính</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-duoi-1-trieu">Case Dưới 1
                                                                Triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-tu-1-trieu-den-2-trieu">Case Từ 1
                                                                đến
                                                                2 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-tren-2-trieu">Case trên 2
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-in-win">Case InWin</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-lian-li">Case Lian Li</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-nzxt">Case NZXT</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-corsair">Case Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-thermaltake">Case Thermaltake</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/psu-nguon-may-tinh">PSU - Nguồn Máy
                                                                Tính</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tren-1000w">Nguồn Trên 1000W</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/700w-800w">Nguồn 700W-850W</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/500-600w">Nguồn 550W-650W</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/400-500w">Nguồn 300W-500W</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/nguon-corsair">Nguồn Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/nzxt-official-store">Nguồn NZXT</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/psu-coller-master">Nguồn Cooler
                                                                Master</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/fan-rgb-tan-nhiet-pc">Tản nhiệt - Fan
                                                                RGB</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tan-nhiet-khi">Tản nhiệt khí</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tan-nhiet-nuoc-240mm">Tản nhiệt AIO
                                                                240mm</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tan-nhiet-nuoc-280mm">Tản nhiệt AIO
                                                                280mm</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tan-nhiet-nuoc-360mm">Tản nhiệt AIO
                                                                360mm</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tan-nhiet-nuoc-420mm">Tản nhiệt AIO
                                                                420mm</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/fan-led-trang-tri">Fan RGB</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/phu-kien-may-tinh">Phụ kiện máy
                                                                tính</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/pc-van-phong">Linh kiện PC ITX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mainboard-mini-itx">Bo mạch chủ
                                                                ITX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/case-itx-sfx">Case ITX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/nguon-sfx">Nguồn SFX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tan-nhiet-nuoc-120mm">Tản nhiệt AIO
                                                                120mm</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-8">
                                                <a className="megamenu-link" href="/collections/macbook">
						<span className="megamenu-icon" data-hover="apple"><svg width="15" height="20"
                                                                                viewBox="0 0 15 20" fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg">
<path
    d="M13.0964 8.76235C11.9359 9.46803 11.3612 10.4251 11.3687 11.6949C11.3687 11.7601 11.2478 13.8101 13.5 14.8733C13.0797 16.1469 11.6365 18.9752 9.95708 18.9994C8.98627 18.9994 8.41717 18.3812 7.31803 18.3812C6.18541 18.3812 5.56981 18.9789 4.69943 18.9994C3.03491 19.0497 1.4392 15.9383 0.996566 14.6685C0.665522 13.704 0.5 12.7674 0.5 11.8606C0.5 8.79214 2.54764 7.28395 4.47439 7.25416C5.40801 7.25416 6.59456 7.93564 7.11345 7.93564C7.60443 7.93564 8.94535 7.12382 10.171 7.22065C11.4654 7.31933 12.4474 7.83137 13.0964 8.76235Z"
    stroke="currentcolor"></path>
<path
    d="M11.0011 1.00838C11.0296 1.38214 11.1068 2.39558 10.171 3.50806C9.49399 4.29939 8.67196 4.76302 7.77182 4.69413C7.69557 3.73894 8.05079 2.89175 8.65522 2.20655C9.20386 1.5679 10.1672 1.04841 11.0004 1L11.0011 1.00838Z"
    stroke="currentcolor"></path>
</svg></span>
                                                    <span className="megamenu-name">Apple</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/macbook">MacBook</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/macbook-air">MacBook Air</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/macbook-pro">Macbook Pro</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/macbook-air">MacBook Air</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/macbook-air-m1">MacBook Air M1</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/macbook-air-m2">MacBook Air M2</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/macbook-pro">MacBook Pro</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/macbook-pro-13">MacBook Pro 13</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/macbook-pro-14">MacBook Pro 14</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/macbook-pro-16-inch">MacBook Pro
                                                                16</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/macbook-pro-13">MacBook Pro 13</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/macbook-pro-14">MacBook Pro 14</a>

                                                            <a className="sub-megamenu-item-filter" href="/">MBP 14 M2
                                                                Pro</a>

                                                            <a className="sub-megamenu-item-filter" href="/">MBP 14 M2
                                                                Max</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/macbook-pro-16-inch">MacBook Pro
                                                                16</a>

                                                            <a className="sub-megamenu-item-filter" href="/">MBP 16 M2
                                                                Pro</a>

                                                            <a className="sub-megamenu-item-filter" href="/">MBP 16 M2
                                                                Max</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/imac">iMac</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/imac-24-2021">iMac M1 24"</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/mac-mini">Mac mini</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mac-mini">Mac Mini M1</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mac-mini-m2">Mac Mini M2</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/phu-kien-apple">Phụ kiện Apple</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/phim-chuot-apple">Bàn phím, Chuột</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/thiet-bi-am-thanh-apple">Thiết bị âm
                                                                thanh</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/mac-studio">Mac Studio</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-11">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/phu-kien-hyperdrive">Phụ kiện
                                                                HyperDrive</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-9">
                                                <a className="megamenu-link" href="/pages/man-hinh">
						<span className="megamenu-icon" data-hover="man-hinh"><svg width="18" height="16"
                                                                                   viewBox="0 0 18 16" fill="none"
                                                                                   xmlns="http://www.w3.org/2000/svg">
<path
    d="M2 1.03226C1.44772 1.03226 1 1.47997 1 2.03226V10.3548C1 10.9071 1.44772 11.3548 2 11.3548H16C16.5523 11.3548 17 10.9071 17 10.3548V2.03226C17 1.47997 16.5523 1.03226 16 1.03226H2ZM2 0H16C16.5304 0 17.0391 0.217511 17.4142 0.604683C17.7893 0.991854 18 1.51697 18 2.06452V10.3226C18 10.8701 17.7893 11.3952 17.4142 11.7824C17.0391 12.1696 16.5304 12.3871 16 12.3871H2C1.46957 12.3871 0.960859 12.1696 0.585786 11.7824C0.210714 11.3952 0 10.8701 0 10.3226V2.06452C0 1.51697 0.210714 0.991854 0.585786 0.604683C0.960859 0.217511 1.46957 0 2 0Z"
    fill="currentcolor"></path>
<rect x="8" y="11.871" width="2" height="4.12903" fill="currentcolor"></rect>
<path d="M5 15.4839L13 15.4839" stroke="currentcolor" strokeLinecap="round"></path>
</svg></span>
                                                    <span className="megamenu-name">Màn hình</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/man-hinh">Hãng
                                                                sản xuất</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/monitor-lg">LG</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-asus">Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-viewsonic">ViewSonic</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-dell">Dell</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-gigabyte">Gigabyte</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-aoc">AOC</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-acer">Acer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/hkc">HKC</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/man-hinh">Hãng
                                                                sản xuất</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-msi">MSI</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-lenovo">Lenovo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-samsung">Samsung</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-cooler-master">Cooler
                                                                Master</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-philips">Philips</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-lc-power">LC-Power</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-alienware">Alienware</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/man-hinh">Giá
                                                                tiền</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-duoi-5-trieu">Dưới 5
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-tu-5-den-10-trieu">Từ 5 triệu
                                                                đến
                                                                10 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-tu-10-den-20-trieu">Từ 10
                                                                triệu
                                                                đến 20 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-tu-20-trieu-den-30-trieu">Từ
                                                                20
                                                                triệu đến 30 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-tren-30-trieu">Trên 30
                                                                triệu</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/man-hinh">Độ
                                                                Phân giải</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/do-phan-giai-full-hd-1080p">Full HD
                                                                1080p</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/do-phan-giai-2k-1440p">2K 1440p</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-may-tinh-4k-uhd">Màn hình máy
                                                                tính 4K UHD</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/man-hinh-144hz">Tần số quét</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-60hz">60Hz</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-75hz">75Hz</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-100hz">100Hz</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-144hz">144Hz</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-240hz">240Hz</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/man-hinh-cong">Màn hình cong</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/24-curve">24" Curved</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/27-curve">27" Curved</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/32-curve">32" Curved</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tren-32-curve">Trên 32" Curved</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/man-hinh">Kích
                                                                thước</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-22-inch">Màn hình 22"</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-24-inch">Màn hình 24"</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-27-inch">Màn hình 27"</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-29">Màn hình 29"</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-32">Màn hình 32"</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-tren-32">Màn hình Trên
                                                                32"</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-co-chuan-vesa-treo-tuong">Hỗ
                                                                trợ
                                                                giá treo (VESA)</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/man-hinh-do-hoa">Màn hình đồ họa</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-do-hoa-24-inch">Màn hình đồ
                                                                họa
                                                                24"</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-do-hoa-27-inch">Màn hình đồ
                                                                họa
                                                                27"</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-do-hoa-32-inch">Màn hình đồ
                                                                họa
                                                                32"</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/phu-kien-man-hinh">Phụ kiện màn
                                                                hình</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/gia-treo-man-hinh">Giá treo màn
                                                                hình</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/phu-kien-day-cap-hdmi-dp-lan-usbc">Phụ
                                                                kiện dây HDMI,DP,LAN</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/man-hinh-di-dong">Màn hình di động</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-di-dong-do-phan-giai-full-hd-1080p">Full
                                                                HD 1080p</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-di-dong-do-phan-giai-2k-1440p">2K
                                                                1440p</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/man-hinh-di-dong-co-cam-ung">Có cảm
                                                                ứng</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-11">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/may-chieu">Máy chiếu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/may-chieu-asus">Máy chiếu Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/may-chieu-beecube">Máy chiếu
                                                                Beecube</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/may-chieu-wanbo">Máy chiếu Wanbo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/may-chieu-viewsonic">Máy chiếu
                                                                ViewSonic</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-10">
                                                <a className="megamenu-link" href="/pages/ban-phim-may-tinh">
						<span className="megamenu-icon" data-hover="ban-phim"><svg width="20" height="14"
                                                                                   viewBox="0 0 20 14" fill="none"
                                                                                   xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="18" height="12" rx="1" stroke="currentcolor"></rect>
<rect x="4" y="8" width="7" height="2" fill="currentcolor"></rect>
<rect x="4" y="4" width="2" height="2" fill="currentcolor"></rect>
<rect x="9" y="4" width="2" height="2" fill="currentcolor"></rect>
<rect x="14" y="4" width="2" height="2" fill="currentcolor"></rect>
<rect x="14" y="8" width="2" height="2" fill="currentcolor"></rect>
</svg></span>
                                                    <span className="megamenu-name">Bàn phím</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ban-phim-may-tinh">Thương hiệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-akko">Akko</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-logitech">Logitech</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-asus">Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-choi-game-razer">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-choi-game-corsair">Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-leopold">Leopold</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-ikbc-durgod">iKBC /
                                                                Durgod</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-steelseries">Steelseries</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-co-vortex">Vortex</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-co-iqunix">IQUNIX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-co-fl-esports">FL-Esports</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-ducky">Ducky</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ban-phim-may-tinh">Thương hiệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-dare-u">Dare-U</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-e-dra">E-Dra</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-rapoo">Rapoo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-fuhlen">Fuhlen</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-hyperx">HyperX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-ajazz">Ajazz</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-havit">Havit</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-co-varmilo">Varmilo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-newmen">Newmen</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mikit">Mikit (Mới)</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ban-phim-may-tinh">Giá tiền</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-duoi-1-trieu">Dưới 1
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-1-den-2-trieu">1 triệu - 2
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-2-den-3-trieu">2 triệu - 3
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-tu-3-den-4-trieu">3 triệu - 4
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-tren-4-trieu">Trên 4
                                                                triệu</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ban-phim-akko">Thương hiệu Akko</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/acr-series">ACR Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/pc75b-series">PC75B Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/3068-series">3068 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/3084-series">3084 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/3087-series">3087 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/3098-series">3098 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/3108-series">3108 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/5087-series">5087 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/5108-series">5108 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-mojike">Mojike Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/akko-v2-rgb-series">RGB Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/akko-bluetooth-series">Bluetooth
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ban-phim-leopold">Thương hiệu
                                                                Leopold</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/leopold-fc660m-series">660M Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/leopold-fc750r-series">750R Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/leopold-fc900r-series">900R Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/leopold-fc980m-series">980M Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/leopold-bluetooth-series">Bluetooth
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ban-phim-ikbc-durgod">Thương hiệu
                                                                IKBC</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ikbc-w200-series">W200 Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ban-phim-choi-game-razer">Thương hiệu
                                                                Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/razer-blackwidow-series">Blackwidow
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/razer-huntsman-series">Huntsman
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ban-phim-choi-game-corsair">Thương
                                                                hiệu
                                                                Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-corsair-k63-series">K63
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-corsair-k68-series">K68
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-corsair-k70-series">K70
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-corsair-k95-series">K95
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-choi-game-corsair">K100
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ban-phim-may-tinh">Kết nối</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-bluetooth">Bluetooth</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-phim-wireless">Wireless</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/keycaps">Phụ kiện bàn phím cơ</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/keycaps">Keycaps</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ke-tay">Kê tay</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-11">
                                                <a className="megamenu-link" href="/pages/chuot-may-tinh">
						<span className="megamenu-icon" data-hover="chuot-lot-chuot"><svg version="1.1" id="Layer_1"
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                          x="0px" y="0px"
                                                                                          viewBox="0 0 14 20" width="18"
                                                                                          height="20">

<path className="st0" d="M7,19.5L7,19.5c-3.6,0-6.5-3.1-6.5-6.8V7.3c0-3.7,2.9-6.8,6.5-6.8c3.6,0,6.5,3.1,6.5,6.8v5.4
	C13.5,16.4,10.6,19.5,7,19.5z M7,1.5C4,1.5,1.5,4.1,1.5,7.3v5.4c0,3.2,2.5,5.8,5.5,5.8h0c3,0,5.5-2.6,5.5-5.8V7.3
	C12.5,4.1,10,1.5,7,1.5z"/>
<path className="st0"
      d="M7,10L7,10c-0.3,0-0.5-0.2-0.5-0.5v-5C6.5,4.2,6.7,4,7,4h0c0.3,0,0.5,0.2,0.5,0.5v5C7.5,9.8,7.3,10,7,10z"/>
</svg></span>
                                                    <span className="megamenu-name">Chuột + Lót chuột</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/gaming-mouse">Chuột theo hãng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-logitech">Logitech</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-razer">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-asus">Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-corsair">Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-microsoft">Microsoft (Mới)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-steelseries">Steelseries</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-hyperx">HyperX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-zowie">Zowie</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-nzxt">NZXT</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-pulsar">Pulsar</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/chuot-may-tinh">Chuột theo hãng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-dare-u">Dare-U</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-rapoo">Rapoo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-fuhlen">Fuhlen</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-havit">Havit</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-akko">Akko</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-msi">MSI</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-cooler-master">Cooler Master</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-cougar">Cougar</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-e-dra">E-Dra</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-newmen">Newmen</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/gaming-mouse">Chuột theo giá tiền</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-duoi-500-nghin">Dưới 500
                                                                nghìn</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-500-nghin-den-1-trieu">Từ 500
                                                                nghìn
                                                                - 1 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-1-den-2-trieu">Từ 1 triệu - 2
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-2-den-3-trieu">Trên 2 triệu - 3
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-tren-3-trieu">Trên 3 triệu</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/chuot-logitech">Thương hiệu
                                                                Logitech</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/logitech-g-pro-series">Logitech G Pro
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/g102-lightsync">Logitech G102
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/logitech-g-series">Logitech G
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/chuot-wireless">Chuột không dây</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-bluetooth">Bluetooth</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/chuot-wireless">Wireless</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/mouse-pad">Lót chuột theo hãng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-dare-u">Dare-U</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-razer">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-steelseries">Steelseries</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-corsair">Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-hyperx">HyperX</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/mouse-pad">Lót chuột theo hãng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-logitech">Logitech</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-akko">Akko</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-havit">Havit</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-nzxt">NZXT (Mới)</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-rapoo">Rapoo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-asus">Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-cougar">Cougar</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/mouse-pad">Các loại lót chuột</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-mem">Mềm</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-cung">Cứng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-day">Dày</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-mong">Mỏng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-co-led">Viền có led</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/mouse-pad">Lót chuột theo size</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-kich-thuoc-nho">Nhỏ</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-kich-thuoc-vua">Vừa</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/lot-chuot-kich-thuoc-lon">Lớn</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-12">
                                                <a className="megamenu-link" href="/pages/tai-nghe-may-tinh">
						<span className="megamenu-icon" data-hover="tai-nghe-loa"><svg width="20" height="18"
                                                                                       viewBox="0 0 20 18" fill="none"
                                                                                       xmlns="http://www.w3.org/2000/svg">
<path
    d="M2.12753 12.7623C2.35 9.44444 4.96063 9 6.0625 9H6.90625C7.37225 9 7.75 9.38375 7.75 9.85714V16.1429C7.75 16.6162 7.37225 17 6.90625 17H6.0625C3.93277 17 2.19823 15.2822 2.12753 13.1362L1.62188 12.8794C1.43501 12.7844 1.27785 12.6385 1.16801 12.458C1.05817 12.2774 0.999997 12.0694 1 11.8571V10.1429C1 5.08914 5.02609 1 10 1C14.9748 1 19 5.09003 19 10.1429V11.8571C19 12.0694 18.9418 12.2774 18.832 12.458C18.7221 12.6385 18.565 12.7844 18.3781 12.8794L17.8725 13.1362C17.8018 15.2822 16.0672 17 13.9375 17H13.0938C12.6278 17 12.25 16.6162 12.25 16.1429V9.85714C12.25 9.38375 12.6278 9 13.0938 9H13.9375C17.65 9 17.8725 11.6667 17.8725 12.7623"
    stroke="currentcolor"></path>
</svg></span>
                                                    <span className="megamenu-name">Tai Nghe - Loa</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/tai-nghe-may-tinh">Hãng tai nghe</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-logitech">Logitech</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-hyperx">HyperX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-asus">Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-razer">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-corsair">Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-steelseries">Steelseries</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/sony-audio-gearvn">Sony</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-true-wireless-soundpeats-chinh-hang-gia-tot">Soundpeats</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/tai-nghe-may-tinh">Hãng tai nghe</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-dare-u">Dare-U</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-gaming-zidli">Zidli</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-rapoo">Rapoo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-mpow">Havit/ MPOW</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-aoc">AOC</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-cooler-master">Cooler
                                                                Master</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-gaming-e-dra">E-Dra</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/tai-nghe-may-tinh">Tai nghe theo giá</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-duoi-1-trieu">Tai nghe dưới 1
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-1-trieu-den-2-trieu">Tai nghe
                                                                1
                                                                triệu đến 2 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-2-den-3-trieu">Tai nghe 2 đến
                                                                3
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-3-den-4-trieu">Tai nghe 3 đến
                                                                4
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-tren-4-trieu">Tai nghe trên 4
                                                                triệu</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/tai-nghe-may-tinh">Kiểu kết nối</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-wireless">Tai nghe
                                                                Wireless</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-gaming-bluetooth">Tai nghe
                                                                Bluetooth</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/tai-nghe-may-tinh">Kiểu tai nghe</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-over-ear">Tai nghe
                                                                Over-ear</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tai-nghe-gaming-in-ear">Tai nghe
                                                                Gaming
                                                                In-ear</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/loa">Loa
                                                                theo thương hiệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/soundmax">SoundMax</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/microlab">Microlab</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-thonet-vander-chinh-hang">Thonet &amp; Vander</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-logitech">Logitech</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-razer">Razer</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/loa">Loa
                                                                theo giá tiền</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-gia-re-duoi-1-trieu">Loa dưới 1
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-chinh-hang-tu-1-den-3-trieu">Loa
                                                                trên
                                                                1 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-chinh-hang-tu-3-den-5-trieu">Loa
                                                                trên
                                                                2 triệu</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/loa">Dạng
                                                                loa</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-de-ban">Loa để bàn</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-di-dong-bluetooth-chinh-hang">Loa
                                                                di
                                                                động</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/loa">Kiểu
                                                                loa</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-gaming">Loa Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/loa-nghe-nhac-cao-cap">Loa Audio</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/gia-treo-tai-nghe">Giá treo tai
                                                                nghe</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/gia-treo-tai-nghe-razer">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/corsair-st100-rgb-headstand">Corsair</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-13">
                                                <a className="megamenu-link" href="/pages/ghe-gaming-gia-re-gearvn">
						<span className="megamenu-icon" data-hover="ghe-ban"><svg width="16" height="21"
                                                                                  viewBox="0 0 16 21" fill="none"
                                                                                  xmlns="http://www.w3.org/2000/svg">
<path d="M3.42375 13.6057H12.5762" stroke="currentcolor"></path>
<path
    d="M3.4238 10.5999V14.6879C3.4238 15.2402 3.87151 15.6879 4.4238 15.6879H11.5763C12.1286 15.6879 12.5763 15.2402 12.5763 14.6879V10.6C12.5763 9.85202 12.3071 9.12907 11.8179 8.56331C11.706 8.43393 11.6913 8.24664 11.7753 8.09763C12.0408 7.62651 12.5763 6.57918 12.5763 5.79604C12.5763 5.02711 11.5738 3.90031 11.0494 3.36352C10.8544 3.16391 10.7346 2.89476 10.637 2.63335C10.545 2.38712 10.3694 2.04387 10.034 1.631C9.32994 0.76449 6.3573 0.815216 5.80972 1.63104C5.544 2.02692 5.40722 2.37444 5.33682 2.62732C5.26197 2.89614 5.14568 3.16391 4.95069 3.36352C4.42631 3.90031 3.4238 5.02711 3.4238 5.79604C3.4238 6.57918 3.95929 7.62651 4.22477 8.09764C4.30873 8.24664 4.29406 8.43393 4.18219 8.56331C3.693 9.12907 3.4238 9.85201 3.4238 10.5999Z"
    stroke="currentcolor"></path>
<path d="M12.6666 14.6291H13.7406C14.2929 14.6291 14.7406 14.1814 14.7406 13.6291V11.4437" stroke="currentcolor"></path>
<path d="M3.33347 14.6291H2.25942C1.70713 14.6291 1.25942 14.1814 1.25942 13.6291V11.4437" stroke="currentcolor"></path>
<path d="M15.7777 11.4437H13.7036" stroke="currentcolor"></path>
<path d="M2.29638 11.4437H0.222336" stroke="currentcolor"></path>
<path d="M8.00002 15.6906V18.876" stroke="currentcolor"></path>
<rect x="3.31494" y="18.3146" width="2.11107" height="2.18544" rx="1.05554" stroke="currentcolor"></rect>
<rect x="10.5741" y="18.3146" width="2.11107" height="2.18544" rx="1.05554" stroke="currentcolor"></rect>
<path d="M4.37036 18.3452H11.6295" stroke="currentcolor"></path>
</svg></span>
                                                    <span className="megamenu-name">Ghế - Bàn</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ghe-gaming-gia-re-gearvn">Thương hiệu ghế
                                                                Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-corsair">Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-warrior">Warrior</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/ghe-choi-game-razer-iskur-x">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/warrior-raider-series">Raider
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-e-dra">E-DRA</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/anda-seat">Anda Seat</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/cougar-chair">Cougar</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ghe-gaming-gia-re-gearvn">Thương hiệu ghế
                                                                Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/noble-chair">Noble Chair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-msi">MSI</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-gaming-asus">ASUS</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-cooler-master">Cooler Master</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/akracing">AKRacing</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ghe-cong-thai-hoc">Thương hiệu ghế
                                                                CTH</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-sihoo">Sihoo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-e-dra">E-Dra</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ghe-gaming-gia-re-gearvn">Kiểu ghế</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-cong-thai-hoc">Ghế Công thái
                                                                học</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/ghe-gaming-gia-re-gearvn">Ghế Gaming</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ghe-corsair">Thương hiệu Corsair</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-corsair-t3-rush-series">T3 RUSH
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/corsair-tc60-fabric-series">TC60
                                                                Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tc100-series">TC100 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tc200-series">TC200 Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ghe-sihoo">Thương hiệu Sihoo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/sihoo-m18">M18 Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-cong-thai-hoc-sihoo-m57">M57
                                                                Series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ghe-dxracer">Thương hiệu DXRacer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/drifting-series">Drifting Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/dxracer-king-series">King Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/dxracer-g-series-oh">G Series</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/dxracer-air-series">A.I.R series</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ban-gaming">Bàn Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-dxracer">Bàn Gaming DXRacer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-gaming-e-dra">Bàn Gaming E-Dra</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-warrior">Bàn Gaming Warrior</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-cooler-master">Bàn Gaming Cooler
                                                                Master</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/ban-cong-thai-hoc">Bàn công thái
                                                                học</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-cth-e-dra">Bàn CTH E-Dra</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ban-cth-warrior">Bàn CTH Warrior</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ghe-gaming-gia-re-gearvn">Lựa chọn theo cân
                                                                nặng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-cho-nguoi-cao-1m7-nang-duoi-80kg">Dưới
                                                                80 KG</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-cho-nguoi-cao-tren-1m7-nang-tren-80kg">Trên
                                                                80 KG</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-11">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ghe-gaming-gia-re-gearvn">Chất liệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-da-pu">Da PU</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-da-pvc">Da PVC</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-da-that">Da Thật</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/da-nappa">Da NAPPA</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-vai-smooth-fabric">Vải Smooth
                                                                Fabric</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-12">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/ghe-gaming-gia-re-gearvn">Giá tiền</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-duoi-5-trieu">Dưới 5 triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-gaming-tu-5-10-trieu">Từ 5 đến 10
                                                                triệu</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ghe-tren-10-trieu">Trên 10 triệu</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-13">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/phu-kien-trang-tri">Phụ kiện trang
                                                                trí</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-14">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/pegboard">PegBoard</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-14">
                                                <a className="megamenu-link" href="/collections/thiet-bi-mang">
						<span className="megamenu-icon" data-hover="phan-mem-mang"><svg width="18" height="19"
                                                                                        viewBox="0 0 18 19" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
<path
    d="M4 16H3.5C1.84315 16 0.5 14.6569 0.5 13V7C0.5 5.34315 1.84315 4 3.5 4H14.5C16.1569 4 17.5 5.34315 17.5 7V13C17.5 14.6569 16.1569 16 14.5 16H14"
    stroke="currentcolor" strokeLinecap="round"></path>
<path d="M14.5 4V3C14.5 1.89543 13.6046 1 12.5 1H5.5C4.39543 1 3.5 1.89543 3.5 3L3.5 4" stroke="currentcolor"
      strokeLinecap="round"></path>
<rect x="4" y="12.5" width="10" height="6" rx="1.5" stroke="currentcolor"></rect>
<path d="M2.5 7L5.5 7" stroke="currentcolor" strokeLinecap="round"></path>
</svg></span>
                                                    <span className="megamenu-name">Phần mềm &amp; Mạng</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/thiet-bi-mang">Hãng sản xuất</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/asus">Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/linksys">LinkSys</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tp-link">TP-LINK</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/card-mang-intel">Intel</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mercusys">Mercusys</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/thiet-bi-phat-wifi">Router Wi-Fi</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/router-gaming">Gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/router-pho-thong">Phổ thông</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/router-xuyen-tuong">Xuyên tường</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/router-mesh-pack">Router Mesh Pack</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/router-wifi-5">Router WiFi 5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/router-ax-wifi-6">Router WiFi 6</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/usb-card-mang">USB Thu sóng - Card
                                                                mạng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/usb-wifi">Usb WiFi</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/card-mang-wifi">Card WiFi</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/card-mang-ethernet">Card Ethernet</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/day-cap-mang-lan">Dây cáp mạng</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/microsoft-office-365">Microsoft Office</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/pages/microsoft-office-365">Microsoft Office
                                                                365</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/office-2021">Office 2021</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/window">Microsoft Windows</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/phan-mem-windows-11-home-online-dwnld-nr-kw9-00664">Windows
                                                                11 Home</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/products/phan-mem-windows-11-pro-online-dwnld-nr-fqc-10572">Windows
                                                                11 Pro</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-15">
                                                <a className="megamenu-link" href="/collections/phu-kien">
						<span className="megamenu-icon" data-hover="phu-kien"><svg width="20" height="14"
                                                                                   viewBox="0 0 20 14" fill="none"
                                                                                   xmlns="http://www.w3.org/2000/svg">
<path
    d="M4 6H8.90909M6.5 3.5V8.3M10 1C12.0438 1.0352 13.2776 1 14.0909 1C15.7273 1 17.3636 1.4 18.1818 4.2C19 7 19 8.6 19 10.6C19 12.6 17.3636 13 15.7273 13C14.0909 13 13.2285 9.8 10 9.8C6.77145 9.8 5.90909 13 4.27273 13C2.63636 13 1 12.6 1 10.6C1 8.6 1 7 1.81818 4.2C2.63636 1.4 4.27273 1 5.90909 1C6.72236 1 7.95618 1.0352 10 1Z"
    stroke="currentcolor"></path>
<circle cx="13" cy="5" r="1" fill="currentcolor"></circle>
<circle cx="15" cy="7" r="1" fill="currentcolor"></circle>
</svg></span>
                                                    <span className="megamenu-name">Phụ kiện</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/phu-kien-streaming">Thiết bị
                                                                Streaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/capture-card-avermedia">AverMedia</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/phu-kien-streaming-razer">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/phu-kien-streaming-elgato">Elgato</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/pages/dien-thoai-asus-rog-phone">Asus ROG</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/rog-phone-6-12-256">ROG Phone</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/may-choi-game-cam-tay-asus">Máy chơi
                                                                game
                                                                cầm tay Asus</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/microphone">Microphone</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/microphone-razer">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/micro-hyperx">HyperX</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mircrophone-thronmax">Thronmax</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-4">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/webcam">Webcam</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/webcam-720p">720p</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/webcam-1080p">1080p</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/webcam-4k">4K</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/webcam-conference">Conference</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-5">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/den-led-trang-tri">Đèn Led trang
                                                                trí</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/den-thong-minh-nano-leaf">Nanoleaf</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/govee">Govee</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-6">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/balo-cap-tui-game-thu">Balo &amp; Túi
                                                                xách</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/balo-razer">Razer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/balo-asus">Asus</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/balo-gearvn">GEARVN</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/balo-tui-chong-soc">Túi chống sốc</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-7">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/de-tan-nhiet-laptop">Đế tản nhiệt
                                                                Laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/de-tan-nhiet-laptop">Cooler Master</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/rain-design">Rain Design</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/hyper-usa-chinh-hang">Hyperdrive</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-8">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/tay-cam-vo-lang">Tay cầm, vô lăng</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tay-cam-x-box">Tay cầm X-Box</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tay-cam-msi">Tay cầm MSI</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tay-cam-ps4">Tay cầm PS4</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tay-cam-rapoo">Tay cầm Rapoo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/tay-cam-dareu">Tay cầm DareU</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/vo-lang">Vô lăng</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-9">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/cong-chuyen-usb-gia-do">Cổng chuyển
                                                                USB,
                                                                Giá đỡ</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/hyper-usa-chinh-hang">Hyperdrive</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/rain-design">Rain Design</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/mazer">Mazer</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/ugreen/">Ugreen</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-10">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/phu-kien-day-cap-hdmi-dp-lan-usbc">Phụ
                                                                kiện dây HDMI,DP,LAN</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/day-cap-hdmi">Cáp HDMI</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/day-cap-display-port">Cáp DP</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-11">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/bo-luu-dien-ares">Bộ lưu điện</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/bo-luu-dien-ares">Ares</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-12">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/collections/the-nho-usb">Thẻ nhớ - USB</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/collections/the-nho-usb-sandisk">SanDisk</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>

                                            <li className="megamenu-item mg-16">
                                                <a className="megamenu-link" href="/blogs/thu-thuat-giai-dap">
						<span className="megamenu-icon" data-hover="thu-thuat-giai-dap"><svg width="18" height="20"
                                                                                             viewBox="0 0 18 20"
                                                                                             fill="none"
                                                                                             xmlns="http://www.w3.org/2000/svg">
<path
    d="M9 3.5V6M9 3.5C9 3.00555 9.14662 2.5222 9.42133 2.11108C9.69603 1.69995 10.0865 1.37952 10.5433 1.1903C11.0001 1.00108 11.5028 0.951575 11.9877 1.04804C12.4727 1.1445 12.9181 1.3826 13.2678 1.73223C13.6174 2.08187 13.8555 2.52732 13.952 3.01228C14.0484 3.49723 13.9989 3.99989 13.8097 4.45671C13.6205 4.91352 13.3 5.30397 12.8889 5.57867C12.4778 5.85338 11.9945 6 11.5 6H9M9 3.5C9 3.00555 8.85338 2.5222 8.57867 2.11108C8.30397 1.69995 7.91352 1.37952 7.45671 1.1903C6.99989 1.00108 6.49723 0.951575 6.01227 1.04804C5.52732 1.1445 5.08187 1.3826 4.73223 1.73223C4.3826 2.08187 4.1445 2.52732 4.04804 3.01228C3.95157 3.49723 4.00108 3.99989 4.1903 4.45671C4.37952 4.91352 4.69995 5.30397 5.11108 5.57867C5.5222 5.85338 6.00555 6 6.5 6H9"
    stroke="currentcolor" strokeMiterlimit="10" strokeLinecap="round"></path>
<path
    d="M15.6667 6H2.33333C1.59695 6 1 6.63959 1 7.42857V9.57143C1 10.3604 1.59695 11 2.33333 11H15.6667C16.403 11 17 10.3604 17 9.57143V7.42857C17 6.63959 16.403 6 15.6667 6Z"
    stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round"></path>
<path
    d="M16 10.7895V16.9474C16 17.4918 15.7788 18.0139 15.3849 18.3988C14.9911 18.7837 14.457 19 13.9 19H4.1C3.54305 19 3.0089 18.7837 2.61508 18.3988C2.22125 18.0139 2 17.4918 2 16.9474V10.7895M9 6V19"
    stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
                                                    <span className="megamenu-name">Thủ thuật - Giải đáp</span>
                                                    <span className="megamenu-ic-right">
							<svg viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"></path>
							</svg>
						</span>
                                                </a>
                                                <div
                                                    className="megamenu-content absolute-center level0 xlab_grid_container">
                                                    <div className="column xlab_column_5_5">

                                                        <div className="sub-megamenu-item smg-1">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/blogs/thu-thuat-giai-dap">Review sản phẩm</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/acer-nitro-5-laptop-gaming-ngon-bo-re">Đánh
                                                                giá laptop Acer Nitro 5</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/asus-tuf-dash-f15-2022">Đánh
                                                                giá laptop Asus TUF</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/laptop-gaming-mong-nhe-danh-cho-sinh-vien">Top
                                                                những mẫu laptop đáng mua 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/full-bo-pc-gaming-gia-re">Top
                                                                PC 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/tai-nghe-choi-game-pubg-pc-mobile-gia-re">Top
                                                                tai nghe 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/top-man-hinh-may-tinh-chinh-hang-gia-re">Top
                                                                màn hình máy tính 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/4-mau-chuot-khong-day-tot-nhat-nam-2022">Top
                                                                chuột chơi game 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/top-5-ban-phim-macbook-roi">Top
                                                                bàn phím 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/nen-mua-card-man-hinh-nao-de-choi-game-2021">Top
                                                                card đồ họa 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/top-ram-ddr5-2022">Top
                                                                RAM
                                                                2023</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-2">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/blogs/thu-thuat-giai-dap/">Thủ thuật - Hỏi đáp</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/huong-dan-cach-bam-dau-day-mang-lan">Hướng
                                                                dẫn cách bấm đầu dây mạng LAN</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/huong-dan-chon-mua-laptop-gaming-chuan-nhat-2022">Hướng
                                                                dẫn chọn mua laptop gaming</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/full-bo-pc-gaming-gia-re">Hướng
                                                                dẫn chọn mua PC</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/cai-lai-win-10">Cách cài
                                                                lại
                                                                Windows</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/cach-tai-hinh-anh-ve-may-tinh">Cách
                                                                lưu ảnh trên máy tính</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/meo-giam-giat-lag-khi-choi-fo4-lol-va-valorant">Cách
                                                                giảm giật lag khi chơi game</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/cach-doi-ip-may-tinh">Cách
                                                                đổi IP máy tính</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/nguyen-nhan-man-hinh-may-tinh-bi-soc">Xử
                                                                lý màn hình bị sọc</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/quen-mat-khau-may-tinh">Xử
                                                                lý
                                                                quên mật khẩu máy tính</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/xu-ly-loi-100-cpu">Xử lý
                                                                lỗi
                                                                100% CPU</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/huong-dan-ve-sinh-laptop-tai-nha-cho-nguoi-moi">Hướng
                                                                dẫn vệ sinh laptop</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/4-buoc-don-gian-giup-ve-sinh-ban-phim-may-tinh-tai-nha">Hướng
                                                                dẫn vệ sinh bàn phím</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/cach-lap-va-ve-sinh-ram">Hướng
                                                                dẫn vệ sinh RAM</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/cach-xem-cau-hinh-may-tinh-laptop-don-gian">Hướng
                                                                dẫn xem cấu hình máy tính</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/thu-thuat-giai-dap/cach-kiem-tra-toc-do-internet-va-cach-tang-toc-wifi-hieu-qua">Hướng
                                                                dẫn kiểm tra tốc độ internet</a>

                                                        </div>

                                                        <div className="sub-megamenu-item smg-3">
                                                            <a className="sub-megamenu-item-name"
                                                               href="/blogs/cong-nghe/">Tin
                                                                tức công nghệ mới</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/ngay-83-la-ngay-gi-bo-tui-mot-so-goi-y-tang-qua">Gợi
                                                                ý tặng quà 8/3</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/valve-chinh-thuc-cong-bo-thoi-gian-sale-game-steam-trong-2023">Sale
                                                                game Steam năm 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/windows-12-sap-ra-mat">Windows 12
                                                                sắp
                                                                ra mắt</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/snapchat-tich-hop-chatgpt">Tin tức
                                                                về
                                                                chat GPT</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/evo-2023">Tin tức về EVO 2023</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/tiktok-ra-mat-tinh-nang-am-thanh-cho-doanh-nghiep">Tính
                                                                năng mới của Tiktok</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/trai-nghiem-game-chien-thuat-spellforce-conquest-of-eo">Trải
                                                                nghiệm game SpellForce: Conquest of Eo</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/danh-gia-game-wo-long-fallen-dynasty">Trải
                                                                nghiệm game Wo Long: Fallen Dynasty - Elder Ring</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/google-cong-bo-cac-tinh-nang-moi-cho-android-va-wear-os-tai-mwc">Tính
                                                                năng mới cho Android và Wear OS</a>

                                                            <a className="sub-megamenu-item-filter"
                                                               href="/blogs/cong-nghe/nvidia-chinh-thuc-ra-mat-cong-nghe-rtx-video-super-resolution">Công
                                                                nghệ mới của Nvidia</a>

                                                        </div>

                                                    </div>

                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="index-slider--banner">
                                {/*<CarouselMain/>*/}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section-subbanners" style={{marginTop: "20px"}}>
                    <div className="container-fluid">
                        <div className="row " style={{display: "flex"}}>
                            <div style={{with: "25%"}}>
                                <div className="banner-box fade-box" data-banner-page="Homepage"
                                     data-banner-loc="Sub Banner_1">
                                    <a className="aspect-ratio baner " aria-label="Banner"
                                       title="Banner">
                                        <picture>
                                            <source media="(max-width: 991px)"
                                                    srcSet="https://file.hstatic.net/200000722513/file/sub_banner_1_706aa534a3484e3482c0c39a2074f261.png"
                                                    data-srcset="https://file.hstatic.net/200000722513/file/sub_banner_1_706aa534a3484e3482c0c39a2074f261.png"
                                                    sizes="294px"/>
                                            <source media="(min-width: 992px)"
                                                    srcSet="https://file.hstatic.net/200000722513/file/sub_banner_1_706aa534a3484e3482c0c39a2074f261.png"
                                                    data-srcset="https://file.hstatic.net/200000722513/file/sub_banner_1_706aa534a3484e3482c0c39a2074f261.png"
                                                    sizes="294px"/>
                                            <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded"
                                                 src="https://file.hstatic.net/200000722513/file/sub_banner_1_706aa534a3484e3482c0c39a2074f261.png"
                                                 data-src="https://file.hstatic.net/200000722513/file/sub_banner_1_706aa534a3484e3482c0c39a2074f261.png"
                                                 alt="Banner" sizes="294px"/>
                                        </picture>
                                    </a>
                                </div>
                            </div>
                            <div style={{with: "25%"}}>
                                <div className="banner-box fade-box" data-banner-page="Homepage"
                                     data-banner-loc="Sub Banner_2">
                                    <a className="aspect-ratio baner" href="/pages/man-hinh" aria-label="Banner"
                                       title="Banner"
                                    >
                                        <picture>
                                            <source media="(max-width: 991px)"
                                                    srcSet="https://file.hstatic.net/200000722513/file/sub_banner_2_323a43e188e94c28adfae04bbc0ec182.png"
                                                    data-srcset="https://file.hstatic.net/200000722513/file/sub_banner_2_323a43e188e94c28adfae04bbc0ec182.png"
                                                    sizes="294px"/>
                                            <source media="(min-width: 992px)"
                                                    srcSet="https://file.hstatic.net/200000722513/file/sub_banner_2_323a43e188e94c28adfae04bbc0ec182.png"
                                                    data-srcset="https://file.hstatic.net/200000722513/file/sub_banner_2_323a43e188e94c28adfae04bbc0ec182.png"
                                                    sizes="294px"/>
                                            <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded"
                                                 src="https://file.hstatic.net/200000722513/file/sub_banner_2_323a43e188e94c28adfae04bbc0ec182.png"
                                                 data-src="https://file.hstatic.net/200000722513/file/sub_banner_2_323a43e188e94c28adfae04bbc0ec182.png"
                                                 alt="Banner" sizes="294px"/>
                                        </picture>
                                    </a>
                                </div>
                            </div>
                            <div style={{with: "25%"}}>
                                <div className="banner-box fade-box" data-banner-page="Homepage"
                                     data-banner-loc="Sub Banner_3">
                                    <a className="aspect-ratio baner" href="/pages/ghe-gaming-gia-re-gearvn"
                                       aria-label="Banner"
                                       title="Banner">
                                        <picture>
                                            <source media="(max-width: 991px)"
                                                    srcSet="https://file.hstatic.net/200000722513/file/sub_banner_3_efeb08b74a6147d5a401104264077fe8.png"
                                                    data-srcset="https://file.hstatic.net/200000722513/file/sub_banner_3_efeb08b74a6147d5a401104264077fe8.png"
                                                    sizes="294px"/>
                                            <source media="(min-width: 992px)"
                                                    srcSet="https://file.hstatic.net/200000722513/file/sub_banner_3_efeb08b74a6147d5a401104264077fe8.png"
                                                    data-srcset="https://file.hstatic.net/200000722513/file/sub_banner_3_efeb08b74a6147d5a401104264077fe8.png"
                                                    sizes="294px"/>
                                            <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded"
                                                 src="https://file.hstatic.net/200000722513/file/sub_banner_3_efeb08b74a6147d5a401104264077fe8.png"
                                                 data-src="https://file.hstatic.net/200000722513/file/sub_banner_3_efeb08b74a6147d5a401104264077fe8.png"
                                                 alt="Banner" sizes="294px"/>
                                        </picture>
                                    </a>
                                </div>
                            </div>
                            <div style={{with: "25%"}}>
                                <div className="banner-box fade-box" data-banner-page="Homepage"
                                     data-banner-loc="Sub Banner_4">
                                    <a className="aspect-ratio baner" href="/products/gvn-minion-i1650-gen-12"
                                       aria-label="Banner"
                                       title="Banner">
                                        <picture>
                                            <source media="(max-width: 991px)"
                                                    srcSet="https://file.hstatic.net/200000722513/file/sub_banner_4_2656197bd0ff47b7a2feb80a33f78ca4.png"
                                                    data-srcset="https://file.hstatic.net/200000722513/file/sub_banner_4_2656197bd0ff47b7a2feb80a33f78ca4.png"
                                                    sizes="294px"/>
                                            <source media="(min-width: 992px)"
                                                    srcSet="https://file.hstatic.net/200000722513/file/sub_banner_4_2656197bd0ff47b7a2feb80a33f78ca4.png"
                                                    data-srcset="https://file.hstatic.net/200000722513/file/sub_banner_4_2656197bd0ff47b7a2feb80a33f78ca4.png"
                                                    sizes="294px"/>
                                            <img data-sizes="auto" className="lazyautosizes ls-is-cached lazyloaded"
                                                 src="https://file.hstatic.net/200000722513/file/sub_banner_4_2656197bd0ff47b7a2feb80a33f78ca4.png"
                                                 data-src="https://file.hstatic.net/200000722513/file/sub_banner_4_2656197bd0ff47b7a2feb80a33f78ca4.png"
                                                 alt="Banner" sizes="294px"/>
                                        </picture>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <Content/>
                        <Product/>
                    </div>
                </section>
            </div>


        </>
    );
}
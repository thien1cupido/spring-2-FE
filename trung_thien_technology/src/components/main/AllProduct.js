import React, {useEffect, useState} from "react";
import {Marquee} from "./Marqee";
import * as productService from '../../service/ProductService';
import ReactPaginate from "react-paginate";
import {CurrencyFormatter} from "../../util/ConverUnit";
import {Link, useSearchParams} from "react-router-dom";
import {toast} from "react-toastify";
import {addToCart} from "../../redux/ShoppingCartReducer";
import {useDispatch} from "react-redux";

export function AllProduct() {
    const dispatch = useDispatch();
    const [searchParam, setSearchParam] = useSearchParams()
    const [nameSearch, setNameSearch] = useState("")


    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [product, setProduct] = useState([]);
    const getAllProductApi = async (nameSearch) => {
        const res = await productService.findAllProduct(currentPage, nameSearch);
        setProduct(res?.data.content);
        const totalPages = res.data.totalPages;
        setPageCount(totalPages);
    }

    const handlePageClick = async (page) => {
        setCurrentPage(+page.selected);
        const result = await productService.findAllProduct(page.selected, nameSearch);
        setProduct(result.content);
    };

    useEffect(() => {
        if (searchParam) {
            setNameSearch(searchParam.get('searchProduct'));
        }
        getAllProductApi(searchParam.get('searchProduct'));
        document.title = "Tất cả sản phẩm";
        window.scrollTo(0, 0);
    }, [currentPage, searchParam, nameSearch])
    return (
        <>
            <div className="container" style={{height: "120vh"}}>
                <div id="breadcrumb" style={{marginTop: "15px"}}>
                    <ol itemScope="" itemType="http://schema.org/BreadcrumbList">
                        <li
                            itemProp="itemListElement"
                            itemScope=""
                            itemType="http://schema.org/ListItem"
                        >
                            <Link to={"/"} itemProp="item" className="nopad-l">
                                <span itemProp="name">Trang chủ</span>
                            </Link>
                            <i className="fa fa-angle-right"/>
                            <meta itemProp="position" content={1}/>
                        </li>
                        <li
                            itemProp="itemListElement"
                            itemScope=""
                            itemType="http://schema.org/ListItem"
                        >
                            <a href="/may-bo-mega.html" itemProp="item" className="nopad-l current">
        <span itemProp="name">
          <h1>Tất cả sản phẩm</h1>
        </span>
                                <span className="last-bre">
                                <i className="fa fa-angle-right"/>{" "}
        </span>
                            </a>
                            <meta itemProp="position" content={2}/>
                        </li>
                    </ol>
                </div>
                <div className="clearfix"></div>
                <Marquee/>
                <div className="filter-top">
                    <div className="container">
                        <select
                            className="form-control float-right"
                            onChange="location.href=this.value"
                        >
                            <option value="https://mega.com.vn/may-bo-mega.html?sort=new">
                                Mới nhất
                            </option>
                            <option value="https://mega.com.vn/may-bo-mega.html?sort=price-asc">
                                Giá tăng dần
                            </option>
                            <option value="https://mega.com.vn/may-bo-mega.html?sort=price-desc">
                                Giá giảm dần
                            </option>
                        </select>
                        <div className="clearfix"/>
                    </div>
                </div>
                <div className="product-list d-flex flex-wrap justify-content-center">
                    {
                        product.length === 0 && nameSearch !== ""?
                            <h3 style={{color: "red",marginTop:"150px"}}>Không tìm thấy kết quả</h3>:
                            product.map((p, index) =>
                                (
                                    <div className="p-item" key={index}>
                                        <div className="p-container">
                                            <a href="/pc-mega-songoku.html" className="p-img">
                                                <span className="icon-offer"/>
                                                <img
                                                    className="lazy loaded"
                                                    src={p.image}
                                                    data-src="/media/product/250_22239_son_goku_04.png"
                                                    alt="PC MEGA  SONGOKU"
                                                    data-was-processed="true"
                                                />
                                            </a>
                                            <h3 className="p-name">
                                                <a href="/pc-mega-songoku.html">{p.name}</a>
                                            </h3>
                                            <span className="p-price">
                                    <CurrencyFormatter amount={p.price}/> đ</span>
                                            <span className="p-old-price"/>
                                            <div className="p-bottom">
      <span className="stock instock">
        <i className="fa fa-check"/>
      </span>
                                                <span className="p-buy icons" onClick={() => (
                                                    toast("Đã thêm vào giỏ hàng !"),
                                                        dispatch(
                                                            addToCart({
                                                                id: p.id,
                                                                name: p.name,
                                                                price: p.price,
                                                                img: p.image,
                                                                quantity: 1
                                                            })
                                                        ))
                                                }/>
                                            </div>
                                        </div>
                                    </div>
                                ))
                    }
                </div>
                {
                    pageCount > 1 ? (
                        <div className="row mt-3 mb-5">
                            <div className="d-flex col-12 justify-content-end">
                                <div className="d-grid">
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel={product.length === 0 || pageCount === 1 ? "" : "Sau"}
                                        onPageChange={handlePageClick}
                                        pageCount={pageCount}
                                        previousLabel={product.length === 0 || pageCount === 1 ? "" : "Trước"}
                                        containerClassName="pagination"
                                        pageLinkClassName={product.length === 0 ? "" : "page-num"}
                                        nextLinkClassName={product.length === 0 ? "" : "page-num"}
                                        previousLinkClassName={product.length === 0 ? "" : "page-num"}
                                        activeClassName="active"
                                        disabledClassName="d-none"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : ""
                }
            </div>
        </>
    );
}
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {CurrencyFormatter} from "../../../util/ConverUnit";
import * as alert from "../../../util/Alert";
import Swal from "sweetalert2";
import * as productService from '../../../service/ProductService';
import ReactPaginate from "react-paginate";

export function ProductList() {
    const [productList, setProductList] = useState([]);
    const [nameProduct, setNameProduct] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const getAllProductApi = async () => {
        try {
            const res = await productService.findAllProductAdmin(currentPage, nameProduct);
            setProductList(res?.data.content);
            const totalPages = res.data.totalPages;
            setPageCount(totalPages);
        } catch (e) {
            console.log(e)
        }
    }

    const handlePageClick = async (page) => {
        setCurrentPage(+page.selected);
        const result = await productService.findAllProductAdmin(page.selected, nameProduct);
        setProductList(result.content);
    };

    useEffect(() => {
        document.title = "Danh sách sản phẩm";
        window.scrollTo(0, 0);
        getAllProductApi();
    }, [currentPage,pageCount]);

    if (!productList) {
        return null;
    }

    return (
        <>
            <div className="container">
                <h1 style={{textAlign: "center"}}>Danh sách sản phẩm</h1>
                <div className=" bg-white overflow-hidden d-flex">
                    {
                        pageCount<2?
                            <h3 style={{color: "red", textAlign: "center", width: "80%"}}>Không tìm thấy sản phẩm</h3> :
                            <table id="tbl-cart-item" className="table-mega">
                                <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Ảnh</td>
                                    <td width="15%" style={{paddingLeft: "7px"}}>Tên sản phẩm</td>
                                    <td width="15%" style={{paddingLeft: "7px"}}>Đơn giá</td>
                                    <td width="15%" style={{paddingLeft: "7px"}}>Số lượng</td>
                                    <td width="10%" style={{paddingLeft: "7px"}}>Xóa</td>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    productList?.map((items, index) => (
                                        <tr className="item js-item-row" key={index}>
                                            <td>{items.id}</td>
                                            <td>
                                                <img src={items.image}
                                                     style={{
                                                         verticalAlign: "middle",
                                                         marginRight: "10px",
                                                         margin: "10px",
                                                         float: "left",
                                                         width: "100px"
                                                     }}/>
                                            </td>
                                            <td>
                                                <Link to={`/product-detail/${items.id}`}
                                                      style={{
                                                          textDecoration: "none",
                                                          paddingTop: "10px",
                                                          display: "block"
                                                      }}>
                                                    {items.name}
                                                </Link>
                                            </td>
                                            <td>
                                            <span className="js-show-buy-price"
                                                  style={{cursor: "default"}}> <CurrencyFormatter
                                                amount={parseInt(items.price)}/> đ</span>
                                            </td>
                                            <td>
                                                {
                                                    items.quantity
                                                }
                                            </td>
                                            <td>
                                                < a type="button" style={{
                                                    cursor: "pointer",
                                                    fontSize: "25px",
                                                    color: "red"
                                                }}
                                                    onClick={
                                                        () => alert.swalWithBootstrapButtons.fire({
                                                            icon: "warning",
                                                            title: "Xác nhận xóa",
                                                            html: `Bạn có muốn xoá sản phẩm <span style="color: red">${items.name}</span> khỏi giỏ hàng không?`,
                                                            showCancelButton: true,
                                                            cancelButtonText: 'Không',
                                                            confirmButtonText: 'Có',
                                                            reverseButtons: true
                                                        }).then((res) => {
                                                            if (res.isConfirmed) {
                                                                Swal.fire({
                                                                    icon: "success",
                                                                    title: "Xóa thành công !",
                                                                    timer: 2000
                                                                })
                                                            }
                                                        })
                                                    }
                                                >
                                                    <ion-icon name="trash-outline"></ion-icon>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                    }
                </div>
                {
                    pageCount > 0 ? (
                        <div className="row mt-3 mb-5">
                            <div className="d-flex col-12 justify-content-end">
                                <div className="d-grid">
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel={productList.length === 0 || pageCount === 1 ? "" : "Sau"}
                                        onPageChange={handlePageClick}
                                        pageCount={pageCount}
                                        previousLabel={productList.length === 0 || pageCount === 1 ? "" : "Trước"}
                                        containerClassName="pagination"
                                        pageLinkClassName={productList.length === 0 ? "" : "page-num"}
                                        nextLinkClassName={productList.length === 0 ? "" : "page-num"}
                                        previousLinkClassName={productList.length === 0 ? "" : "page-num"}
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
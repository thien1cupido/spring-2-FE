import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {CurrencyFormatter} from "../../util/ConverUnit";

export const ShoppingCart = () => {

    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();


    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total;
    };


    useEffect(() => {
        document.title = "Giỏ hàng";
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <div className="container">
                    <div id="breadcrumb">
                        <ol>
                            <li>
                                <a href="/" itemProp="item">
                                    <span itemProp="name">Trang chủ</span>
                                </a> <i className="fa fa-angle-right"/>
                            </li>
                            <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                                <a href="" itemProp="item" className="current">
                                    <span itemProp="name"><h1>Giỏ hàng</h1></span>
                                </a>
                            </li>
                        </ol>
                    </div>
                    <div className="clearfix"></div>
                    <div className="bg-white overflow-hidden">
                        <table id="tbl-cart-item" className="table-mega">
                            <thead>
                            <tr>
                                <td width="500" style={{paddingLeft: "7px"}}>Sản phẩm</td>
                                <td style={{paddingLeft: "7px"}}>Đơn giá</td>
                                <td style={{paddingLeft: "7px"}}>Số lượng</td>
                                <td style={{paddingLeft: "7px"}}>Thành tiền</td>
                                <td style={{paddingLeft: "7px"}}>Xóa</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                products?.map((items, index) => (
                                    <tr className="item js-item-row" data-variant_id="0" data-item_id="22669"
                                        data-item_type="product" key={index}>
                                        <td>
                                            <img src={items.img}
                                                 style={{
                                                     verticalAlign: "middle",
                                                     marginRight: "10px",
                                                     margin: "10px",
                                                     float: "left",
                                                     width: "100px"
                                                 }}/>
                                            <div style={{marginLeft: "120px", paddingRight: "20px"}}>
                                                <Link to={`/product-detail/${items.id}`}
                                                      style={{
                                                          textDecoration: "none",
                                                          paddingTop: "10px",
                                                          display: "block"
                                                      }}>
                                                    {items.name}
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <input type="hidden" className="buy-price"/>
                                            <span className="js-show-buy-price"> <CurrencyFormatter
                                                amount={parseInt(items.price)}/> đ</span>
                                        </td>
                                        <td>
                                            <input value={items.quantity} style={{textAlign: "center"}}
                                                   className="buy-quantity quantity-change text-center" size="5"/>
                                        </td>
                                        <td><b className="price">
                                            <span className="total-item-price"><CurrencyFormatter
                                                amount={parseInt(items.price) * parseInt(items.quantity)}/></span> đ
                                        </b></td>
                                        <td>
                                            < a style={{
                                                cursor: "pointer",
                                                fontSize: "25px",
                                                color: "red"
                                            }}
                                            >
                                                <ion-icon name="trash-outline"></ion-icon>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                            <tr>
                                <td colSpan="2">
                                    <div className="cart-voucher">
                                        <input id="js_voucher_input" className="form-control" placeholder="Mã voucher"
                                               size="20"/>
                                        <button className="btn btn-secondary js-voucher-submit"
                                                style={{lineHeight: "26.4px"}}>Áp dụng
                                        </button>
                                    </div>
                                </td>
                                <td colSpan="3" align="right" className="pr-2">
                                    <b className="total-cart-price text-18" style={{color: "red"}}>Tổng tiền: </b>
                                    <b className="total-cart-price text-18" style={{color: "red"}}><CurrencyFormatter
                                        amount= {totalPrice()+" đ"}/></b>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="bg-white overflow-hidden mt-3 p-3">
                        <form
                            method="post"
                            encType="multipart/form-data"
                            action="/send-cart"
                            onSubmit="return check_field()"
                        >
                            <div className="row" id="cart-step2">
                                <div className="col-4">
                                    <h3>Thông tin người mua</h3>
                                    <p className="text-12">
                                        Để tiếp tục đặt hàng, quý khách xin vui lòng nhập thông tin bên dưới
                                    </p>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-12">Họ tên*</label>
                                        <div className="col-md-9 col-12">
                                            <input
                                                type="text"
                                                name="user_info[name]"
                                                id="buyer_name"
                                                defaultValue=""
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-12">SĐT*</label>
                                        <div className="col-md-9 col-12">
                                            <input
                                                type="text"
                                                name="user_info[tel]"
                                                id="buyer_tel"
                                                defaultValue=""
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-12">Email*</label>
                                        <div className="col-md-9 col-12">
                                            <input
                                                type="text"
                                                name="user_info[email]"
                                                id="buyer_email"
                                                defaultValue=""
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-12">Địa chỉ*</label>
                                        <div className="col-md-9 col-12">
            <textarea
                name="user_info[address]"
                id="buyer_address"
                className="form-control"
                row={3}
                defaultValue={""}
            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3 col-12">Ghi chú</label>
                                        <div className="col-md-9 col-12">
            <textarea
                name="user_info[note]"
                className="form-control"
                row={3}
                defaultValue={""}
            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <h3>Phương thức thanh toán</h3>
                                    <table>
                                        <tbody>
                                        <tr id="pay-1">
                                            <td valign="top">
                                                <input
                                                    type="radio"
                                                    id="pay_method1"
                                                    name="pay_method"
                                                    defaultValue={1}
                                                    className="pay_option"
                                                    defaultChecked=""
                                                    style={{verticalAlign: "middle"}}
                                                />
                                            </td>
                                            <td valign="top">
                                                <label htmlFor="pay_method1">
                                                    Thanh toán tiền mặt khi nhận hàng (tiền mặt / chuyển khoản)
                                                </label>
                                                <div className="pay_content" style={{display: "none"}}></div>
                                            </td>
                                        </tr>
                                        <tr id="pay-2">
                                            <td valign="top">
                                                <input
                                                    type="radio"
                                                    id="pay_method2"
                                                    name="pay_method"
                                                    defaultValue={2}
                                                    className="pay_option"
                                                    style={{verticalAlign: "middle"}}
                                                />
                                            </td>
                                            <td valign="top">
                                                <label htmlFor="pay_method2">
                                                    Thanh toán qua chuyển khoản qua tài khoản ngân hàng (khuyên
                                                    dùng)
                                                </label>
                                                <div className="pay_content" style={{display: "none"}}></div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="box-popup-cart-pay">
                                        <div className="box-popup-alepay hide">
                                            <p>
                                                Trước khi thực hiện đặt hàng và thanh toán online quý khách vui
                                                lòng liên hệ nhân viên tư vấn để kiểm tra tình trạng còn hàng của
                                                sản phẩm
                                            </p>
                                            <p>
                                                (Before making an order and online payment, please contact a staff
                                                to check the availability of the product)
                                            </p>
                                        </div>
                                        <div className="bg-popup hide" onClick="close_popup()"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <h3>Tổng tiền</h3>
                                    <table width="100%" cellPadding={5}>
                                        <tbody>
                                        <tr>
                                            <td>Tổng cộng</td>
                                            <td align="right">
                                                <span className="total-cart-price"><CurrencyFormatter
                                                    amount= {totalPrice()+" đ"}/></span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Khuyến mãi khi dùng Voucher</td>
                                            <td align="right">
                <span data-discount={0} id="price-discount">
                  00
                </span>{" "}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <b>Thành tiền</b>
                                            </td>
                                            <td align="right">
                                                <div className="red">
                                                    <b className="total-cart-payment text-18"><CurrencyFormatter
                                                        amount= {totalPrice()+" đ"}/></b>
                                                </div>
                                                <span className="text-12">(Giá đã bao gồm VAT)</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-btn">
                                        <a href="/cart?show=tragop&type=cart" className="btn btn-primary">
                                            Mua trả góp
                                        </a>
                                        <button type="submit" className="btn btn-red">
                                            <i className="fa fa-check"/> Đặt hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="send_order" defaultValue="yes"/>
                            <input
                                type="hidden"
                                id="js-total-before-fee-discount"
                                defaultValue={49530000}
                            />
                            <input type="hidden" id="js-discount-voucher" defaultValue={0}/>
                            <input
                                type="hidden"
                                name="coupon_code"
                                defaultValue=""
                                id="js_coupon_code"
                            />
                            <input type="hidden" id="js-discount-membership" defaultValue={0}/>
                            <input
                                type="hidden"
                                name="shipping_fee"
                                id="js-fee-shipping"
                                defaultValue={0}
                            />
                            <input type="hidden" name="cod_fee" id="js-fee-cod" defaultValue={0}/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
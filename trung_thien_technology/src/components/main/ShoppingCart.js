import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {CurrencyFormatter} from "../../util/ConverUnit";
import {decrement, increment, removeItem, resetCart} from "../../redux/ShoppingCartReducer";
import * as alert from "../../util/Alert";
import Swal from "sweetalert2";
import {toast} from "react-toastify";
import {PayPalButton} from "react-paypal-button-v2";
import * as shoppingCart from "../../service/ShoppingCartService";

export const ShoppingCart = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(false);
    const token = localStorage.getItem('token');

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total;
    };


    const saveOrder = () => {
        return products.map(p => ({
                id: +p.id,
                quantity: +p.quantity,
                price: +p.price
            })
        );
    }


    useEffect(() => {
        if (token) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [token]);

    useEffect(() => {
        document.title = "Giỏ hàng";
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div style={{
                width: "1350px",
                marginRight: "auto",
                marginLeft: "auto",
                maxWidth: "100%",
                padding: "0"
            }}>
                <div id="breadcrumb">
                    <ol>
                        <li>
                            <Link to="/" itemProp="item">
                                <span itemProp="name">Trang chủ</span>
                            </Link> <i className="fa fa-angle-right"/>
                        </li>
                        <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                            <Link to="/shopping-cart" itemProp="item" className="current">
                                <span itemProp="name"><h1>Giỏ hàng</h1></span>
                            </Link>
                        </li>
                    </ol>
                </div>
                <div className="clearfix"></div>
                <div className=" bg-white overflow-hidden d-flex">
                    {
                        products.length === 0 ?
                            <h3 style={{color: "red", textAlign: "center", width: "75%", lineHeight: "390px"}}>Không có
                                sản phẩm
                                nào trong giỏ hàng</h3> :

                            <table id="tbl-cart-item" className="table-mega" style={{width: "70%"}}>
                                <thead>
                                <tr>
                                    <td width="13%" style={{paddingLeft: "7px"}}>Sản phẩm</td>
                                    <td width="28%"></td>
                                    <td width="15%" style={{paddingLeft: "7px"}}>Đơn giá</td>
                                    <td width="16%" style={{paddingLeft: "7px"}}>Số lượng</td>
                                    <td width="15%" style={{paddingLeft: "7px"}}>Thành tiền</td>
                                    <td width="10%" style={{paddingLeft: "7px"}}>Xóa</td>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    products?.map((items, index) => (
                                        <tr className="item js-item-row" key={index}>
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
                                                <div className="item-quan">
                                                    <div className="container-quantity_cart">
                                                        <button type="button" className="btn-left"
                                                                onClick={() => dispatch(decrement(items))}>
                                                            <svg
                                                                width={16}
                                                                height={16}
                                                                viewBox="0 0 16 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >{
                                                                items.quantity > 1 ?
                                                                    <path d="M13.3332 8H7.99984H2.6665"
                                                                          stroke={"#111111"} strokeWidth="2"
                                                                          strokeLinecap="round"/> :
                                                                    <path
                                                                        d="M13.3332 8H7.99984H2.6665"
                                                                        stroke="#cfcfcf"
                                                                        strokeWidth={2}
                                                                        strokeLinecap="round"
                                                                    />
                                                            }
                                                            </svg>
                                                        </button>
                                                        <input
                                                            readOnly={true}
                                                            value={items.quantity}
                                                            type="text"
                                                            size={4}
                                                            min={1}
                                                            className="input-quantity_cart"
                                                        />
                                                        <button type="button" className="btn-right"
                                                                onClick={() => dispatch(increment(items))}>
                                                            <svg
                                                                width={16}
                                                                height={16}
                                                                viewBox="0 0 16 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M8.00033 13.3334V8.00008M8.00033 8.00008V2.66675M8.00033 8.00008H13.3337M8.00033 8.00008H2.66699"
                                                                    stroke="#111111"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><b className="price" style={{cursor: "default"}}>
                                            <span className="total-item-price"><CurrencyFormatter
                                                amount={parseInt(items.price) * parseInt(items.quantity)}/></span> đ
                                            </b></td>
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
                                                                dispatch(removeItem(items.id))
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
                                <tfoot>
                                <tr>
                                    <td colSpan="3">
                                        <div className="cart-voucher">
                                            <input id="js_voucher_input" className="form-control"
                                                   placeholder="Mã voucher"
                                                   size="20"/>
                                            <button className="btn btn-secondary js-voucher-submit"
                                                    style={{lineHeight: "26.4px"}}>Áp dụng
                                            </button>
                                        </div>
                                    </td>

                                    <td colSpan="3" style={{textAlign: "right"}} className="pr-2">
                                        <button className="btn btn-red" onClick={() => dispatch(resetCart())}>Xóa
                                            tất cả
                                        </button>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                    }
                    <div className="col-4 p-2" style={{border: "solid 1px #eee"}}>
                        <h3 style={{
                            textTransform: "uppercase",
                            fontSize: "16px",
                            fontWeight: "700",
                            background: "#eee",
                            padding: "11px 10px"
                        }}>Tổng tiền</h3>
                        <table width="100%" cellPadding={5}>
                            <tbody>
                            <tr>
                                <td>Tổng cộng</td>
                                <td align="right">
                                                <span className="total-cart-price"><CurrencyFormatter
                                                    amount={totalPrice() + " đ"}/></span>
                                </td>
                            </tr>
                            <tr>
                                <td>Khuyến mãi khi dùng Voucher</td>
                                <td align="right">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Thành tiền</b>
                                </td>
                                <td align="right">
                                    <div className="red">
                                        <b className="total-cart-payment text-18"><CurrencyFormatter
                                            amount={totalPrice() + " đ"}/></b>
                                    </div>
                                    <span className="text-12">(Giá đã bao gồm VAT)</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="cart-btn">

                            {
                                isLogin === true ?
                                    (<>
                                            <button type="submit" className="btn btn-red">
                                                <i className="fa fa-check"/> Đặt hàng
                                            </button>
                                            <PayPalButton
                                                amount={(Math.ceil((totalPrice()) / 23000)) !==0 ? (Math.ceil((totalPrice()) / 23000)) : "0.01"
                                                }
                                                onApprove={async (data, actions) => {
                                                    try {
                                                        await shoppingCart.paymentPayPal(saveOrder())
                                                      await actions.order.capture();
                                                        await dispatch(resetCart())
                                                        toast.success("Giao dịch hoàn thành");
                                                    } catch (e) {
                                                        toast.error("Không thể lưu đơn hàng trên máy chủ");
                                                    }
                                                }
                                                }
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <Link to="/login" type="button" className="btn btn-red"
                                                  onClick={() => toast.warning("Vui lòng đăng nhập!!")}>
                                                <i className="fa fa-check"/> Đặt hàng
                                            </Link>
                                        </>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
import React, {useEffect} from "react";

export function ShoppingCart() {
    useEffect(() => {
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
                            <li>
                                <ion-icon name="chevron-forward-outline"/></li>
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
                            <tr className="item js-item-row" data-variant_id="0" data-item_id="22669"
                                data-item_type="product">
                                <td>
                                    <img src="https://mega.com.vn/media/product/120_22669_gogeta_02.png"
                                         style={{
                                             verticalAlign: "middle",
                                             marginRight: "10px",
                                             margin: "10px",
                                             float: "left",
                                             width: "100px"
                                         }}/>
                                    <div style={{marginLeft: "120px", paddingRight: "20px"}}>
                                        <a href="/pc-mega-gogeta.html"
                                           style={{textDecoration: "none", paddingTop: "10px", display: "block"}}>
                                            PC MEGA GOGETA
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <input type="hidden" className="buy-price" value="26900000"/>
                                    <span className="js-show-buy-price">26.900.000 đ</span>
                                </td>
                                <td>
                                    <input value="1" style={{textAlign: "center"}}
                                           className="buy-quantity quantity-change text-center" size="5"/>
                                </td>
                                <td><b className="price">
                                    <span className="total-item-price">26.900.000</span> đ
                                </b></td>
                                <td>
                                    {/*    <a className="delete-from-cart"><i className="fa fa-trash-o"*/}
                                    {/*                                       aria-hidden="true"/>*/}
                                    {/*</a>*/}
                                    <button
                                        style={{
                                            background: "#e00",
                                            display: "inline-flex",
                                            flexWrap: "wrap",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            lineHeight: "normal",
                                            fontSize: "1rem",
                                            padding: " 0.5rem",
                                            borderColor: "#fefefe",
                                            color: "#fff",
                                            fontWeight: "500",
                                            textTransform: "uppercase",
                                            borderRadius: "0.25rem",
                                            boxShadow: "none",
                                            whiteSpace: " nowrap"
                                        }}
                                    >Xóa
                                    </button>
                                </td>
                            </tr>
                            <tr className="item js-item-row" data-variant_id="0" data-item_id="24387"
                                data-item_type="product">
                                <td>
                                    <img src="https://mega.com.vn/media/product/120_24387_pc_easy_gaming_100hz_01.png"
                                         style={{
                                             verticalAlign: "middle",
                                             marginRight: "10px",
                                             margin: "10px",
                                             float: "left",
                                             width: "100px"
                                         }}/>
                                    <div style={{marginLeft: "120px", paddingRight: "20px"}}>
                                        <a href="/pc-easy-gaming-100hz.html"
                                           style={{textDecoration: "none", paddingTop: "10px", display: "block"}}>
                                            PC Easy Gaming 100hz
                                        </a>n
                                    </div>
                                </td>
                                <td>
                                    <span className="js-show-buy-price">8.140.000 đ</span>
                                </td>
                                <td>
                                    <input value="1" style={{textAlign: "center"}}
                                           className="buy-quantity quantity-change text-center" size="5"/>
                                </td>
                                <td><b className="price">
                                    <span className="total-item-price">8.140.000</span> đ
                                </b></td>
                                <td>
                                    {/*    <a className="delete-from-cart"><i className="fa fa-trash-o"/>*/}
                                    {/*</a>*/}
                                    <button
                                        style={{
                                            background: "#e00",
                                            display: "inline-flex",
                                            flexWrap: "wrap",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            lineHeight: "normal",
                                            fontSize: "1rem",
                                            padding: " 0.5rem",
                                            borderColor: "#fefefe",
                                            color: "#fff",
                                            fontWeight: "500",
                                            textTransform: "uppercase",
                                            borderRadius: "0.25rem",
                                            boxShadow: "none",
                                            whiteSpace: " nowrap"
                                        }}
                                    >Xóa
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                            <tfoot className="tfoot-mega">
                            <tr>
                                <td>
                                    <b style={{marginLeft: "5px"}}>Tổng tiền:</b>
                                    <b className="total-cart-price text-18" style={{marginLeft: "5px"}}>35.040.000 đ</b>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="bg-white overflow-hidden mt-3 p-3">
                        <form>
                            <div className="row" id="cart-step2">
                                <div className="col-4">
                                    <h3>Thông tin người mua</h3>
                                    <p className="text-12">Để tiếp tục đặt hàng, quý khách xin vui lòng nhập thông tin
                                        bên
                                        dưới</p>
                                    <div className="form-group row" style={{justifyContent: "start"}}>
                                        <label className="col-md-3 col-12" style={{marginLeft:"1px"}}>Họ tên*</label>
                                        <div className="col-md-9 col-12"><input type="text" name="customerName"
                                                                                id="buyer_name" value=""
                                                                                className="form-control"/></div>
                                    </div>
                                    <div className="form-group row" style={{justifyContent: "start"}}>
                                        <label className="col-md-3 col-12">SĐT*</label>
                                        <div style={{marginLeft:"13px"}} className="col-md-9 col-12">
                                            <input type="text" name="phoneNumber"
                                                   id="buyer_tel" value=""
                                                   className="form-control"/></div>
                                    </div>
                                    <div className="form-group row" style={{justifyContent: "start"}}>
                                        <label className="col-md-3 col-12">Email*</label>
                                        <div className="col-md-9 col-12" style={{marginLeft:"7px"}}><input type="text" name="email"
                                                                                value="" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row" style={{justifyContent: "start"}}>
                                        <label className="col-md-3 col-12">Địa chỉ*</label>
                                        <div className="col-md-9 col-12"><textarea name="address"
                                                                                   id="buyer_address"
                                                                                   className="form-control"
                                                                                   cols={23}
                                                                                   rows="3"/></div>
                                    </div>
                                    <div className="form-group row" style={{justifyContent: "start"}}>
                                        <label className="col-md-3 col-12">Ghi chú</label>
                                        <div className="col-md-9 col-12"><textarea name="notes"
                                                                                   cols={23}
                                                                                   className="form-control"
                                                                                   rows="3"/></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <h3>Phương thức thanh toán</h3>
                                    <table>
                                        <tbody>
                                        <tr id="pay-1">
                                            <td valign="top"><input type="radio" id="pay_method1" name="pay_method"
                                                                    value="1"
                                                                    className="pay_option"
                                                                    style={{verticalAlign: "middle"}}/></td>
                                            <td valign="top">
                                                <label htmlFor="pay_method1">Thanh toán tiền mặt khi nhận hàng (tiền mặt
                                                    /
                                                    chuyển
                                                    khoản)</label>
                                                <div className="pay_content" style={{display: "none"}}>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="pay-2">
                                            <td valign="top"><input type="radio" id="pay_method2" name="pay_method"
                                                                    value="2"
                                                                    className="pay_option"
                                                                    style={{verticalAlign: "middle"}}/>
                                            </td>
                                            <td valign="top">
                                                <label htmlFor="pay_method2">Thanh toán qua chuyển khoản qua tài khoản
                                                    ngân
                                                    hàng (khuyên
                                                    dùng)</label>
                                                <div className="pay_content" style={{display: "none"}}>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <div >
                                    <h3>Tổng tiền</h3>
                                    <table width="100%" cellPadding="5">
                                        <tbody>
                                        <tr>
                                            <td>Tổng cộng</td>
                                            <td align="right"><span className="total-cart-price">26.900.000</span> đ
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><b>Thành tiền</b></td>
                                            <td align="right">
                                                <div className="red"><b
                                                    className="total-cart-payment text-18">26.900.000</b> đ
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-btn">
                                        <button type="submit" className="btn btn-red"><i className="fa fa-check"/> Đặt
                                            hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
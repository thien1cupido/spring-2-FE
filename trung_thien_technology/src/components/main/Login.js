import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";


export function Login() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title="Đăng nhập";
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="container" style={{marginBottom: "50px", marginTop: "50px"}}>
                <div id="breadcrumb">
                    <ol itemScope="" itemType="http://schema.org/BreadcrumbList">
                        <li
                            itemProp="itemListElement"
                            itemScope=""
                            itemType="http://schema.org/ListItem"
                        >
                            <Link to="/"  itemProp="item">
                                <span itemProp="name">Trang chủ</span>

                            </Link>

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
                            <Link  to="/login" itemProp="item" className="current">
                                <span itemProp="name">Đăng nhập</span>
                            </Link>
                            <meta itemProp="position" content={2}/>
                        </li>
                    </ol>
                </div>
                <div className="clearfix"/>
                <Formik
                    initialValues={{
                        username: "",
                        password: ""
                    }}
                    validationSchema={Yup.object({
                        username: Yup.string().required("Vui lòng nhập tài khoản"),
                        password: Yup.string().required("Vui lòng nhập mật khẩu"),
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        const login = async () => {
                            try {
                                const response = await axios.post("http://localhost:8080/api/user/authenticate", values);
                                if (response.data.token) {
                                    localStorage.setItem("token", response.data.token);
                                    localStorage.setItem("username", response.data.username);
                                    localStorage.setItem("role", response.data.role);
                                }
                                navigate("/");
                            } catch (e) {
                                toast.error(e.response.data)
                            } finally {
                                setSubmitting(false);
                            }
                        }
                        login();
                    }
                    }
                >
                    <Form className="shadow p-3">
                        <div className="row">
                            <div className="col-6">
                                <p id="login_title">
                                    <b>Thông tin khách hàng đăng nhập hệ thống</b>
                                </p>
                                <table cellPadding={5} cellSpacing={0} width="100%">
                                    <tbody>

                                    <tr>
                                        <td><label htmlFor="username">Tên đăng nhập</label></td>
                                        <td>
                                            <Field
                                                type="text"
                                                name="username"
                                                className="form-control"
                                            />
                                        </td>
                                        <td> <ErrorMessage
                                            name="username"
                                            component="span"
                                            style={{color:"red"}}
                                        /></td>
                                    </tr>
                                    <tr>
                                        <td>Mật khẩu</td>
                                        <td>
                                            <Field
                                                type="password"
                                                name="password"
                                                className="form-control"
                                            />
                                        </td>
                                        <td><ErrorMessage
                                            name="password"
                                            component="span"
                                            style={{color:"red"}}
                                        /></td>
                                    </tr>
                                    <tr>
                                        <td/>
                                        <td>
                                            <div style={{position: "relative"}}>
                                                <button type="submit" className="btn btn-secondary mr-3">Đăng nhập
                                                </button>
                                                <a href="/quen-mat-khau">Quên mật khẩu ?</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="col-6">
                                <p>
                                    <b>Bạn chưa là thành viên ?</b>
                                </p>
                                <p>
                                    Đăng ký là thành viên để hưởng nhiều lợi ích và đặt mua hàng dễ dàng
                                    hơn.
                                </p>
                                <p>
                                    <a
                                        title="Click đăng ký tài khoản miễn phí"
                                        href="/dang-ky"
                                        className="bold"
                                    >
                                        <b>Đăng ký tài khoản</b>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>

        </>
    );
}
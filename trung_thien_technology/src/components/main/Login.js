import React, {useEffect} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";


export function Login() {
    const navigate = useNavigate();
    useEffect(() => {
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
                            <a href="/" itemProp="item">
                                <span itemProp="name">Trang chủ</span>

                            </a>

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
                            <a href="" itemProp="item" className="current">
                                <span itemProp="name">Đăng nhập</span>
                            </a>
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
                                console.log(values)
                                if (response.data.token) {
                                    localStorage.setItem("token", response.data.token);
                                    localStorage.setItem("username", response.data.username);
                                    localStorage.setItem("role", response.data.role);
                                }
                                navigate("/");
                            } catch (e) {
                                console.log(e)
                                toast.error(e.data);
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
                                            <ErrorMessage
                                                name="username"
                                                component="span"
                                                className="error-r mx-1"
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Mật khẩu</td>
                                        <td>
                                            <Field
                                                type="password"
                                                name="password"
                                                className="form-control"
                                            />
                                            <ErrorMessage
                                                name="password"
                                                component="span"
                                                className="error-r mx-1"
                                            />
                                        </td>
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
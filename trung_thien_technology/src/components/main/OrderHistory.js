import * as orderService from '../../service/OrderService';
import InfoIcon from '@mui/icons-material/Info';
import React, {useEffect, useState} from "react";
import Modal from 'react-modal';
import '../../css/customer.scss.css';
import ReactPaginate from "react-paginate";
import {toast} from "react-toastify";
import {CurrencyFormatter, DateFormatter2} from "../../util/ConverUnit";

Modal.setAppElement('#root');
const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: '70%',
        backgroundColor: 'white',
        color: 'black',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    table: {
        color: 'black',
        fontWeight: "300"
    }
};

export function OrderHistory() {

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = async (page) => {
        setCurrentPage(+page.selected);
        const result = await orderService.findAllOrder(page.selected);
        setBill(result.data.content);
    };

    const [bills, setBill] = useState([])
    const [billDetail, setBillDetail] = useState([])
    const getBill = async () => {
        try {
            const res = await orderService.findAllOrder(currentPage);
            setBill(res.data.content)
            const totalPages = res.data.totalPages;
            setPageCount(totalPages);
        } catch (error) {
            console.log(error)
        }
    }
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    const detailBill = async (id) => {
        try {
            const res = await orderService.findAllOrderDetail(id);
            await setBillDetail(res.data)
        } catch (error) {
            if (error.response.status == 500) {
                toast.error("no content")
            }
        }
        openModal();
    }

    useEffect(() => {
        document.title = "Lịch sử mua hàng"
        window.scrollTo(0, 0);
        getBill()
    }, []);

    if (!billDetail) {
        return null;
    }

    return (
        <>
            <div className="container" style={{height: "80vh"}}>
                <main>
                    <section className="table__header" style={{justifyContent: "center"}}>
                        <h1 style={{textAlign: "center"}} className="my-5">LỊCH SỬ MUA HÀNG</h1>
                    </section>
                    <section className="table table-striped table-hover">
                        <table style={{textAlign: "center"}}>
                            <thead>
                            <tr>
                                <th style={{textAlign: "center"}}>
                                    STT
                                </th>
                                <th>
                                    Mã đơn hàng
                                </th>
                                <th style={{textAlign: "center"}}>
                                    Hình thức thanh toán
                                </th>
                                <th>
                                    Ngày đặt hàng
                                </th>
                                <th>
                                    Tổng tiền
                                </th>
                                <th style={{textAlign: "center"}}>
                                    Trạng thái thanh toán
                                </th>
                                <th style={{textAlign: "center"}}>
                                    Xem chi tiết
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                bills &&
                                bills.map((val, index) => (
                                    <tr key={index}>
                                        <td style={{textAlign: "center"}}> {index + 1} </td>
                                        <td>
                                            OD-{val.orderCode}
                                        </td>
                                        <td style={{textAlign: "center"}}>
                                            {val.paymentType}
                                        </td>
                                        <td>
                                            <DateFormatter2 date={val.createTime}/></td>
                                        <td>
                                            <CurrencyFormatter amount={val.totalPrice}/> đ
                                        </td>
                                        <td style={{textAlign: "center"}}>
                                            {
                                                val.paymentStatus === false ?
                                                    <p className="status pending">Chưa thanh toán</p>
                                                    :
                                                    <p className="status delivered">Đã thanh toán</p>
                                            }
                                        </td>
                                        <td style={{textAlign: "center"}}>
                                            <a
                                                onClick={() => (detailBill(val.id))}
                                            >
                                                <InfoIcon style={{marginLeft: "8%"}}/>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </section>
                    {
                        pageCount > 0 && bills.length>0 ? (
                            <div className="d-flex col-12 justify-content-end ">
                                <div className="d-grid mr-5">
                                    <ReactPaginate
                                        breakLabel="..."
                                        nextLabel={bills.length === 0 || pageCount === 1 ? "" : "Sau"}
                                        onPageChange={handlePageClick}
                                        pageCount={pageCount}
                                        previousLabel={bills.length === 0 || pageCount === 1 ? "" : "Trước"}
                                        containerClassName="pagination"
                                        pageLinkClassName={bills.length === 0 ? "" : "page-num"}
                                        nextLinkClassName={bills.length === 0 ? "" : "page-num"}
                                        previousLinkClassName={bills.length === 0 ? "" : "page-num"}
                                        activeClassName="active"
                                        disabledClassName="d-none"
                                    />
                                </div>
                            </div>
                        ) : ""
                    }
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Modal"
                    >
                        <button onClick={closeModal} className='btn btn-danger' style={{marginLeft: "92%"}}>Close
                        </button>
                        <section className="table__body" style={customStyles.table}>
                            <table>
                                <thead>
                                <tr>
                                    <th>
                                        STT
                                    </th>
                                    <th>Sản phẩm</th>
                                    <th>
                                        Giá
                                    </th>
                                    <th>
                                        Số lượng
                                    </th>
                                    <th>
                                        Tổng tiền
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    billDetail && billDetail.map((val, index) => (
                                        <tr key={index}>
                                            <td> {index + 1} </td>
                                            <td>
                                                <img src={val.image} alt="anh" width="85px"/>
                                                <span style={{marginLeft: "10px"}}> {val.productName}</span>

                                            </td>
                                            <td>
                                                <CurrencyFormatter amount={val.price}/> đ
                                            </td>
                                            <td> {val.quantity} </td>
                                            <td><CurrencyFormatter amount={val.quantity * val.price}/> đ</td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </section>
                    </Modal>
                </main>
            </div>
        </>
    )
}
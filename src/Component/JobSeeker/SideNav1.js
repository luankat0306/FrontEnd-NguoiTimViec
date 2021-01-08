import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FcSearch, FcBusinessman, FcOk, FcFilingCabinet } from "react-icons/fc";
import AuthService from "../../services/AuthService";
import ApplicantService from "../../services/ApplicantService";

export default class SideNav1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicant: { user: { fullname: "" } },
        };
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        const idUser = AuthService.getCurrentUser().id;
        ApplicantService.getApplicantByUserId(idUser).then((res) => {
            this.setState({ applicant: res.data });
            localStorage.setItem(
                "applicant",
                JSON.stringify(this.state.applicant.id)
            );
        });
    }
    logout() {
        AuthService.logout();
    }
    render() {
        const applicant = this.state.applicant;
        return (
            <>
                <ul>
                    <li>
                        <img
                            src="../../../img/jobseeker_avt/default.png"
                            alt=""></img>

                        <h5>
                            {applicant.id !== {} ? applicant.user.fullname : ""}{" "}
                        </h5>
                    </li>
                    <hr />
                    <div style={{ textAlign: "center" }}>
                        <li>
                            <NavLink to="/nguoi-tim-viec/tim-kiem-cong-viec">
                                <span>
                                    <FcSearch />
                                </span>
                                Tìm Kiếm Việc Làm
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nguoi-tim-viec/quan-ly-tai-khoan">
                                <span>
                                    <FcBusinessman />
                                </span>
                                Quản lý tài khoản
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nguoi-tim-viec/ho-so-da-nop">
                                <span>
                                    <FcOk />
                                </span>
                                Hồ Sơ Đã Nộp
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nguoi-tim-viec/cong-viec-da-luu">
                                <span>
                                    <FcFilingCabinet />
                                </span>
                                Công Việc Đã Lưu
                            </NavLink>
                        </li>
                    </div>
                    <hr />
                    <div className="logout">
                        <Button variant="danger" onClick={this.logout}>
                            <NavLink to="/dang-nhap">Đăng Xuất</NavLink>
                        </Button>
                    </div>
                </ul>
            </>
        );
    }
}

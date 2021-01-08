import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import {
    FcDepartment,
    FcApproval,
    FcBriefcase,
    FcFeedback,
} from "react-icons/fc";
import AuthService from "../../services/AuthService";

export default class SideNav2 extends Component {
    logout() {
        AuthService.logout();
    }
    render() {
        return (
            <>
                <ul>
                    <li>
                        <img
                            src="../../../img/jobseeker_avt/default.png"
                            alt=""></img>

                        <h5>Ten Cong Ty</h5>
                    </li>
                    <hr />
                    <div style={{ textAlign: "center" }}>
                        <li>
                            <NavLink to="/nha-tuyen-dung/quan-ly-tai-khoan">
                                <span>
                                    <FcDepartment />
                                </span>
                                Quản lý tài khoản
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nha-tuyen-dung/dang-tin">
                                <span>
                                    <FcBriefcase />
                                </span>
                                Đăng Tin Việc Làm
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nha-tuyen-dung/kiem-duyet-ho-so">
                                <span>
                                    <FcFeedback />
                                </span>
                                Kiểm Duyệt Hồ Sơ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nha-tuyen-dung/ho-so-da-nhan">
                                <span>
                                    <FcApproval />
                                </span>
                                Hồ Sơ Đã Nhận
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

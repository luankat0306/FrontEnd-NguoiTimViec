import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="Nav" style={{ background: this.props.background }}>
                <NavLink to="/">
                    <img
                        style={{ height: "36px", margin: "10px" }}
                        src="../../../img/logo.svg"
                        alt=""></img>
                </NavLink>
                <div className="NavMenu">
                    <NavLink to="/nha-tuyen-dung">Nhà Tuyển Dụng </NavLink>
                    <NavLink to="/nguoi-tim-viec/tim-kiem-cong-viec">
                        Người Tìm Việc
                    </NavLink>
                </div>
                <div className="NavBtnLink">
                    <div className="NavBtn">
                        <NavLink to="/dang-nhap">Đăng Nhập</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from "react";
import EmployerIndex from "../EmployerIndex";
import { Button } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default class CVDetail extends Component {
  render() {
    return (
      <div>
        <EmployerIndex />
        <div className="page-content">
          <div className="wrapper">
            <div className="left">
              <div className="edit-avatar">
                <img
                  className="avatar"
                  src="../../../img/jobseeker_avt/default.png"
                  alt=""
                ></img>
              </div>
              <h4>Trần Vũ Trí Luân</h4>

              <hr />
              <div className="social-network">
                <Button variant="primary" href="" target="_blank">
                  <FaFacebook />
                </Button>
                <Button variant="danger" href="" target="_blank">
                  <FaInstagram />
                </Button>
              </div>
            </div>

            <div className="right">
              <div className="cv">
                <h3>FRESH ENGINEER / SINH VIÊN MỚI TỐT NGHIỆP</h3>
                <div className="cv_data">
                  <div className="data">
                    <h4>Trình Độ</h4>
                    <p>trinh do</p>
                  </div>
                  <div className="data">
                    <h4>Kinh Nghiệm</h4>
                    <p>kinh nghiem</p>
                  </div>
                  <div className="data">
                    <h4>Hình Thức</h4>
                    <p>hinh thuc</p>
                  </div>
                  <div className="data">
                    <h4>Ngoại Ngữ</h4>
                    <p>ngoai ngu</p>
                  </div>
                  <div className="data">
                    <h4>Mức Lương</h4>
                    <p>muc luong</p>
                  </div>
                </div>
              </div>

              <div className="personalinfo">
                <h3>THÔNG TIN ỨNG vIÊN</h3>

                <div className="personalinfo_data">
                  <div className="data">
                    <h4>Email</h4>
                    <p>email</p>
                  </div>
                  <div className="data">
                    <h4>SĐT</h4>
                    <p>sdt</p>
                  </div>
                  <div className="data">
                    <h4>Giới Tính</h4>
                    <p>gioi tinh</p>
                  </div>

                  <div className="data">
                    <h4>Ngày Sinh</h4>
                    <p>ngay sinh</p>
                  </div>
                  <div className="data">
                    <h4>Tỉnh Thành</h4>
                    <p>tinh thanh</p>
                  </div>
                  <div className="data">
                    <h4>Địa Chỉ</h4>
                    <p>dia chi</p>
                  </div>
                </div>
              </div>
              <div>
                <Button id="approve-btn" variant="success">
                  Tiếp Nhận
                </Button>
                <Button id="decline-btn" variant="danger">
                  Từ Chối
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import EmployerIndex from "../EmployerIndex";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class CVReview extends Component {
  render() {
    return (
      <div>
        <EmployerIndex />
        <div className="page-content">
          <div className="box">
            <Table bordered hover>
              <thead className="table-header">
                <tr>
                  <th>ID</th>
                  <th>Tiêu Đề Bài Đăng</th>
                  <th>Họ Tên</th>
                  <th>SĐT</th>
                  <th>Email</th>
                  <th>Chi Tiết</th>
                </tr>
              </thead>
              <tbody className="table-body">
                <tr>
                  <td>1</td>
                  <td>Fresh Engineer/Sinh Viên Mới Tốt Nghiệp</td>
                  <td>Tran Vu Luan</td>
                  <td>0889429400</td>
                  <td>tranvuluan2270@gmail.com</td>
                  <td>
                    <NavLink to="/nha-tuyen-dung/chi-tiet-ho-so">
                      Chi Tiết
                    </NavLink>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Fresh Engineer/Sinh Viên Mới Tốt Nghiệp</td>
                  <td>Tran Vu Luan</td>
                  <td>0889429400</td>
                  <td>tranvuluan2270@gmail.com</td>
                  <td>
                    <NavLink to="/nha-tuyen-dung/chi-tiet-ho-so">
                      Chi Tiết
                    </NavLink>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Fresh Engineer/Sinh Viên Mới Tốt Nghiệp</td>
                  <td>Tran Vu Luan</td>
                  <td>0889429400</td>
                  <td>tranvuluan2270@gmail.com</td>
                  <td>
                    <NavLink to="/nha-tuyen-dung/chi-tiet-ho-so">
                      Chi Tiết
                    </NavLink>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Fresh Engineer/Sinh Viên Mới Tốt Nghiệp</td>
                  <td>Tran Vu Luan</td>
                  <td>0889429400</td>
                  <td>tranvuluan2270@gmail.com</td>
                  <td>
                    <NavLink to="/nha-tuyen-dung/chi-tiet-ho-so">
                      Chi Tiết
                    </NavLink>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

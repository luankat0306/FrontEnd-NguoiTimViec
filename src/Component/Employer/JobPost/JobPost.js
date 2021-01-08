import React, { Component } from "react";
import EmployerIndex from "../EmployerIndex";
import { ListGroup, Button, Row, Col, Container } from "react-bootstrap";
import { JobPosting } from "./Modals";

export default class JobPost extends Component {
  render() {
    return (
      <div>
        <EmployerIndex />
        <div className="page-content">
          <div className="box">
            <Container>
              <Row>
                <Col id="left">
                  <h4>Công Việc Đã Đăng</h4>
                </Col>
                <Col id="right">
                  <JobPosting />
                </Col>
              </Row>
              <hr />
              <ListGroup className="job-post">
                <ListGroup.Item variant="info" className="list-item">
                  <Row>
                    <Col id="left">
                      <h5>Fresh Engineer / Sinh Viên Mới Tốt Nghiệp</h5>
                    </Col>
                    <Col id="right">
                      <Button variant="outline-danger">Hủy Bỏ</Button>
                    </Col>
                  </Row>
                  <hr />

                  <Row>
                    <Col>
                      <h6>Vị Trí Tuyển Dụng</h6>
                      <p>vi tri</p>
                    </Col>
                    <Col>
                      <h6>Tỉnh Thành</h6>
                      <p>tinh thanh</p>
                    </Col>
                    <Col>
                      <h6>Số Lượng</h6>
                      <p>so luong</p>
                    </Col>
                    <Col>
                      <h6>Mức Lương</h6>
                      <p>muc luong</p>
                    </Col>
                    <Col>
                      <h6>Hạn Nộp</h6>
                      <p>han nop</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <h6>Mô Tả Công Việc</h6>
                      <div>
                        <Col>
                          <p>
                            - New Model transfer from Headquarter to SEHC
                            factory.
                          </p>
                        </Col>
                        <Col>
                          <p>
                            - Improving Quality, Productivity for TV, MON, Panel
                            (LCM), Refrigerator, Washing machine, Vacuum
                            Cleaner.
                          </p>
                        </Col>
                        <Col>
                          <p>- Control Process Quality Control (PQC) Report.</p>
                        </Col>
                        <Col>
                          <p>- Suggest & Improve Quality Procedure.</p>
                        </Col>
                        <Col>
                          <p>- Ensure Quality of Production Line.</p>
                        </Col>
                      </div>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Row, Col, NavLink, Container } from "react-bootstrap";
import CandidateService from "../../services/CandidateService";
import EnterpriseService from "../../services/EnterpriseService";
import FileService from "../../services/FileService";
import NavBar from "../Reuse/NavBar";
import SearchBar from "../Reuse/SearchBar";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enterprises: [],
            image: "",
        };
    }

    componentDidMount() {
        CandidateService.top5().then((res) =>
            this.setState({ enterprises: res.data })
        );
    }
    render() {
        const enterprises = this.state.enterprises;
        console.log(enterprises);
        return (
            <>
                <NavBar background="rgba(0, 0, 0, 0.225)" />
                <div className="home-banner">
                    <img src="../../../img/home-banner.jpg" alt="" />
                    <h1>Tìm Kiếm Công Việc Mơ Ước</h1>
                    <SearchBar top="-50vh" />
                </div>

                <div className="body">
                    <h1>Nhà Tuyển Dụng Hàng Đầu</h1>
                    <Container>
                        <Row className="company-box">
                            <Col>
                                {enterprises.map((enterprise) => (
                                    <img
                                        src={FileService.downloadFile(
                                            enterprise.user.image
                                        )}
                                        alt=""
                                    />
                                ))}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="footer">
                    <Row>
                        <Col>
                            <h6>VietJobs</h6>
                            <NavLink>Liên Hệ</NavLink>
                            <NavLink>Hỏi Đáp</NavLink>
                            <NavLink>Thỏa Thuận Sử Dụng</NavLink>
                            <NavLink>Quy Định Bảo Mật</NavLink>
                        </Col>
                        <Col>
                            <h6>Việc Làm Theo Tỉnh Thành</h6>
                            <NavLink>Hồ Chí Minh</NavLink>
                            <NavLink>Hà Nội</NavLink>
                            <NavLink>Đà Nẵng</NavLink>
                        </Col>
                        <Col>
                            <h6>Việc Làm Theo Ngành Nghề</h6>
                            <NavLink>Kế Toán</NavLink>
                            <NavLink>IT-Phần Mềm</NavLink>
                            <NavLink>Giáo Dục-Đào Tạo</NavLink>
                            <NavLink>Ngân Hàng</NavLink>
                        </Col>
                        <Col>
                            <h6>Hỗ Trợ</h6>
                            <p>Võ Trí Luân</p>
                            <p>Trần Vũ Luân</p>
                            <p>Trần Phúc Hậu</p>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

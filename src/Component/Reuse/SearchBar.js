import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";
import ProvinceServic from "../../services/ProvinceService";
import CareerService from "../../services/CareerService";
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            careers: [],
            provinces: [],
            keyword: "",
            career: "",
            province: "",
        };
        this.search = this.search.bind(this);
        this.handleCareer = this.handleCareer.bind(this);
        this.handleKeyword = this.handleKeyword.bind(this);
        this.handleProvince = this.handleProvince.bind(this);
    }

    componentDidMount() {
        const search = new URLSearchParams(window.location.search);
        if (
            search.get("tu-khoa") != null ||
            search.get("nganh-nghe") != null ||
            search.get("tinh-thanh") != null
        ) {
            this.setState({
                keyword: search.get("tu-khoa"),
                career: search.get("nganh-nghe"),
                province: search.get("tinh-thanh"),
            });
        }

        ProvinceServic.listProvince().then((res) =>
            this.setState({ provinces: res.data })
        );

        CareerService.getCareers().then((res) =>
            this.setState({ careers: res.data })
        );
    }

    handleKeyword(e) {
        this.setState({ keyword: e.target.value });
    }

    handleCareer(e) {
        this.setState({ career: e.target.value });
    }

    handleProvince(e) {
        this.setState({ province: e.target.value });
    }

    search() {
        const { keyword, province, career } = this.state;
        window.location.replace(
            `/nguoi-tim-viec/tim-kiem-cong-viec?tu-khoa=${keyword}&nganh-nghe=${career}&tinh-thanh=${province}`
        );
    }

    render() {
        const { careers, provinces, keyword, province, career } = this.state;
        return (
            <div
                className="search-bar"
                style={{ top: this.props.top, position: this.props.position }}>
                <Form style={{ width: "100%" }}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Control
                                value={keyword}
                                defaultValue=""
                                onChange={this.handleKeyword}></Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control
                                as="select"
                                onChange={this.handleCareer}
                                defaultValue=""
                                value={career}>
                                <option value="">Chọn Ngành Nghề...</option>
                                {careers.map((career) => (
                                    <option value={career.name}>
                                        {career.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control
                                as="select"
                                onChange={this.handleProvince}
                                defaultValue=""
                                value={province}>
                                <option value="">Chọn Tỉnh Thành...</option>
                                {provinces.map((province) => (
                                    <option value={province.province}>
                                        {province.province}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <div style={{ height: "calc(1.5em + .75rem + 2px);" }}>
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                }}
                                to={`/nguoi-tim-viec/tim-kiem-cong-viec?tu-khoa=${keyword}&nganh-nghe=${career}&tinh-thanh=${province}`}>
                                <Button
                                    variant="success"
                                    type="submit"
                                    onClick={this.search}>
                                    {" "}
                                    Tìm Kiếm
                                </Button>
                            </Link>
                        </div>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

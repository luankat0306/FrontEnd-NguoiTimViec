import React, { Component } from "react";
import SearchBar from "../Reuse/SearchBar";
import { NavLink, Link } from "react-router-dom";
import {
    Row,
    Col,
    Card,
    Button,
    CardColumns,
    Alert,
    Form,
} from "react-bootstrap";
import JobService from "../../services/JobService";
import JobSavedService from "../../services/JobSavedService";
import AuthService from "../../services/AuthService";
import CandidateService from "../../services/CandidateService";
import ResumeService from "../../services/ResumeService";

export default class JobSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            auth: false,
            error: "",
            success: "",
            resume: {},
        };
        this.sendCV = this.sendCV.bind(this);
        this.saveCV = this.saveCV.bind(this);
    }
    componentDidMount() {
        const applicantId = localStorage.getItem("applicant");
        JobService.getJobs()
            .then((res) => {
                this.setState({ jobs: res.data });
            })
            .then(() => {
                const token = AuthService.getCurrentUser();
                if (token) {
                    this.setState({ auth: true });
                }
            });
        ResumeService.getResumeByApplicant(applicantId).then((res) => {
            this.setState({ resume: res.data });
        });
    }

    sendCV(jobId) {
        const cv = {
            resume: { id: this.state.resume.id },
            job: { id: jobId },
        };
        CandidateService.sendCV(cv)
            .then(() => this.setState({ success: "Nộp hồ sơ thành công" }))
            .catch((error) =>
                this.setState({ error: "Vui lòng tạo hồ sơ trước" })
            );
    }

    saveCV(jobId) {
        const applicantId = localStorage.getItem("applicant");
        const cv = {
            applicant: { id: applicantId },
            job: { id: jobId },
        };
        JobSavedService.createJobSaved(cv).then(() =>
            this.setState({ success: "Lưu thành công" })
        );
    }

    render() {
        const jobs = this.state.jobs;
        const error = this.state.error;
        const success = this.state.success;
        return (
            <div>
                <SearchBar top="2vh" />
                <div className="box">
                    <CardColumns>
                        {jobs.map((job) => (
                            <Card className="content">
                                <Card.Img
                                    variant="top"
                                    src="../../../img/employer_avt/samsung.png"
                                />
                                <Card.Body>
                                    <Card.Title>
                                        <Link
                                            to={`/nguoi-tim-viec/chi-tiet-cong-viec/${job.id}`}>
                                            <h1>{job.title}</h1>
                                        </Link>
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <NavLink
                                            to={`/nguoi-tim-viec/chi-tiet-cong-ty/${job.enterprise.id}`}>
                                            <h2>{job.enterprise.name}</h2>
                                        </NavLink>
                                    </Card.Subtitle>
                                    <Card.Text>
                                        <Row>
                                            <Col>
                                                <h3>Ngành Nghề</h3>
                                                <p>{job.career.name}</p>
                                            </Col>
                                            <Col>
                                                <h3>Tỉnh Thành</h3>
                                                <p>{job.province}</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h3>Mức Lương</h3>
                                                <p>{job.wage}</p>
                                            </Col>
                                            <Col>
                                                <h3>Hạn Nộp</h3>
                                                <p>
                                                    {
                                                        new Date(job.endDate)
                                                            .toLocaleString()
                                                            .split(",")[1]
                                                    }
                                                </p>
                                            </Col>
                                        </Row>
                                    </Card.Text>
                                </Card.Body>
                                {this.state.auth && (
                                    <Card.Footer>
                                        <Form>
                                            <Row>
                                                <Col>
                                                    <Button
                                                        variant="outline-success"
                                                        size="sm"
                                                        onClick={() =>
                                                            this.sendCV(job.id)
                                                        }>
                                                        Nộp Hồ Sơ
                                                    </Button>
                                                </Col>
                                                <Col>
                                                    <Button
                                                        variant="outline-primary"
                                                        size="sm"
                                                        onClick={() =>
                                                            this.saveCV(job.id)
                                                        }>
                                                        Lưu Công Việc
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card.Footer>
                                )}
                            </Card>
                        ))}
                    </CardColumns>
                </div>
                <br />
                {success !== "" && (
                    <Alert style={{ margin: "5px 70px" }} variant="success">
                        {success}
                    </Alert>
                )}
                {error !== "" && (
                    <Alert variant="danger">
                        {error}
                        <Alert.Link href="./quan-ly-tai-khoan">
                            Tại trang quản lý tài khoản
                        </Alert.Link>
                    </Alert>
                )}
            </div>
        );
    }
}

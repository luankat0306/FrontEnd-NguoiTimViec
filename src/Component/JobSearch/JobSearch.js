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
import FileService from "../../services/FileService";

export default class JobSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            auth: false,
            error: "",
            success: "",
            notFound: false,
            resume: {},
        };
        this.sendCV = this.sendCV.bind(this);
        this.saveCV = this.saveCV.bind(this);
    }
    componentDidMount() {
        const applicantId = localStorage.getItem("id");

        const search = new URLSearchParams(window.location.search);
        this.setState();
        if (
            (search.get("tu-khoa") == null &&
                search.get("nganh-nghe") == null &&
                search.get("tinh-thanh") == null) ||
            (search.get("tu-khoa") === "" &&
                search.get("nganh-nghe") === "" &&
                search.get("tinh-thanh") === "")
        ) {
            JobService.getJobs().then((res) => {
                this.setState({ jobs: res.data });
            });
        } else {
            const values = {
                keyword: search.get("tu-khoa"),
                career: search.get("nganh-nghe"),
                province: search.get("tinh-thanh"),
            };

            JobService.searchJobs(values).then(
                (res) => {
                    this.setState({ jobs: res.data });
                },
                (error) => {
                    if (this.state.jobs.length === 0) {
                        this.setState({ notFound: true });
                    }
                }
            );
        }

        ResumeService.getResumeByApplicant(applicantId).then((res) => {
            this.setState({ resume: res.data });
        });

        try {
            const token = AuthService.getCurrentUser();
            if (token.roles.includes("ROLE_USER")) {
                this.setState({ auth: true });
            }
        } catch (error) {}
    }

    sendCV(jobId) {
        const cv = {
            resume: { id: this.state.resume.id },
            job: { id: jobId },
        };
        CandidateService.sendCV(cv)
            .then(
                () => this.setState({ success: "Nộp hồ sơ thành công" }),
                (error) => {
                    this.setState({
                        error:
                            (error.response &&
                                error.response.data &&
                                error.response.data.message) ||
                            error.message ||
                            error.toString(),
                    });
                }
            )
            .catch(() => this.setState({ error: "Vui lòng tạo hồ sơ trước" }));
    }

    saveCV(jobId) {
        const applicantId = localStorage.getItem("id");
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
                    {this.state.notFound === true ? (
                        <Alert className="not-found" variant="danger">
                            Không Tìm Thấy Kêt Quả
                        </Alert>
                    ) : (
                        <CardColumns style={{ columnCount: "2" }}>
                            {jobs.map((job) => (
                                <Card className="content">
                                    <Card.Img
                                        variant="top"
                                        src={FileService.downloadFile(
                                            job.enterprise.user.image
                                        )}
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
                                                            new Date(
                                                                job.endDate
                                                            )
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
                                                                this.sendCV(
                                                                    job.id
                                                                )
                                                            }>
                                                            Nộp Hồ Sơ
                                                        </Button>
                                                    </Col>
                                                    <Col>
                                                        <Button
                                                            variant="outline-primary"
                                                            size="sm"
                                                            onClick={() =>
                                                                this.saveCV(
                                                                    job.id
                                                                )
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
                    )}
                </div>
                <br />
                {success !== "" && (
                    <Alert style={{ margin: "5px 70px" }} variant="success">
                        {success}
                    </Alert>
                )}
                {error !== "" && (
                    <Alert style={{ margin: "5px 70px" }} variant="danger">
                        {error}
                    </Alert>
                )}
            </div>
        );
    }
}

import React, { Component } from "react";
import JobSeekerIndex from "../JobSeekerIndex";
import { NavLink } from "react-router-dom";
import { Row, Col, Card, Button, CardColumns } from "react-bootstrap";
import ResumeService from "../../../services/ResumeService";
import CandidateService from "../../../services/CandidateService";

export default class AppliedCV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobApplieds: [],
            resume: [],
            error: "",
            success: "",
        };
        this.deleteCandidate = this.deleteCandidate.bind(this);
    }
    componentDidMount() {
        const applicantId = localStorage.getItem("applicant");
        ResumeService.getResumeByApplicant(applicantId).then((res) => {
            this.setState({ resume: res.data });

            CandidateService.getCandidateByResume(
                this.state.resume.id
            ).then((res) => this.setState({ jobApplieds: res.data }));
        });
    }

    deleteCandidate(id) {
        CandidateService.deleteCandidate(id).then(() => {
            this.setState({ success: "Xóa thành công" });

            window.location.reload();
        });
    }

    render() {
        const jobApplieds = this.state.jobApplieds;
        return (
            <div>
                <JobSeekerIndex />
                <div className="page-content">
                    <div className="box">
                        <CardColumns>
                            {jobApplieds.map((jobApplied) => (
                                <Card className="content">
                                    <Card.Img
                                        variant="top"
                                        src="../../../img/employer_avt/samsung.png"
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            <NavLink
                                                to={`/nguoi-tim-viec/chi-tiet-cong-viec/${jobApplied.job.id}`}>
                                                <h1>{jobApplied.job.title}</h1>
                                            </NavLink>
                                        </Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <NavLink
                                                to={`/nguoi-tim-viec/chi-tiet-cong-ty/${jobApplied.job.enterprise.id}`}>
                                                <h2>
                                                    {
                                                        jobApplied.job
                                                            .enterprise.name
                                                    }
                                                </h2>
                                            </NavLink>
                                        </Card.Subtitle>
                                        <Card.Text>
                                            <Row>
                                                <Col>
                                                    <h3>Ngành Nghề</h3>
                                                    <p>
                                                        {
                                                            jobApplied.job
                                                                .career.name
                                                        }
                                                    </p>
                                                </Col>
                                                <Col>
                                                    <h3>Tỉnh Thành</h3>
                                                    <p>
                                                        {
                                                            jobApplied.job
                                                                .province
                                                        }
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <h3>Mức Lương</h3>
                                                    <p>{jobApplied.job.wage}</p>
                                                </Col>
                                                <Col>
                                                    <h3>Hạn Nộp</h3>
                                                    <p>
                                                        {new Date(
                                                            jobApplied.job.endDate
                                                        ).toLocaleDateString()}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row>
                                            <Col>
                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() =>
                                                        this.deleteCandidate(
                                                            jobApplied.id
                                                        )
                                                    }>
                                                    Hủy Nộp Hồ Sơ
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            ))}
                        </CardColumns>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from "react";
import JobSeekerIndex from "../JobSeekerIndex";
import { Button } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import {
    ChangeEmail,
    ChangePassword,
    ChangePersonalInfo,
    ChangeCV,
    ChangeSocialNetwork,
    ChangeAvatar,
} from "./Modals";
import ApplicantService from "../../../services/ApplicantService";
import AuthService from "../../../services/AuthService";
import ResumeService from "../../../services/ResumeService";

export default class AccountManage1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicant: {
                id: "",
                birthday: "",
                gender: "",
                address: "",
                province: "",
                fb: "",
                ig: "",
                user: {
                    id: "",
                    fullname: "",
                    username: "",
                    phone: "",
                    email: "",
                    password: "",
                    image: "",
                    roles: [{ id: 3, name: "ROLE_USER" }],
                },
            },
            resume: {
                id: "",
                desiredVacancy: "",
                education: "",
                experience: "",
                jobType: "",
                foreignLanguage: "",
                wage: "",
                career: {
                    id: "",
                    name: "",
                },
            },
        };

        this.clickFb = this.clickFb.bind(this);
        this.clickIg = this.clickIg.bind(this);
    }
    componentDidMount() {
        const idUser = AuthService.getCurrentUser().id;
        ApplicantService.getApplicantByUserId(idUser).then((res) => {
            this.setState({ applicant: res.data });

            ResumeService.getResumeByApplicant(
                this.state.applicant.id
            ).then((res) => this.setState({ resume: res.data }));
        });
    }
    clickFb() {
        window.open(this.state.applicant.fb);
    }

    clickIg() {
        window.open(this.state.applicant.ig);
    }

    render() {
        const resume = this.state.resume;
        const applicant = this.state.applicant;
        return (
            <div>
                <JobSeekerIndex />
                <div className="page-content">
                    <div className="wrapper">
                        <div className="left">
                            <div className="edit-avatar">
                                <img
                                    className="avatar"
                                    src="../../../img/jobseeker_avt/default.png"
                                    alt=""></img>
                                <ChangeAvatar />
                            </div>
                            <h4>{applicant.user.fullname}</h4>
                            <p>{resume.career.name}</p>
                            <hr />
                            <div className="social-network">
                                <Button
                                    variant="primary"
                                    onClick={this.clickFb}
                                    target="_blank">
                                    <FaFacebook />
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={this.clickIg}
                                    target="_blank">
                                    <FaInstagram />
                                </Button>
                            </div>
                            <ChangeSocialNetwork id={applicant.id} />
                        </div>

                        <div className="right">
                            <div className="info">
                                <h3>
                                    THÔNG TIN TÀI KHOẢN{" "}
                                    <ChangePassword
                                        idUser={applicant.user.id}
                                    />
                                </h3>
                                <div className="info_data">
                                    <div className="data">
                                        <h4>
                                            Email{" "}
                                            <ChangeEmail
                                                idUser={applicant.user.id}
                                            />
                                        </h4>
                                        <p>{applicant.user.email}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="personalinfo">
                                <h3>
                                    THÔNG TIN CÁ NHÂN{" "}
                                    <ChangePersonalInfo id={applicant.id} />
                                </h3>

                                <div className="personalinfo_data">
                                    <div className="data">
                                        <h4>Họ Và Tên</h4>
                                        <p>{applicant.user.fullname}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Ngày Sinh</h4>
                                        <p>{applicant.birthday}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Giới Tính</h4>
                                        <p>{applicant.gender}</p>
                                    </div>
                                    <div className="data">
                                        <h4>SĐT</h4>
                                        <p>{applicant.user.phone}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Tỉnh Thành</h4>
                                        <p>{applicant.province}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Địa Chỉ</h4>
                                        <p>{applicant.address}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cv">
                                <h3>
                                    HỒ SƠ <ChangeCV id={applicant.id} />
                                </h3>
                                <div className="cv_data">
                                    <div className="data">
                                        <h4>Vị Trí</h4>
                                        <p>{resume.desiredVacancy}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Ngành Nghề</h4>
                                        <p>
                                            {resume !== ""
                                                ? resume.career.name
                                                : ""}
                                        </p>
                                    </div>
                                    <div className="data">
                                        <h4>Trình Độ</h4>
                                        <p>{resume.education}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Kinh Nghiệm</h4>
                                        <p>{resume.experience}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Hình Thức</h4>
                                        <p>{resume.jobType}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Ngoại Ngữ</h4>
                                        <p>{resume.foreignLanguage}</p>
                                    </div>
                                    <div className="data">
                                        <h4>Mức Lương</h4>
                                        <p>{resume.wage}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

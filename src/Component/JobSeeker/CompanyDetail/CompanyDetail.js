import React, { Component } from "react";
import JobSeekerIndex from "../JobSeekerIndex";
import { Row, Col, Container } from "react-bootstrap";
import { FcConferenceCall, FcGlobe, FcPhone, FcAbout } from "react-icons/fc";

export default class CompanyDetail extends Component {
  render() {
    return (
      <div>
        <JobSeekerIndex />
        <div className="page-content">
          <div className="box">
            <Container className="content-jobdetail">
              <Row>
                <Col className="jobdetail-col">
                  <div className="jobdetail-cover">
                    <img
                      src="../../../img/employer_avt/samsung-cover.png"
                      alt=""
                      fluid
                    ></img>
                  </div>

                  <div className="jobdetail-img">
                    <img
                      src="../../../img/employer_avt/samsung.png"
                      alt=""
                    ></img>
                  </div>
                  <div className="jobdetail-header">
                    <hr />
                    <h1>Samsung Electronics HCMC Complex</h1>
                    <hr />
                  </div>
                </Col>
              </Row>
              <Row className="jobdetail-info">
                <Col>
                  <h5>
                    <span>
                      <FcAbout />
                    </span>
                    Địa Chỉ
                  </h5>
                  <p>dia chi</p>
                </Col>
                <Col>
                  <h5>
                    <span>
                      <FcConferenceCall />
                    </span>
                    Quy Mô Công Ty
                  </h5>
                  <p>quy mo</p>
                </Col>
                <Col>
                  <h5>
                    <span>
                      <FcGlobe />
                    </span>
                    Website
                  </h5>
                  <p>website</p>
                </Col>
                <Col>
                  <h5>
                    <span>
                      <FcPhone />
                    </span>
                    Liên Hệ
                  </h5>
                  <p>lien he</p>
                </Col>
              </Row>
              <Row className="jobdetail-info">
                <Col>
                  <h4>Giới Thiệu Công Ty</h4>
                  <div className="job-describe">
                    <Col>
                      <p>
                        The Samsung Group is a multinational corporation
                        headquartered in Samsung Town, Seoul, South Korea. It is
                        the world's largest conglomerate by revenue with annual
                        revenues of US$138.14 billion in 2010. The Samsung Group
                        is composed of numerous international affiliated
                        businesses, most of them united under the Samsung brand
                        including Samsung Electronics, the world's largest
                        electronics and information technology company. Samsung
                        Electronics has been the world's most popular consumer
                        electronics brand since 2005 and is the best known South
                        Korean brand in the world. The company manufactures
                        various electronic products, such as mobile phones,
                        tablets, LCDs, laptops, DVD players, digital cameras and
                        camcorders, laser printers, fax machines, and plasma and
                        flat screen TVs. It also manufactures and sells home
                        appliances such as washing machines, refrigerators, air
                        conditioners and vacuum cleaners.
                      </p>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import {
  ChangeEmail,
  ChangePassword,
  ChangePersonalInfo,
  ChangeAvatar,
  ChangeCover,
  ChangeDescription,
} from "./Modals";
import EmployerIndex from "../EmployerIndex";

export default class AccountManage2 extends Component {
  render() {
    return (
      <div>
        <EmployerIndex />
        <div className="page-content">
          <div className="wrapper">
            <div className="left">
              <img
                className="avatar"
                src="../../../img/jobseeker_avt/default.png"
                alt=""
              ></img>
              <h4>Tên Công Ty</h4>
              <hr />
              <ChangeAvatar />
              <ChangeCover />
            </div>

            <div className="right">
              <div className="info">
                <div className="cover">
                  <img
                    src="../../../img/employer_avt/samsung-cover.png"
                    alt=""
                  ></img>
                </div>
              </div>

              <div className="info">
                <h3>THÔNG TIN TÀI KHOẢN</h3>

                <div className="info_data">
                  <div className="data">
                    <h4>
                      Email <ChangeEmail />
                    </h4>
                    <p>email</p>
                  </div>
                  <div className="data">
                    <h4>
                      Mật Khẩu <ChangePassword />
                    </h4>
                    <p>mat khau</p>
                  </div>
                </div>
              </div>

              <div className="personalinfo">
                <h3>
                  THÔNG TIN CÔNG TY <ChangePersonalInfo />
                </h3>

                <div className="personalinfo_data">
                  <div className="data">
                    <h4>Địa Chỉ</h4>
                    <p>dia chi</p>
                  </div>
                  <div className="data">
                    <h4>Quy Mô Công Ty</h4>
                    <p>quy mo</p>
                  </div>
                  <div className="data">
                    <h4>Website</h4>
                    <p>website</p>
                  </div>
                  <div className="data">
                    <h4>Liên Hệ</h4>
                    <p>lien he</p>
                  </div>
                </div>
              </div>

              <div className="personalinfo">
                <h3>
                  GIỚI THIỆU CÔNG TY <ChangeDescription />
                </h3>

                <div className="data">
                  <p>
                    The Samsung Group is a multinational corporation
                    headquartered in Samsung Town, Seoul, South Korea. It is the
                    world's largest conglomerate by revenue with annual revenues
                    of US$138.14 billion in 2010. The Samsung Group is composed
                    of numerous international affiliated businesses, most of
                    them united under the Samsung brand including Samsung
                    Electronics, the world's largest electronics and information
                    technology company. Samsung Electronics has been the world's
                    most popular consumer electronics brand since 2005 and is
                    the best known South Korean brand in the world. The company
                    manufactures various electronic products, such as mobile
                    phones, tablets, LCDs, laptops, DVD players, digital cameras
                    and camcorders, laser printers, fax machines, and plasma and
                    flat screen TVs. It also manufactures and sells home
                    appliances such as washing machines, refrigerators, air
                    conditioners and vacuum cleaners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

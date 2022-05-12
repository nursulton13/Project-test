import React from "react";
import "./style.css";
import { FacebookOutlined, InstagramOutlined, RobotOutlined, SendOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        backgroundColor: "#fff",
        borderTop: "1px solid #E2E7EA",
      }}
    >
      <div className="container footer pb-5">
        <div className="inside-footer">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12 mt-5">
              <ul className="m-0 p-0">
                <li>
                  <a href="#">
                    <h6>Офисы и банкоматы</h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6>Пресс-сентры</h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6>Реквизиты</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mt-5">
              <ul className="m-0 p-0">
                <li>
                  <a href="#">
                    <h6>Справочный центр</h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6>Тарифы</h6>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <h6>Документы</h6>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mt-5 ">
              <h6 className="footer-icon-text">Мы в социалных сетях</h6>
              <div className="icon pt-3">
                <a href="#">
                  <FacebookOutlined className="me-4" Size="38px" />
                </a>
                <a href="#">
                  <InstagramOutlined className="me-4" Size="38px" />
                </a>
                <a href="#">
                  <SendOutlined className="me-4" Size="38px" />
                </a>
                <a href="">
                  <RobotOutlined className="me-4" Size="38px" />
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12 mt-5">
              <div className="footer-contact">
                <h6>Круглосуточный Контакт-центр</h6>
                <a href="#">
                  <h4>1152</h4>
                </a>
                <h6>Телефон доверия</h6>
                <a href="#">
                  <h4>(+99871)200-55-22</h4>
                </a>
                <h6>
                  с 9.00 до 18.00 (13.00-14.00 обед) с понлдельника по пятницу
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

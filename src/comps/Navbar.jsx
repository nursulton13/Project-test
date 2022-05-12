import React, { useState } from "react";
import { Link } from "react-router-dom";
import brend from "../img/brand.png";
import language from "../img/language.png";
import "./style.css";

const Navbar = () => {
  const [state, setState] = useState(
    "https://img.icons8.com/material-sharp/24/000000/menu--v1.png"
  );

  const active = (e) => {
    const link = document.querySelectorAll(".nav-link");
    const menu = document.getElementById("navbarSupportedContent");
    for (let i = 0; i < link.length; i++) {
      if (link[i].innerText === e.target.innerText) {
        menu.style.display = "none";
        setState(
          "https://img.icons8.com/material-sharp/24/000000/menu--v1.png"
        );
        link[i].classList = "nav-link active";
        link[i].children[0].classList = "span";
      } else {
        link[i].classList = "nav-link";
        link[i].children[0].classList = "";
      }
    }
  };

  const open = () => {
    const menu = document.getElementById("navbarSupportedContent");
    if (menu.style.display !== "flex") {
      menu.style.display = "flex";
      setState(
        "https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
      );
    } else {
      menu.style.display = "none";
      setState("https://img.icons8.com/material-sharp/24/000000/menu--v1.png");
    }
  };

  const handleChange = (value) => {
    // if (value === "Uz") {
    //   dispatch(changeUz());
    // }
    // if (value === "Ru") {
    //   dispatch(changeRu());
    // }
    // if (value === "En") {
    //   dispatch(changeEng());
    // }
  };
  return (
    <div
      style={{
        maxWidth: "1400px",
        minWidth: "100vw",
        margin: "0 auto",
        backgroundColor: "#F0F3F5",
        borderBottom: "1px solid #E2E7EA",
        position: "fixed",
        zIndex:'100',
      }}
    >
      <div className="container Navbar">
        <div className="nav justify-content-between align-items-center">
          <div className="nav-item">
            <div className="navbar-brand m-0">
              <img src={brend} alt="" />
            </div>
          </div>
          <div style={{ width: "40%" }} id="navbarSupportedContent">
            <ul className="nav justify-content-between align-items-center flex-nowrap">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  onClick={(e) => active(e)}
                >
                  Преимущества
                  <span className="span"></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/credit"
                  onClick={(e) => active(e)}
                >
                  Наши кредиты
                  <span></span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={(e) => active(e)}
                >
                  Контакты
                  <span></span>
                </Link>
              </li>
            </ul>
          </div>
          <div id="language" className="Language align-items-center justify-content-evenly">
            <img src={language} alt="" width="18px" height="18px" />
            <div className="select d-flex form-select-md">
              <select
                class="form-select"
                aria-label="select"
                onChange={handleChange}
              >
                <option value="Ru">Py</option>
                <option value="Uz">Uz</option>
                <option value="En">En</option>
              </select>
            </div>
            <div className="call-centr ms-3">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <p className="m-0">Контакт-центр 24/7 :</p>
                <h5 className="m-0 ps-1 text-white">1152</h5>
              </a>
            </div>
          <img className="hamburger-menu ms-3" src={state} onClick={open} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

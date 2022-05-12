import React from "react";

const WebInfo = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        backgroundColor: "#F0F3F5",
      }}
    >
      <div className="sayt-desc container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-12">
            <p>Все права защищены. Услуги лицензионные</p>
            <p>
              <span>При использовании материалов сайта "Асакабанк",</span>
              <a
                href="#"
                style={{ color: "rgb(215,12,23)", fontWeight: "600" }}
              >
                {" "}
                www.asakabank.uz{" "}
              </a>
              <span>ссылка на сайт обязательна.</span>
            </p>
          </div>
          <div className="col-md-6 col-sm-12 col-12 d-flex align-items-center">
            <p className="pt-3">
              <span>Cсылка на старый сайт</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebInfo;

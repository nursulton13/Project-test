import React, { useState } from "react";
import { Button, Input } from "antd";
import { Valyuta } from "../const/Valyuta";
import "./style.css";
import senior from "../img/senior.png";
import stavka from "../img/stavka.png";
import summa from "../img/summa.png";
import srok from "../img/srok.png";
import persons from "../img/persons.png";
import phone from "../img/phone.png";
import laptop from "../img/Laptop.png";
import noHidden from "../img/no-hidden.png";
import yourImg from "../img/your-img.png";
import imgFemale from "../img/creditP.png";
import investitsiya from "../img/investitsiya.png";
import obmen from "../img/obmen.png";
import lokatsiya from "../img/lokatsiya.png";
import Maps from "../comps/Maps";

const Advantages = () => {
  const [price, setPrice] = useState("1040000");
  const onchange = (e) => {
    if (e.target.value === "0" && e.target.value === " ") {
      setPrice("1040000");
    } else {
      const a = e.target.value;
      setPrice(a * 10400);
    }
  };
  return (
    <>
      <div
        style={{
          margin: "0 auto",
          paddingTop: "84px",
          backgroundColor: "#F0F3F5",
        }}
      >
        <div className="container advantages">
          <div className="advantages-desc">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-xs-12 py-5 pe-3">
                <h1>Кредиты для бизнеса на любые цели</h1>
                <p>
                  На недвижимость, транспорт, модернизацию производства или
                  пополнение оборотных средств
                </p>
                <Button className="btn">
                  <a href="#">Подать заявку онлайн</a>
                </Button>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12 img">
                <img className="w-100 h-100" src={senior} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "0 auto",
          backgroundColor: "#fff",
        }}
      >
        <div className="container Application">
          <div className="Application-desc">
            <div className="row">
              <div className="col-md-4">
                <p>Сколько вам нужно</p>
                <h5>282 017 911</h5>
              </div>
              <div className="col-md-4">
                <p>Сколько вам нужно</p>
                <h5>282 017 911</h5>
              </div>
              <div className="col-md-4">
                <p>Сколько вам нужно</p>
                <h5>282 017 911</h5>
              </div>
            </div>
          </div>
          <div className="credit-desc">
            <div className="row d-flex justify-content-between">
              <div className="col-md-2 col-sm-6 col-12">
                <a href="#">
                  <div className="credit-desc-img">
                    <img src={stavka} alt="" />
                  </div>
                  <p>От 18%</p>
                  <h6>ставка</h6>
                </a>
              </div>
              <div className="col-md-2 col-sm-6 col-12">
                <a href="#">
                  <div className="credit-desc-img">
                    <img src={srok} alt="" />
                  </div>
                  <p>От 1 до 5 лет</p>
                  <h6>срок</h6>
                </a>
              </div>
              <div className="col-md-2 col-sm-6 col-12">
                <a href="#">
                  <div className="credit-desc-img">
                    <img src={summa} alt="" />
                  </div>
                  <p>До 3 млрд. сумов </p>
                  <h6>сумма</h6>
                </a>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <a href="#">
                  <div className="credit-desc-img">
                    <img src={persons} alt="" />
                  </div>
                  <p>Для ЮЛ и ИП</p>
                  <h6>кредит на расчетный счёт компании</h6>
                </a>
              </div>
            </div>
          </div>
          <div className="credit-price">
            <a href="#">
              <div className="row">
                <div className="col-md-6">
                  <h1>Выбирайте, сколько взять</h1>
                  <p>
                    Получайте деньги одной суммой или в пределах одобренного
                    лимита
                  </p>
                </div>
                <div className="col-md-6">
                  <img src={laptop} alt="" />
                  <img src={phone} alt="" />
                </div>
              </div>
            </a>
          </div>
          <div className="credit-price-desc">
            <div className="row">
              <div className="col-md-6 no-hidden-fees">
                <a href="#">
                  <div className="d-flex me-2">
                    <div className="flex-2">
                      <h1>Без скрытых комиссий</h1>
                      <p>Нет комиссий за выдачу и сопровождение кредита</p>
                    </div>
                    <div className="flex-1">
                      <img src={noHidden} alt="" />
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 your-convenience">
                <a href="#">
                  <div className="d-flex ms-2">
                    <div className="flex-2">
                      <h1>Возвращайте, как удобно</h1>
                      <p>
                        Выбирайте график и погашайте кредит любым доступным
                        способом
                      </p>
                    </div>
                    <div className="flex-1">
                      <img src={yourImg} alt="" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="choose-credit">
            <h1>Выберите цель кредита</h1>
            <div className="d-flex flex-wrap">
              <a className="me-3 mt-2" href="#">
                <p>Все кредиты</p>
              </a>
              <a className="me-3 mt-2" href="#">
                <p>Любые бизнес-цели без залога</p>
              </a>
              <a className="me-3 mt-2" href="#">
                <p>Транспорт и оборудование</p>
              </a>
              <a className="me-3 mt-2" href="#">
                <p>Участие в тендере, реализация госконтракта</p>
              </a>
            </div>
          </div>
          <div className="creditNegotiable mb-4 mt-5">
            <div className="d-flex">
              <div className="flex-1 me-5">
                <img src={imgFemale} alt="" />
              </div>
              <div className="flex-2 p-5 ">
                <h1>Кредит Оборотный</h1>
                <ul>
                  <li>Пополнение оборотных средств</li>
                  <li>Осуществление текущих расходов</li>
                  <li>
                    Исполнение текущих, государственных и экспортных контрактов
                  </li>
                  <li>
                    Финансирование любых целей без подтверждения целевого
                    использования
                  </li>
                  <li>Рефинансирование оборотных кредитов других банков</li>
                </ul>
                <div className="creditNegotiblePrice">
                  <div className="d-flex">
                    <div className="flex-2 me-4">
                      <h4>до 36 месяцев</h4>
                      <p>срок кредита</p>
                    </div>
                    <div className="flex-2 p-1 me-4">
                      <h4>18%</h4>
                      <p>минимальная ставка</p>
                    </div>
                    <div className="flex-3 p-1">
                      <h4>от 25 000 000 сумов</h4>
                      <p>минимальная сумма</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-1">
                    <a href="#">Подать заявку онлайн</a>
                  </div>
                  <div className="flex-1">
                    <a href="#">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="creditNegotiable mb-4 mt-5">
            <div className="d-flex">
              <div className="flex-1 me-5">
                <img src={investitsiya} alt="" />
              </div>
              <div className="flex-2 p-5 ">
                <h1>Кредит Инвестиционный</h1>
                <h4>
                  Инвестирование в недвижимость, строительство и другое
                  имущество
                </h4>
                <ul>
                  <li>
                    Рефинансирование задолженности перед банками и лизинговыми
                    компаниями
                  </li>
                  <li>
                    Приобретение жилой или коммерческой недвижимости под залог
                    приобретаемых объектов
                  </li>
                  <li>
                    Покупка транспорта и оборудования для хозяйственной
                    деятельности
                  </li>
                </ul>
                <div className="creditNegotiblePrice">
                  <div className="d-flex">
                    <div className="flex-2 me-4">
                      <h4>до 36 месяцев</h4>
                      <p>срок кредита</p>
                    </div>
                    <div className="flex-2 p-1 me-4">
                      <h4>18%</h4>
                      <p>минимальная ставка</p>
                    </div>
                    <div className="flex-3 p-1">
                      <h4>от 25 000 000 сумов</h4>
                      <p>минимальная сумма</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-1">
                    <a href="#">Подать заявку онлайн</a>
                  </div>
                  <div className="flex-1">
                    <a href="#">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: "0 auto",
          paddingTop: "84px",
          backgroundColor: "#F0F3F5",
        }}
      >
        <div className="container kurs-valyuta d-flex">
          <div className="left-aside flex-1">
            <h1>Kурс валют</h1>
            <h4 className=" h4-active">
              <a href="#">
                Для физических лиц <span />
              </a>
            </h4>
            <div className="d-flex justify-content-between">
              <h4 className="me-4">
                <a href="#">
                  Для юридических лиц <span />
                </a>
              </h4>
              <h4>
                <a href="#">
                  Kурс ЦБ <span />
                </a>
              </h4>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Валюта</th>
                  <th scope="col">Покупка</th>
                  <th scope="col">Продажа</th>
                </tr>
              </thead>
              <tbody>
                {Valyuta.map((item, index) => (
                  <tr key={index}>
                    <td>{item.valyuta}</td>
                    <td>{item.pokupka}</td>
                    <td>{item.prodaja}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Данные 10.08.2021 </p>
            <a href="#">ДИНАМИКА КУРСA ВАЛЮТА</a>
          </div>
          <div className="right-aside">
            <div className="converter">
              <h1>
                <img src={obmen} alt="" />
                Конвертер валют
              </h1>
              <div className="d-flex">
                <div className="usd d-flex">
                  <Input
                    placeholder="USD"
                    defaultValue={"100"}
                    onChange={(e) => onchange(e)}
                  />
                  <span>USD</span>
                </div>
                <div className="uzs d-flex">
                  <Input
                    className="active"
                    placeholder="UZS"
                    value={price}
                    disabled
                  />
                  <span>UZS</span>
                </div>
              </div>
            </div>
            <div className="map">
              <div className="insideMap">
                <Maps />
              </div>
              <div className="mapText d-flex">
                <div className="left-text me-5">
                  <h1>
                    <img src={lokatsiya} alt="" />
                    Офисы и банкоматы
                  </h1>
                  <p>
                    Адреса отделений и банкоматов «Асакабанк» на карте, а также
                    график работы, телефоны.
                  </p>
                </div>
                <div className="prev">
                  <a href="#">Перейти</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advantages;

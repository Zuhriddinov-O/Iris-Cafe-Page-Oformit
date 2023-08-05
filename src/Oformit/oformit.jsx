import React from "react";
import "./oformit.scss"
import Korzinkaicon from "../Oformit/oformitimages/korzinka.webp"
import Hotdogimg from "../Oformit/oformitimages/hotdog.jpg"
import Hotdogimg2 from "../Oformit/oformitimages/hotdog2.jpg"
import Hotdogimg3 from "../Oformit/oformitimages/hotdog3.jpg"
import { useState } from 'react'


const Oformit = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)


    if (count < 0) {
        setCount((count) => count + 1)
    }

    if (count2 < 0) {
        setCount2((count2) => count2 + 1)
    }

    if (count3 < 0) {
        setCount3((count3) => count3 + 1)
    }


    return (
        <React.Fragment>
            <div className="oformit-container">

                <div className="oformit-container-init">
                    <div className="zakazbtn">
                        <p className="zakazbtn__p">ОФОРМИТЬ ЗАКАЗ</p>
                    </div>

                    <div className="main">
                        <p className="zakazp2">Ваш заказ</p>
                        <div className="zakaz">
                            <button className="korzinkabtn">
                                <img className="korzinkaicon" src={Korzinkaicon} alt="" />
                            </button>
                            <img className="Hotdogimg" src={Hotdogimg} alt="" />

                            <div className="zakaz__p">
                                <p className="zakaz__p1">17 000</p>
                                <p className="zakaz__p2">
                                    Саб с курицей Куриное мясо гриль, кольца свежего
                                </p>
                            </div>
                            <div className="orderbtn">
                                <button className="countbtn" onClick={() => setCount((count) => count - 1)}>-</button>
                                {count}
                                <button className="countbtn" onClick={() => setCount((count) => count + 1)}  >+</button>
                            </div>

                        </div>
                        <div className="zakaz">
                            <button className="korzinkabtn">
                                <img className="korzinkaicon" src={Korzinkaicon} alt="" />
                            </button>
                            <img className="Hotdogimg" src={Hotdogimg2} alt="" />
                            <div className="zakaz__p">
                                <p className="zakaz__p1">17 000</p>
                                <p className="zakaz__p2">
                                    Саб с курицей Куриное мясо гриль, кольца свежего
                                </p>
                            </div>
                            <div className="orderbtn">
                                <button className="countbtn" onClick={() => setCount2((count2) => count2 - 1)}>-</button>
                                {count2}
                                <button className="countbtn" onClick={() => setCount2((count2) => count2 + 1)}>+</button>
                            </div></div>

                        <div className="zakaz">
                            <button className="korzinkabtn">
                                <img className="korzinkaicon" src={Korzinkaicon} alt="" />
                            </button>
                            <img className="Hotdogimg" src={Hotdogimg3} alt="" />
                            <div className="zakaz__p">
                                <p className="zakaz__p1">17 000</p>
                                <p className="zakaz__p2">
                                    Саб с курицей Куриное мясо гриль, кольца свежего
                                </p>
                            </div>
                            <div className="orderbtn">
                                <button className="countbtn" onClick={() => setCount3((count3) => count3 - 1)}>-</button>
                                {count3}
                                <button className="countbtn" onClick={() => setCount3((count3) => count3 + 1)}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="zakazbtn">
                        <p className="zakazbtn__p">
                            Личные данные
                        </p>
                    </div>

                    <div className="dannie">
                        <div className="adress-dostavki">
                            <p className="adress-dostavki__p1">Адрес доставки:</p>
                            <p className="adress-dostavki__p2">O'zbekiston, Andijan </p>
                            <p className="adress-dostavki__p3">3-mik 20 dom, 43 kv</p>
                            <p className="adress-dostavki__p4">magazin oldi chap qol birinchi padez 3-etaj, 43 kv.</p>
                        </div>

                        <div className="adress-dostavki">
                            <p className="adress-dostavki__p2">Moohammad Khadirov</p>
                            <p className="adress-dostavki__p2">+998) 91 498-51-50</p>
                            <p className="adress-dostavki__p1">Тип оплаты:</p>
                            <p className="adress-dostavki__p4">karta orqali,</p>
                            <p className="adress-dostavki__p4">dostavka kelganidan song.</p>
                            <p className="adress-dostavki__p4">ozim olib ketaman.</p>

                        </div>

                        <div className="payment">
                            <p className="adress-dostavki__p2">9860 60 04 0494 1230</p>
                            <p className="adress-dostavki__p3">+998 91) 498-51-50</p>
                            <p className="adress-dostavki__p4">Mkhadirov 10/27</p>
                        </div>

                        <div className="city">
                            <p className="adress-dostavki__p2">Andijon Shahar,</p>
                            <p className="adress-dostavki__p3">Andijon Shahar,</p>
                            <p className="adress-dostavki__p4">Andijon Shahar</p>
                        </div>
                    </div>


                    <div className="zakazbtn">
                        <p className="zakazbtn__p">
                           OFORMIT
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Oformit;
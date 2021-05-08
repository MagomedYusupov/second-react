import React from 'react';
import nout from "./assets/nout.jpg";
import ears from "./assets/ears.jpg";
import fridge from "./assets/fridge.jpg";
import kolonka from "./assets/kolonka.jpg";
import maska from "./assets/maska.jpg";
import monitor from "./assets/monitor.jpg";
import skuter from "./assets/skuter.jpg";
import stiralka from "./assets/stiralka.jpg";
import tel from "./assets/tel.jpg";
function Main(props) {
    return (
        <div className="main">
            <div className="container">
                <div className="section">
                    <div className="row mt-4">
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                <img src={nout}/>
                                </div>
                                <p className="name">
                                    MacBook
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    100000 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                    <img src={tel}/>
                                </div>
                                <p className="name">
                                    Galaxy
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    35999 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                    <img src={skuter}/>
                                </div>
                                <p className="name">
                                    Скутер
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    65500 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                    <img src={monitor}/>
                                </div>
                                <p className="name">
                                    Монитор Samsung
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    12000 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                    <img src={maska}/>
                                </div>
                                <p className="name">
                                    Респераторная маска
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    500 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                    <img src={stiralka}/>
                                </div>
                                <p className="name">
                                    Стиральная машина
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    100000 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                    <img src={fridge}/>
                                </div>
                                <p className="name">
                                    Белый холодильник
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    43100 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                    <img src={kolonka}/>
                                </div>
                                <p className="name">
                                    Колонка
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    3000 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-3">
                            <div className="item">
                                <div className="img">
                                    <img src={ears}/>
                                </div>
                                <p className="name">
                                    Наушники
                                </p>
                                <p>
                                    *****
                                </p>
                                <p className="price">
                                    1500 ₽
                                </p>
                                <div className="button">
                                    Добавить в корзину
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
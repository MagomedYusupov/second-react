import React from 'react';
import logo from "./assets/logo.svg";
import cart from "./assets/cart.svg"

function Header(props) {
    return (
        <header>
            <div className="wrapper">
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-4">
                            <div className="logo">
                                <img src={logo}/>
                            </div>
                        </div>
                            <div className="col-6">
                             <div className="nav">
                                <ul className="menu">
                                    <li className="li1">ОДЕЖДА</li>
                                    <li className="li1">ДЕТЯМ</li>
                                    <li className="li1">КНИГИ</li>
                                    <li className="li1">КОМПЬЮТЕРЫ</li>
                                    <li className="li1">КОНТАКТЫ</li>
                                </ul>
                             </div>
                           </div>
                        <div className="col-1">
                                <div className="cart">
                                    <img src={cart}/>
                                </div>
                        </div>
                            <div className="col-1">
                              <div className="exit">
                                выход
                              </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
import React from 'react';
import logo from "./../../images/logo.png"
import motion from "./../../images/motion.png"
import {media} from "../media";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer-general">

                    <div>
                        <img src={logo} alt=""/>
                        <div className="footer-general__contact" style={{paddingTop: media(10, 40)}}>
                            <span><i className="fa-solid fa-phone"/></span>
                            <a href="tel:0778-12-88-72">0778-12-88-72</a>
                        </div>
                    </div>
                    <div className="footer-general__center">
                        <a href="mail:Tashbekuulu22@mail.ru
">tashbekuulu22@mail.ru
                        </a>
                        {/*<div>*/}
                        {/*    <h1>Developed at</h1>*/}
                        {/*    <img src={motion} alt=""/>*/}
                        {/*    <h1>MOTION WEB LLC</h1>*/}
                        {/*</div>*/}
                    </div>
                    <div className="footer-general__seti">
                        <h1>Соц тармактар</h1>
                        <span>    <a href="https://www.facebook.com/profile.php?id=100075946844572"><span
                            style={{fontSize: media(15, 20)}}><i className="fa-brands fa-facebook-f"/></span></a></span>
                    </div>
                </div>

                <div className="footer-general2">
                    <div className="footer-general2__width"/>
                    <div className="footer-general2__gen">
                    <div>
                        <p>Все права защищены - 2022</p>
                    </div>
                    <div className="footer-general2__gen__general">
                        <img src={motion} alt=""/>
                        <a href="https://motion-web.io"><h1>MOTION WEB LLC</h1></a>
                    </div>
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
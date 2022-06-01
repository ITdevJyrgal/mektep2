import React from 'react';
import "../../../styles/Services/services.scss"
import {media} from "../../media";


const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <h3>Байланышуу учун :</h3>
                <div className="services__general">
                    <div className="services__general--contact">
                        <a href="mailto:tashbekuulu22@mail.ru"><span style={{fontSize: media(15, 20)}}><i
                            className="fa-solid fa-envelope"/> tashbekuulu22@mail.ru
</span></a>
                        <a href="https://www.facebook.com/profile.php?id=100075946844572"><span
                            style={{fontSize: media(15, 20)}}><i className="fa-brands fa-facebook-f"/> Gapar Tashbek Uulu</span></a>
                        <a href="https://wa.me/0778128872
"><span style={{fontSize: media(15, 20)}}><i className="fab fa-whatsapp"/> 0778-12-88-72
</span></a>
                        <a href="https://t.me/0778128872
"><span style={{fontSize: media(15, 20)}}><i className="fab fa-telegram"/> 0778-12-88-72
</span></a>
                        <a href="#"><span style={{fontSize: media(15, 20)}}><i className="fa-solid fa-location-dot"/> Чоң - Алай району Жекенди айыл өкмөтү . Шибээ айылы
</span></a>
                    </div>
                    <div className="services__general--map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23377.024132275903!2d71.87208531778263!3d39.50420011313811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b9350b0480cef9%3A0x5c4aa81db77e1f43!2z0JbQtdC60LXQvdC00Lg!5e1!3m2!1sru!2skg!4v1654065488077!5m2!1sru!2skg"
                            style={{border: "none", height: media(280, 450), width: media(300, 600)}} allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
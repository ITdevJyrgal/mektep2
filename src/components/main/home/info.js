import React, {useState} from 'react';
import school from "./../../../images/school.png"
import child from "./../../../images/students.png"
import book from "./../../../images/book.png"
import teach from "./../../../images/teach.png"
import {media} from "../../media";

const Info = () => {

    const [modal, setModal] = useState(false)

    return (
        <section id="info">
            <div className="container">
                <div className="info-general__width"/>
                <div className="info-general">
                    <div className="info-general__block">
                        <div style={{width: media(250, 625), height: media(190, 438), margin: media(10, 25)}}/>
                        <img src={school} alt="img" style={{width: media(250, 625), height: media(190, 438)}}/>
                    </div>
                    <div className="info-general__block2">
                        <h1>Мектеп тууралуу маалымат</h1>
                        {/*<p>СРЕДНЯЯ ОБЩЕОБРАЗОВАТЕЛЬНАЯ ШКОЛА №1.</p>*/}
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={child} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы окуучулар</h2>
                                <h3>254</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={book} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Жалпы китептердин саны</h2>
                                <h3>3481</h3>
                            </div>
                        </div>
                        <div className="info-general__block2__gen">
                            <div className="info-general__block2__gen__cer"
                                 style={{width: media(70, 100), height: media(70, 100)}}>
                                <img src={teach} alt="img"/>
                            </div>
                            <div className="info-general__block2__gen__item">
                                <h2>Учурдагы мугалимдер</h2>
                                <h3>29</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-general2">
                    {/*<p style={{fontSize: media(16, 18)}}> Вот уже 38 лет наша школа распахивает свои двери учителям, ученикам и их родителям. И первый*/}
                    {/*    человек который встречает их на пороге школы — это директор. Как важно иметь в школе*/}
                    {/*    руководителя, который смог организовать и направить всю деятельность коллектива педагогов и*/}
                    {/*    учеников в нужное русло. На протяжении этих лет нашу школу возглавляли мудрые и талантливые,*/}
                    {/*    инициативные люди.</p>*/}
                    <button
                        onClick={() => setModal(true)}
                    >Толук маалымат
                    </button>
                    {modal && (
                        <div className="info-general2__modal">
                            <div className="info-general2__modal__block">
                                <h1 onClick={() => setModal(false)}>Жабуу</h1>
                                <p>

                                    Жаратылыштын кооздугуна соз жетпеген кол менен жасап койгондой. Эки тоонун ортосунда
                                    эки суунун
                                    аралынан орун алган Шибээ айылында биринчи мектеп 1933-жылы лекбез болуп ачылып
                                    Молохов Абдылда агай балдарды окуткан.
                                    Андан кийин 1936-жылы башталгыч мектеп болуп ачылган.

                                    Мектепке А.Эмедилдаев агай жана озубуздун чыккан агайлар Ташбеков Аблаз, Абдылдаев
                                    Садир
                                    жана жана
                                    башкалар балдарга таалим тарбия бере баштаган. 1948-жылы жаныдан мектеп салынган.
                                    1964-жылы ушул
                                    аралыктагы кыштактар боюнча он жылдык кечки мектеп болгон. 1968-жылы экинчи таптага
                                    жаны
                                    мектеп курулуп
                                    ошол жылдын 1994-жылы чейин айылыбыздын жаштары билим алып келишкен.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Info;
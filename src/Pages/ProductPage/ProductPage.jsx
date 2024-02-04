import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import "./productpage.css"

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ProductPage = () => {
    return (
        <div>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="./images/Fon1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Fon2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Fon3.jpg" alt="" /></SwiperSlide>
        </Swiper>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="./images/Fon3.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Fon2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Fon1.png" alt="" /></SwiperSlide>
        </Swiper>

        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="./images/Fon2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Fon1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="./images/Fon3.jpg" alt="" /></SwiperSlide> 
        </Swiper>


        <div className="container">
            <div className="products">
                <div className="product_info">
                    <h1>Визуализация интерьера</h1>
                    <h4>Прорисовка интерьера любой сложности и в различных 
                        стилестических <br/> решениях по
                        техническому 
                        заданию заказчика.
                        Использование готовых <br /> позиций мебели
                        и моделирование индивидуальной корпусной мебели.
                    </h4>
                    <h3>от 000 руб/м2</h3>
                    <p>Стоимость может изменяться в зависимости от площади и стилевых особенностей <br /> интерьера. </p>
                    <h3>Срок выполнения эскизного предложения: 3-5 рабочих дней</h3>
                    <p>Эскизное предложение для одного помещения.</p>
                    <button>Визуализация интерьера</button>
                </div>



                <div className="product_info">
                    <h1>Архитектурная визуализация</h1>
                    <h4>Архитектурная визуализация зданий и сооружений любой сложности и <br /> объема. 
                        Выполняется на основе технического задания, чертежей и <br /> фотографий. 
                    </h4>
                    <h3>от 000 руб/м2</h3>
                    <p>Стоимость может изменяться в зависимости от площади, объема  и стилевых <br /> 
                    особенностей объекта. </p>
                    <h3>Срок выполнения эскизного предложения: 4-7 рабочих дней</h3>
                    <p>Срок выполнения может изменяться в зависимости от площади и объема объекта.</p>
                    <button>Архитектурная визуализация</button>
                </div>


                <div className="product_info">
                    <h1>Визуализация комплексной застройки</h1>
                    <h4>Детальное моделирование жилых комплексов, общественных зданий,<br />  
                        элементов ландшафта, инфраструктуры и благоустройства территории.
                    </h4>
                    <h3>от 000 руб/м2</h3>
                    <p>Стоимость может изменяться в зависимости от площади территории и сложности <br /> окружения. </p>
                    <h3>Срок выполнения эскизного предложения: 7-10 рабочих дней</h3>
                    <p>Срок выполнения может изменяться в зависимости от площади территории.</p>
                    <button>Визуализация комплексной застройки</button>
                </div>
            </div>
     
        </div>
        </div>
    );
};

export default ProductPage;
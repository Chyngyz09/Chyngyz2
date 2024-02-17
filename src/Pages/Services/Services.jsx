import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import styles from './services.module.css'


import ServicesItem from "../../Components/ServicesItem/ServicesItem";
import axios from "axios";

const getData = () => {
    return axios("http://localhost:3001/services");
  };

const Services = () => {


    const [courses, setCourses] = useState([]); // состояние нужно для получение данных с ответа
    const [showAll, setShowAll] = useState(true);
  
    useEffect(() => {
      getData().then((res) => setCourses(res.data));
      // promise = {resolve, reject}
    }, []); // пустой массив в виде второго параметра, позволяет выполнить функцию одина раза
  
    // если состояние ShowALL = true то тогда отображать все элемент в массиве, если false то тогда выполнять
    // фильтрацию
  
    const filteredCourses = showAll
      ? courses
      : courses.filter((services) => services.important == true);
  
    // json-server --watch db.json --port 3001
  
    const changeState = () => {
      setShowAll(!showAll); // !true = false, !false = true
    };
  
    // в случае успешного удаления поста добавлять уведомление так как в createPost
    // добавить кнопку EDIT (редактирование)
    // выбрать тему проекта и макет для проекта
  
    const deletePost = (id) => {
      // id = 5
      axios.delete(`http://localhost:3001/services/${id}`).then((res) => {
        setCourses(
          courses.filter((services) => {
            return services.id !== id;
            // { id: 5 }, {id : 4}, {id : 6}
          })
        );
      }); // promise
  
      // id который есть в функции это id удаленного курса
    };



    return (
        <div>
       



            <div className={styles.background}></div>
            <div className={styles.services__header__img}> 
                <img src="./images/materials1.png" alt="" />
            </div>
            <div className={styles.container}> 
                <div className={styles.services__header}>
                    <div className={styles.services__text}>
                        <h1>УСЛУГИ</h1>
                        <p>Композиции с материалами <br />
                            Композиции с материалами – это красиво оформленное изображение для 
                            демонстрации основных 
                            отделочных материалов, <br /> текстиля или деталей проекта.
                            Композиция создается из несложных объектов, дополняет интерьерный 
                            или экстерьерный проект.
                        </p>
                    </div>
                </div>


                <div className={styles.services__main}>
                    <div className={styles.services__info}>
                        <div className={styles.services__text2}>
                            <h1>Композиции с материалами вашего <br /> проекта</h1>
                            <h3>от 0 000 руб</h3>
                            <p>Создается как дополнительный материал к заказанной экстерьерной <br /> 
                                визуализации.
                            </p>
                        </div>
                        <img className={styles.materials2} src="./images/materials2.png" alt="" />
                    </div>

                 
                </div>  

                   
            </div>     

            <>
                <Swiper
                       slidesPerView={1}
                       spaceBetween={10}
                       pagination={{
                         clickable: true,
                       }}
                       breakpoints={{
                         640: {
                           slidesPerView: 2,
                           spaceBetween: 20,
                         },
                         768: {
                           slidesPerView: 4,
                           spaceBetween: 40,
                         },
                         1024: {
                           slidesPerView: 5,
                           spaceBetween: 50,
                         },
                       }}
                    modules={[Pagination]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide><img src="./images/materials3.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials4.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials5.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials6.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials7.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials3.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials4.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials5.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials6.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials7.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials3.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials4.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials5.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials6.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/materials7.png" alt="" /></SwiperSlide>
                </Swiper>
            </> 
                <div className={styles.container}>                
                    <div className={styles.services__text3}>
                        <p>Обращаем внимание, что оставляем за собой право использовать созданные нами 
                            готовые 
                            изображения после завершения <br /> проекта для размещения на различных 
                            Интернет-ресурсах с целью 
                            рекламы своих услуг и пополнения портфолио  с обязательным <br /> указанием ссылки
                             на авторство 
                            дизайн-проекта заказчика. 
                            Если требуется конфиденциальность проекта, то это необходимо <br /> обсудить до 
                            начала ведения
                            работ.
                        </p>
                    </div>    
                </div>

                <div className={styles.container}>
                    <div className={styles.subject}>
                       <h1>Все услуги</h1> 
                    </div>
                    
                    <div className={styles.services__footer}>

                    
                        <div className={styles.block}>
                            <img src="./images/service1.png" alt="" />
                            <h4>Интерьерная <br />визуализация</h4>
                        </div>

                        <div className={styles.block}>
                            <img src="./images/service2.png" alt="" />
                            <h4>Архитектурная <br /> визуализация</h4>
                        </div>

                        <div className={styles.block}>
                            <img src="./images/service3.png" alt="" />
                            <h4>Визуализация <br /> комплексной застройки</h4>
                        </div>

                        <div className={styles.block}>
                            <img src="./images/service4.png" alt="" />
                            <h4>Фасады зданий <br /> и сооружений</h4>
                        </div>

                        <div className={styles.block2}>
                            {filteredCourses.map((services) => (
                            <ServicesItem
                                key={services.id}
                                services={services}
                                deletePost={() => deletePost(services.id)}
                                changeImportant={() => changeImportant(services.id)}
                            />
                            ))}
                        </div> 

            
                    </div>        
                    
                    <div className={styles.services__otklic}>
                        <h1>Отправить проект на просчет и задать вопросы</h1>
                        <button>Заказать 3D визуализацию</button>
                    </div>
                </div>

        </div>
    );
};

export default Services;
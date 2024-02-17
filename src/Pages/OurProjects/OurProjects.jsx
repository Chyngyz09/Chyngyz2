import React, { useRef, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import './ourprojects.css';

// import required modules
import { Scrollbar } from 'swiper/modules';


const OurProjects = () => {
    return (
<div className='container__all'>
    
    <div className="project__card1">       
            <div className="container2">
            <h1>визуализация комплексной застройки</h1>
        <div className="according1">
            <Accordion style={{background: "#2E2E31"}}  >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography style={{color: "#FFF"}} >Визуализация жилых комплексов</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: "#FFF"}}>
                от 150 000 руб/га
              </Typography>
            </AccordionDetails>
          </Accordion>  
          
         
          </div> 
          
          <div className="according1">
              <Accordion style={{background: "#2E2E31"}} className='according__top'>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography style={{color: "#FFF"}}>Визуализация благоустройства территории</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{color: "#FFF"}}>
                    от 120 000 руб/га
                </Typography>
              </AccordionDetails>
            </Accordion>   
            <p className='according__text1_1'>Фотореалистичная визуализация любых объектов благоустройства 
                территорий от 5000 м2 на основе проектной документации, чертежей или BIM-модели.
            </p>       

            <p className='according__text1_2'>
            Стоимость указывается за полный проект и может корректироваться в зависимости от сложности ТЗ. 
            Посмотреть состав технического задания.
             Вы получите 4-6 перспективных изображений от 1800px до 3840px по длинной стороне.
            </p>

           
          </div>

            <button>Оставить заявку</button>

            </div> 
        
        <>
        <Swiper 
                scrollbar={{
                hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper1"
            >
                <SwiperSlide><img src="./images/project1.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/project2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/project3.png" alt="" /></SwiperSlide>
        </Swiper>
        </>

    </div>


    <div className="project__card2">
            <div className="container2">
                <h1>Архитектурная визуализация</h1>
                <div className="according3">
                <Accordion style={{background: "#2E2E31"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography style={{color: "#FFF"}}>Визуализация жилых зданий</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{color: "#FFF"}}>
                от 200 000 руб
                </Typography>
                </AccordionDetails>
            </Accordion> 
            
            </div>
            <div className="according3">
                <Accordion style={{background: "#2E2E31"}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography style={{color: "#FFF"}}>Визуализация общественных, промышленных и складских зданий</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography style={{color: "#FFF"}}>
                от 150 000 руб
                </Typography>
                </AccordionDetails>
            </Accordion> 

            <p className='according__text2_1'>Фотореалистичная визуализация общественных и промышленных
             объектов капитального строительства с прилегающей территорией,
             на площади от 5000 м2 на основе проектной документации, чертежей или BIM-модели.
            </p>       

            <p className='according__text2_2'>
            Стоимость указывается за полный проект и может корректироваться в зависимости от 
            сложности ТЗ. Посмотреть состав технического задания.
             Вы получите 4-6 перспективных изображений от 1800px до 3840px по длинной стороне.
            </p>

            </div>

            <button>Оставить заявку</button>

            </div>
            
        <>
        <Swiper
                    scrollbar={{
                    hide: true,
                    }}
                    modules={[Scrollbar]}
                    className="mySwiper2"
                >
                    <SwiperSlide><img src="./images/project2.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/project3.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="./images/project1.png" alt="" /></SwiperSlide>
        </Swiper>
        </>

    </div>



    <div className="project__card3">
            <div className="container2">
                 <h1>интерьерная визуализация</h1>
                <div className="according5">
                    <Accordion style={{background: "#2E2E31"}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    <Typography style={{color: "#FFF"}}>Комплексная изуализация жилых помещений</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography style={{color: "#FFF"}}>
                    от 800 руб/м2
                    </Typography>
                    </AccordionDetails>
                </Accordion> 
                </div>
                <div className="according5">
                    <Accordion style={{background: "#2E2E31"}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    <Typography style={{color: "#FFF"}}>Визуализация общественных пространств</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography style={{color: "#FFF"}} >
                    от 300 руб/м2
                    </Typography>
                    </AccordionDetails>
                </Accordion> 

                <p className='according__text3_1'>Фотореалистичная визуализация любых общественных интерьеров
                 от 1000 м2 на основе проектной документации, чертежей или BIM-модели.
            </p>       

            <p className='according__text3_2'>
                Стоимость может корректироваться в зависимости от сложности ТЗ. Посмотреть состав 
                технического задания. 
                Вы получите 4-6 перспективных изображений от 1800px до 3840px по длинной стороне.
            </p>

                </div>

                <button className='bottom__button'>Оставить заявку</button>

            </div>
            

        <>
        <Swiper
                scrollbar={{
                hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper3"
            >
                <SwiperSlide><img src="./images/project3.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/project2.png" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./images/project1.png" alt="" /></SwiperSlide>
        </Swiper>
        </>

    </div>

</div>
    );
};

export default OurProjects;
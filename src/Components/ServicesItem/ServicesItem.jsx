import React from 'react';

import styles from "./servicesitem.module.css";


const ServicesItem = ({ services }) => {
    return (
        <div className={styles.services}>
        <div className={styles.services__info}>
          <img src={`${services.img}`}  alt=""/>
          <h4>
            <span>{services.title}</span>
          </h4>
          <h4>
           <span>{services.description}</span>
          </h4>   
        </div>
      </div>
    );
};

export default ServicesItem;
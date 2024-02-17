import React from "react"; 
import "./header.css"; 

import { Link } from "react-router-dom";
 
const Header = () => { 
  return ( 
    <header className="header"> 
      <div className="header__contacts"> 
        <div className="container"> 
          <div className="header__contacts-wrapper"> 
            <div className="header__social"> 
              <ul className="header__social-links"> 
                    <img src="./images/sotial.png" alt="" />
              </ul> 
            </div> 
            <div className="header__info"> 
              <div className="header__email"> 
                <img src="./images/Group.e.png" alt="" /> 
                <div className="header__email-info"> 
                  <h3>project@bimpro.ru</h3> 
                  <p>Электронная почта</p> 
                </div> 
              </div> 
              <div className="header__map"> 
                <img src="./images/Group.le.png" alt="" /> 
                <div className="header__map-info"> 
                  <h3>Санкт-Петербург</h3> 
                  <p>Шпалерная, 51</p> 
                </div> 
              </div> 
              <div className="header__phone"> 
                <img src="./images/Group.nom.png" alt="" /> 
                <div className="header__phone-info"> 
                  <h3>+7 812 330 10 40</h3> 
                  <h4 className="header__call">Обратный звонок</h4> 
                </div> 
              </div> 
            </div> 


          </div> 
        </div> 
      </div> 

      <div className="container">
        <nav> 
          <div className="nav__sign">
            <img src="./images/logo.png" alt="" />
          </div>
          <ul className="snack__bar">
            <li>
              {/* <a href="">O нас</a> */}
              <Link to="/">O нас</Link>
            </li>
             <li>
              {/* <a href="">Услуги</a> */}
               <Link to="/services">Услуги</Link>
            </li>
            <li>
              {/* <a href="">Наши проекты</a> */}
             <Link to="/projects">Наши проекты</Link> 
            </li>
            <li>
              {/* <a href="">Контакты</a> */}
              <Link to="/contacts">Контакты</Link>
            </li>
            <li>
              {/* <a href="">Контакты</a> */}
              <Link to="/creation">Создание Услуг</Link>
            </li>
          </ul>
        </nav> 
      </div>
      

      
    </header> 
  ); 
}; 
 
export default Header;
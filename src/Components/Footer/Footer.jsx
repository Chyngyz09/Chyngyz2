import React from 'react';
import './footer.css'
import { TextField, Button } from '@mui/material';


const Footer = () => {
    return (
        <div>
            <div className="background__line"></div>
            <div className="container">
                <div className="form__wrapper">

                    <div className="form__text">
                        <h1>Свяжитесь с нами</h1>
                    </div>

                    <form>
                        <div className="form__textfiled">
                            <p>Имя*</p>
                            <TextField id="outlined-basic" label="Иван" variant="outlined" />
                        </div>
                        <div className="form__textfiled">
                            <p>Телефон*</p>
                            <TextField id="outlined-basic" label="+7 (987) 654 32 10" variant="outlined" />
                        </div>
                    </form> 
                    <div className="form__button">
                      <Button variant="contained">Заказать обратный звонок</Button>
                    </div>  
                        
                    

                </div>
                
            </div>
        </div>
    );
};

export default Footer;
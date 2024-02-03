import React from 'react';
import './homepage.css'

const HomePage = () => {
    return (
        <header>
            <div className="background__img">
               <img src="./images/Rect.png" alt="" /> 
            </div>
               <div className="visualization__background"></div>
            <div className="container">
                <div className="visualization">
                    <div className="visualization_texts">
                       <h1 className='visualization_text1'>Визуализация</h1> 
                    </div>
                    <p className='visualization_text2'>Архитектурная 3d визуализация помогает любому проекту максимально эффектно 
                        и эффективно донести 
                        идею до потребителя.
                        Наша команда предлагает широкий спектр современных решений
                        в сфере презентационных материалов, с высокой степенью 
                        проработки и вниманию к деталям. 
                        Качественно выполненная визуализация повысит привлекательность
                        проекта и выведет его на новый уровень.
                    </p>
                </div>
            </div>
        </header>
    );
};

export default HomePage;
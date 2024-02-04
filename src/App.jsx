import './App.css' 
import Header from "./Components/Header/Header"; 
import Footer from "./Components/Footer/Footer"; 
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import Contacts from "./Pages/Contacts/Contacts";

import { Route, Routes } from 'react-router-dom';
 

function App() { 
  return ( 
    <div className='App'> 
      <Header /> 
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
        {/* <Route path="/about" element={<AboutUs />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/about" element={<Contacts />} />  */}
      </Routes> 
      <Footer /> 
    </div> 
  ); 
} 
 
export default App;

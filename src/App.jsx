import './App.css' 
import Header from "./Components/Header/Header"; 
import Footer from "./Components/Footer/Footer"; 
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import Services from './Pages/Services/Services';
import Contacts from "./Pages/Contacts/Contacts";
import OurProjects from './Pages/OurProjects/OurProjects';
import Creation from './Pages/CreationOfServices/Creation';


import { Route, Routes } from 'react-router-dom';
 

function App() { 
  return ( 
    <div className='App'> 
      <Header /> 
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/projects" element={<OurProjects />} /> 
        <Route path="/contacts" element={<Contacts />} /> 
        <Route path="/creation" element={<Creation />} /> 
      </Routes> 
      <Footer /> 
    </div> 
  ); 
} 
 
export default App;

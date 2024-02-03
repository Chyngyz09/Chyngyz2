import './App.css' 
import Header from "./Components/Header/Header"; 
import Footer from "./Components/Footer/Footer"; 
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
 

function App() { 
  return ( 
    <div className='App'> 
      <Header /> 
      <Routes> 
        <Route path="/" element={<HomePage />} /> 
      </Routes> 
      <Footer /> 
    </div> 
  ); 
} 
 
export default App;

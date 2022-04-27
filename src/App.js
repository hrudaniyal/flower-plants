import './App.css';
import ShowImage from './components/ShowImage';
import LandingPage from './components/LandingPage'
import AboutUs from './components/Aboutus'
import { Routes, Route } from 'react-router-dom';
import Heading from './components/Heading';
function App() {
  return (
    <>
      <Heading />
 
    <Routes>
      <Route path='/flowers' element={<ShowImage />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/' element={<LandingPage />} />
    </Routes>
 
    
    </>

    
  );
}
export default App;

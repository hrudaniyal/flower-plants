import './App.css';
import ShowImage from './components/ShowImage';
import LandingPage from './components/LandingPage'
//pages
import AboutUs from './components/pages/aboutus/Aboutus'
import Contact from './components/pages/contact/Contact'
import Services from './components/pages/services/Services'
import Notfound from './components/basic/Notfound'

import { Routes, Route } from 'react-router-dom';
import Heading from './components/basic/Heading';
function App() {
  return (
    <>
      <Heading />

      <Routes>
        <Route exact path='/flowers' element={<ShowImage />} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/services' element={<Services />} />
        <Route  path='/' element={<LandingPage />} />
        <Route exact path='/*' element={<Notfound />} />
      </Routes>


    </>


  );
}
export default App;

// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Navber from './Components/Layout/Navber'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function App() {
  useEffect(() => {
    AOS.init({
        duration: 500
    })
},[])
  return (
    <>
      <BrowserRouter>

        <Navber />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;

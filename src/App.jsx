import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import Mousetracker from './components/Mousetracker'
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Error from './components/Error';
import Contact from './components/Contact';


function App() {


  return (
    <>
      <BrowserRouter>
       <Mousetracker  />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Projects />} path='/projects' />
          <Route element={<Services />} path='/services' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Error />} path='*' />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App

import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Details from './pages/Details';
import './assets/mediaquery.scss'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path='/cart' element={<Cart></Cart>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
          <Route path='/details/:id' element={<Details></Details>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Home from "./pages/Homepage"
import About from "./pages/About"
import Testimoni from "./pages/Testimoni"
import Contact from "./pages/Contact"
import Footer from "./pages/Footer"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* <Route index element={<Home/>}/> */}
          
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/testimoni" element={<Testimoni/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

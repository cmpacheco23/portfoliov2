import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/#projects" element={<Projects/>} />
        <Route path="/#experience" element={<Experience/>} />
        <Route path="/#skills" element={<Skills/>} />
        <Route path="/#contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </main>
  )
}

export default App

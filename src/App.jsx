import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Nav from './components/nav.jsx'
import { FaBeer } from 'react-icons/fa';
import About from './components/about.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>
    <Nav/>
    <Header/>
    <About/>
   

  </div>
   



  </>
     
  )
}

export default App

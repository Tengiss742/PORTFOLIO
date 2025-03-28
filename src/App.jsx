import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Nav from './components/nav.jsx'
import { FaBeer } from 'react-icons/fa';
import About from './components/about.jsx';
import Gaming from './components/gaming.jsx';
import Social from './components/social.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>
    <Nav/>
    <Header/>
    <About/>
   <Gaming />
   <Social/>

  </div>
   



  </>
     
  )
}

export default App

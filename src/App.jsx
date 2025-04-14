import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Nav from './components/nav.jsx'
import { FaBeer } from 'react-icons/fa';
import Gaming from './components/gaming.jsx';
import Social from './components/social.jsx';
import MultiBoxPopup from './components/MultiBoxPopup.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div>
    <Nav/>
    <Header/>
    <MultiBoxPopup/>
   <Gaming />
   <Social/>

  </div>
   



  </>
     
  )
}

export default App

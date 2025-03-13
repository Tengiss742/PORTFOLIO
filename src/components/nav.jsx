import './nav.css'
import { FaBeer } from 'react-icons/fa';
import { FaDiscord } from "react-icons/fa";
function Nav(){
    return(
        <>
         <nav className='navbar'>
            <div className='navdiv'>
                <li><a href="#About">About me</a></li>
                <li><a href="#Gaming">Gaming</a></li>
                <li><a href="#Social">Social</a></li>
               
            </div>
             <div className='icon-container'>
             <FaDiscord  className='icon'/>
             </div>
            
         </nav>
    

        </>
    )
}
export default Nav
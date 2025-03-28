import './social.css'
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
function Social(){
    return(
        <>
        <section id='Social'>
        <div className='miniBackground'>
            <div className='sad'>
                <div className='textContainer'>
                <h1 className='textshuu'>Contact Me</h1> 
                </div>
            <div className='icons'>
            <FaSquareInstagram />
            <FaFacebook />    
            <FaDiscord />
            

            </div>
            </div>

        </div>
        </section>
        
        </>
    )
}
export default Social


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
           <a href="https://www.instagram.com/tengis108/" target='"_blank"'>
           <FaSquareInstagram color="#E4405F"/>
           </a> 
           <a href="https://www.facebook.com/tengis.tengis.94801" target='"_blank"'>
           <FaFacebook />  
           </a>
           <a href="https://discord.com/channels/@me/1272575482369671219"  target='"_blank"' >
           <FaDiscord /></a> 
            </div>
            </div>

        </div>
        </section>
        
        </>
    )
}
export default Social


import './social.css'
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
function Social(){
    return(
        <>
        <section id='Social'>
        <div className='miniBackground'>
            <div>
            <h1 className='textshuu'>Contact Me</h1> 
            <div className='iconnn1'>
            <FaLongArrowAltRight  />
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


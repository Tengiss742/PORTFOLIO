import './gaming.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

const images = [
    'https://1.bp.blogspot.com/-zMJ5KA_mutU/X-wv7J5rr6I/AAAAAAAABVw/ICn99weE0qohh1rL5uORgajkO_JOKQqNgCLcBGAsYHQ/s2048/MLBB%2B%2528Mobil%2BLegends%2BBang%2BBang%2529%2B-%2BLogovectorXyz.png',
    'https://static.vecteezy.com/system/resources/previews/019/017/536/original/valorant-logo-transparent-free-png.png',
    'https://logos-world.net/wp-content/uploads/2020/12/Dota-2-Logo.png',
    'https://pnghq.com/wp-content/uploads/roblox-logo-free-image-png-768x768.png',
    'https://cdn2.steamgriddb.com/logo_thumb/afa5b2e548f3d4a647ee75ec79bc60cd.png',
    'https://www.pinclipart.com/picdir/big/546-5468131_shadow-fight-2-tournament-character-shadow-fight-2.png',
    'https://th.bing.com/th/id/R.1ba7f6e37e04dcf63c5e1fceb18b6a0b?rik=5CjSKWdDCKj%2fXg&pid=ImgRaw&r=0'

  ];

  
function Gaming(){
    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: false,
      };
    
      const [isVisible, setIsVisible] = useState(false);
  
    return(
        <>
         <section id='Gaming'>
            <div className='Gackground'>
            <h1 className='most'>Favorite Games </h1>
            <div className='dragon'>
               <img src='https://jerseygaming.co.id/wp-content/uploads/2020/02/logo-mobile-legends-1024x643.png' alt=""width="300px" />
               <div className='Mobile'>
                <h1 class="MLBB" onMouseEnter={()=>{setIsVisible(true); console.log("onmouseover")}} onMouseLeave={()=>{setIsVisible(false)}}>MLBB</h1>
                </div>
                {
                  isVisible && (
                      
                      <div class="card__content">
                        <p class="card__title">MLBB</p>
                        <p class="card__description">
                        High rank: 57 star
                        <p className='card__description'>Most Played Hero: Helcurt</p>
                        <p className='card__description'>Played MLBB since season 20</p>
                        
                        </p>
                    
                      </div>
                  )
                }

               <div className='logoshude'>
                
                <img src="https://cdn-icons-png.flaticon.com/512/480/480382.png" alt="" width="200px"/>
                <div className='cube'>
                  <h1>Rubick's cube</h1>
                  <p>3x3 record: 23.76s</p>
                  <p>4x4 record: 1min.52s</p>
                  <p>5x5 record: 3min.13s</p>
                  <p>6x6 record: 10min.7s</p>
                  <p>7x7 record: 13min.56s</p>
                  <p>megaminx record:5min.53s</p>
                </div>

               </div>
              
               </div>
            
              <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: '300px', margin: '0 auto', marginTop: "30vh"
                
              }}
            />
          </div>
        ))}
      </Slider>
    
                  </div>
           
                
                
            
               
         </section>
        </>
    )
}
export default Gaming
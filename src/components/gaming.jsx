import './gaming.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    'https://1.bp.blogspot.com/-zMJ5KA_mutU/X-wv7J5rr6I/AAAAAAAABVw/ICn99weE0qohh1rL5uORgajkO_JOKQqNgCLcBGAsYHQ/s2048/MLBB%2B%2528Mobil%2BLegends%2BBang%2BBang%2529%2B-%2BLogovectorXyz.png',
    'https://static.vecteezy.com/system/resources/previews/019/017/536/original/valorant-logo-transparent-free-png.png',
    'https://logos-world.net/wp-content/uploads/2020/12/Dota-2-Logo.png',
    'https://pnghq.com/wp-content/uploads/roblox-logo-free-image-png-768x768.png',
    'https://cdn2.steamgriddb.com/logo_thumb/afa5b2e548f3d4a647ee75ec79bc60cd.png',

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
    
    return(
        <>
         <section id='Gaming'>
            <div className='Gackground'>
            <h1 className='most'>Favorite Games </h1>
            <div className='dragon'>
               <img src='https://jerseygaming.co.id/wp-content/uploads/2020/02/logo-mobile-legends-1024x643.png' alt=""width="300px" />
               <div className='logoshude'>
                <img src="https://cdn-icons-png.flaticon.com/512/480/480382.png" alt="" width="200px"/>
               </div>
              
               </div>
            
              <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: '350px', margin: '0 auto', marginTop: "30vh"
                
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
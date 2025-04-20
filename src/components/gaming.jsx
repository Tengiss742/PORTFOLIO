import './gaming.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const images = [
    'https://1.bp.blogspot.com/-zMJ5KA_mutU/X-wv7J5rr6I/AAAAAAAABVw/ICn99weE0qohh1rL5uORgajkO_JOKQqNgCLcBGAsYHQ/s2048/MLBB%2B%2528Mobil%2BLegends%2BBang%2BBang%2529%2B-%2BLogovectorXyz.png',
    'https://static.vecteezy.com/system/resources/previews/019/017/536/original/valorant-logo-transparent-free-png.png',
    'https://th.bing.com/th/id/R.b3cac3682d25b4dc0d7cc4c38fd61fa1?rik=MucHSkJhvuB0og&pid=ImgRaw&r=0',
    'https://logos-world.net/wp-content/uploads/2020/12/Dota-2-Logo.png',
    'https://pnghq.com/wp-content/uploads/roblox-logo-free-image-png-768x768.png',
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
            <div className='dragon'> <img src='https://jerseygaming.co.id/wp-content/uploads/2020/02/logo-mobile-legends-1024x643.png' alt=""width="80px" /></div>
              <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index}`}
              style={{ width: '100%', height: 'auto', margin: '0 auto' }}
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
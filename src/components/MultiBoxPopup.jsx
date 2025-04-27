import React, { useState } from "react";
import "./MultiBoxPopup.css";
const popupContent = {
    1: {
      title: "Childhood",
      content1: "When I was young I live in Arvaikheer. ",
      
      img1: "https://tse4.mm.bing.net/th/id/OIP.KvyeylpC_2o0pu3GcFZP9wHaDi?rs=1&pid=ImgDetMain",
     
      img2: "https://i.ytimg.com/vi/vly5WLdfss8/maxresdefault.jpg",
      content2:"I also played with these Mortal cards a lot. While playing, I managed to collect over 300 cards."
     
           
    
    },
    2: {
      title: "Gaming",
      content: "Here's some info about the games I love playing!"
    },
    3: {
      title: "Social",
      content: "Connect with me on Instagram, Discord, or whatever."
    }
  };

const MultiBoxPopup = () => {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (id) => {
    setActivePopup(id);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <>
    <section id="About">
        <div className="loldota">
        <div className={`popup-container ${activePopup ? "blur" : ""}`}>
            
        <div className="box box1" onClick={() => openPopup(1)}>Childhood.</div>
        <div className="box box2" onClick={() => openPopup(2)}>Adolescene.</div>
        <div className="box box3" onClick={() => openPopup(3)}>Future</div>
        <div className="image-container">
        <img src="https://www.pngall.com/wp-content/uploads/14/Gohan-PNG-File.png" alt="" className='gohan'/>
        </div>
      </div>
      {activePopup && (
  <div className="popup-overlay active">
    <div className="popup-box">
      <span className="close-btn" onClick={closePopup}>×</span>
      <h2 className="sugani">{popupContent[activePopup].title}</h2>
      
      {popupContent[activePopup].content1 && (
        <p className="eehuur">{popupContent[activePopup].content1}</p>
      )}
      <h1 className="mortal">{popupContent[activePopup].content2}</h1>
      {popupContent[activePopup].img1 && (
        <img
          src={popupContent[activePopup].img1}
          alt={popupContent[activePopup].title + " image 1"}
          width="45%"
          className="zurag7"
        />
      )}

  
      
      {popupContent[activePopup].img2 && (
        <img
          src={popupContent[activePopup].img2}
          alt={popupContent[activePopup].title + " image 2"}
          width="20%"
          className="zurag4"
        />
      )}

   
    </div>
  </div>
)}

        </div>
        
    </section>
    </>
  );
};

export default MultiBoxPopup;

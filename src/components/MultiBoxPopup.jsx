import React, { useState } from "react";
import "./MultiBoxPopup.css";
const popupContent = {
    1: {
      title: "meedku",
      content: "eelde"
    
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
            <p className="eehuur">{popupContent[activePopup].content}</p>
          </div>
        </div>
      )}
        </div>
        
    </section>
    </>
  );
};

export default MultiBoxPopup;

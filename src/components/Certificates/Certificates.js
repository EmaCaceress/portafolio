import React, { useEffect, useState, useContext } from 'react'; 
import './Certificates.css';
import projectImage1 from '../../assets/images/project1.png'; 
import projectImage2 from '../../assets/images/project2.png';
import projectImage3 from '../../assets/images/project3.png';
import wave from '../../assets/images/wave4.png';
import { GlobalContext } from '../Context/Context';
import Wave from '../Wave/Wave';

const Certificates = () => {
  const [pos, setPos] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1); 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { globalValue, setGlobalValue } = useContext(GlobalContext);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
    setGlobalValue("none");
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
    setGlobalValue("flex");
  };

  const images = [projectImage1, projectImage2, projectImage3];

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    setPos((prevPos) => prevPos - 50);
  };

  const prevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setPos((prevPos) => prevPos + 50);
  };

  useEffect(() => {
    if (pos > 50) setPos(-50);
    if (pos < -50) setPos(50);
  }, [pos]);

  return (
    <section className="certificates" id="certificates">
      <div className="certificates__title-container">
        <div className='certificates__title'>🏅 Certificaciones obtenidas</div>
      </div>
      <div className="certificates__slider-container">
        <div className="certificates__slider" style={{ transform: `translateX(${pos}vw)` }}>
          {images.map((image, index) => (
            <div key={index} className="certificates__slider__item">
              <img
                src={image}
                alt={`certificate-${index + 1}`}
                className={`certificates__slider__image ${activeIndex === index ? 'certificates__slider__image--active' : ''}`}
                onClick={() => openModal(image)}
              />
            </div>
          ))}

        </div>
        <div className="certificates__buttons">
          <div className="certificates__button-container certificates__button-container--left">
            <button className="certificates__button certificates__button--prev" onClick={prevImage}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div className="certificates__button-container certificates__button-container--right">
            <button className="certificates__button certificates__button--next" onClick={nextImage}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Imagen agrandada" className="modal-image" />
          </div>

          <div className='modal-close'>
            <button onClick={closeModal}><i className="fa-solid fa-x"></i></button>
          </div>
        </div>
      )}

      <Wave wave={wave} />
    </section>
  );
};

export default Certificates;

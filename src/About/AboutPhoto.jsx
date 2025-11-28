import { useState } from 'react';
import photo01 from '../img/photo-01.jpg';
import photo02 from '../img/photo-02.jpg';
import photo04 from '../img/photo-06.JPG';
import photo06 from '../img/photo-04.mp4';
import photo07 from '../img/photo-07.jpg';
import photo08 from '../img/photo-08.jpg';
import photo09 from '../img/photo-09.JPEG';
import photo10 from '../img/photo-10.JPEG';
import photo11 from '../img/photo-11.JPEG';

import '../Style/AboutPhoto.scss'

const AboutPhoto = () => {
    const [activePhoto, setActivePhoto] = useState(null);

    const handlePhotoClick = (photoId, e) => {
        e.stopPropagation();
        setActivePhoto(photoId);
    };

    const handleBackgroundClick = () => {
        setActivePhoto(null);
    };

    return (
        <div className="about-photo" onClick={handleBackgroundClick}>
            <div 
                className={`photo01 photo ${activePhoto === 'photo01' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo01', e)}
            >
                <img src={photo01} alt="01" />
            </div>
            <div 
                className={`photo02 photo ${activePhoto === 'photo02' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo02', e)}
            >
                <img src={photo02} alt="02" />
            </div>
            <div className="photo03 photo"></div>
            <div 
                className={`photo04 photo ${activePhoto === 'photo04' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo04', e)}
            >
                <img src={photo04} alt="04" />
            </div>
            <div className="photo05 photo"></div>
            <div 
                className={`photo06 photo ${activePhoto === 'photo06' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo06', e)}
            >
                <video src={photo06} autoPlay muted loop/>
            </div>
            <div 
                className={`photo07 photo ${activePhoto === 'photo07' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo07', e)}
            >
                <img src={photo07} alt="07" />
            </div>
            <div 
                className={`photo08 photo ${activePhoto === 'photo08' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo08', e)}
            >
                <img src={photo08} alt="08" />
            </div>
            <div 
                className={`photo09 photo ${activePhoto === 'photo09' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo09', e)}
            >
                <img src={photo09} alt="09" />
            </div>
            <div 
                className={`photo10 photo ${activePhoto === 'photo10' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo10', e)}
            >
                <img src={photo10} alt="10" />
            </div>
            <div 
                className={`photo11 photo ${activePhoto === 'photo11' ? 'active' : ''}`}
                onClick={(e) => handlePhotoClick('photo11', e)}
            >
                <img src={photo11} alt="11" />
            </div>
            <div className="photo12 photo"></div>
        </div>
    );
}

export default AboutPhoto;
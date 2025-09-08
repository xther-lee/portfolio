
// 꼭 import 해서 해야하는지
import photo01 from '../img/photo-01.jpg';
import photo02 from '../img/photo-02.jpg';
import photo04 from '../img/photo-04.mp4';
import photo06 from '../img/photo-06.JPG';
import photo07 from '../img/photo-07.jpg';
import photo08 from '../img/photo-08.jpg';
import photo09 from '../img/photo-09.JPEG';
import photo10 from '../img/photo-10.JPEG';
import photo11 from '../img/photo-11.JPEG';

import '../Style/AboutPhoto.scss'

const AboutPhoto = () => {
    return (
        <div className="about-photo">
            <div className="photo01 photo">
             <img src={photo01} alt="01" />
            </div>
            <div className="photo02 photo">
                <img src={photo02} alt="02" />
            </div>
            <div className="photo03 photo">
            </div>
            <div className="photo04 photo">
                <video src={photo04} autoPlay muted loop/>
            </div>
            <div className="photo05 photo">
            </div>
            <div className="photo06 photo">
                <img src={photo06} alt="06" />
            </div>
            <div className="photo07 photo">
                <img src={photo07} alt="07" />
            </div>
            <div className="photo08 photo">
                <img src={photo08} alt="08" />
            </div>
            <div className="photo09 photo">
                <img src={photo09} alt="09" />
            </div>
            <div className="photo10 photo">
                <img src={photo10} alt="10" />
            </div>
            <div className="photo11 photo">
                <img src={photo11} alt="11" />
            </div>
            <div className="photo12 photo">
            </div>
        </div>
    );
}

export default AboutPhoto;
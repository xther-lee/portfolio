import '../Style/AboutInfo.scss'

import mainphoto from '../img/KakaoTalk_20250901_164347079.jpg';

const AboutInfo = () => {
    return (
        <div className="about-info">
            <div className="info-photo">
                <img src={mainphoto} alt="임시사진" />
            </div>
            <div className="info-ex">
                저의 삶의 모토는 “맡은 일은 끝까지 책임진다.” 입니다. <br />
                이와 같이 코딩도 오류가 생기더라도 끝까지 찾아내서 고쳐나가고 싶습니다. <br />
                또 코딩은 탐구심이 없으면 할 수 없기 때문에 계속해서 나오는 <br />
                새로운 기술들도 도전하며 알아가서 사용자를 위한 서비스를 만들어 나가려 합니다.
            </div>
        </div>
    );
}

export default AboutInfo;
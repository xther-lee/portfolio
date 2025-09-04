import { useState } from "react";
import { Link } from "react-router-dom";

import '../Style/Explain.scss'

const Tape = ({ images, subText }) => {
  const [src, setSrc] = useState(images[0]);
  const [showSub, setShowSub] = useState(false);

  const handleMouseEnter = () => {
    let i = 0;
    setShowSub(false);

    const interval = setInterval(() => {
      i++;
      if (i < images.length) {
        setSrc(images[i]);
      } else {
        clearInterval(interval);
        setShowSub(true);
      }
    }, 200); // 0.2초마다 이미지 변경
  };

  const handleMouseLeave = () => {
    setSrc(images[0]); // 처음 상태로 복귀
    setShowSub(false);
  };

  return (
    <div className="tape-rela" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={src} alt="테이프 애니메이션" />
      {showSub && <h2 className="sub">{subText}</h2>}
    </div>
  );
};


export default function Explain() {
  return (
    <div className="explain">
        <div className="txt">
            <h2>Project에는 웹표준과 react,  cursor, copilot 등으로 만든 사이트와 작업과정이 기록되어 있습니다.<br/>
            About me에서는 저의 소개와 가치관, 개발자로써 앞으로 나아갈 방향에 관하여 기록되어 있습니다.</h2>
        </div>
        <div className="txt-box">
            <h2 className="title">Project</h2>
            <h2 className="title">About me</h2>
        </div>
        <div className="menu-box">
            <div className="explain-project tape-box">
                <Link to='/project'>
                    <button>
                        <Tape className='tape-rela'
                        images={[ 
                        "/img/tape01-first.png",
                        "/img/tape01-middle.png", 
                        "/img/tape01.png",]}
                        subText="그동안 만든 사이트와 작업과정이 담겨있습니다."/>
                    </button>
                </Link>
            </div>
            <div className="explain-about tape-box">
                <Link to='/about'>
                    <button>
                        <Tape className='tape-rela'
                        images={[
                        "/img/tape10-first.png", 
                        "/img/tape10-middle.png", 
                        "/img/tape10.png",]} 
                        subText="저의 소개와 가치관, 개발자로써 나아갈 방향이 담겨있습니다."/>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  );
}

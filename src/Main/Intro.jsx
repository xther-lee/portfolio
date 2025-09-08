import { useEffect, useState } from "react";
import "../Style/Intro.scss";

import bottom from '../img/bottom.png';
import left from '../img/left.png';
import right from '../img/right.png';
import top from '../img/top.png';

const Intro = () => {
  const images = [
    { src: bottom, direction: "bottom" },
    { src: left, direction: "left" },
    { src: right, direction: "right" },
    { src: top, direction: "top" },
  ];

  const [hide, setHide] = useState(true); // 처음에 숨김 상태로 시작
  const [initialLoad, setInitialLoad] = useState(true); // 초기 로드 상태

  useEffect(() => {
    // 컴포넌트 마운트 후 약간의 지연 후 이미지 나타내기
    const initialTimer = setTimeout(() => {
      setHide(false);
      setInitialLoad(false);
    }, 50); // 50ms 후에 이미지 나타남

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // 초기 로드 중이 아닐 때만 스크롤 이벤트 처리
      if (!initialLoad) {
        if (window.scrollY > 200) {
          setHide(true); // 200px 이상 스크롤 → 이미지 사라짐
        } else {
          setHide(false); // 다시 올라오면 → 이미지 다시 나타남
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [initialLoad]);

  return (
    <div className="intro">
      <div className="txt">
        <h2>
          2025 <br /> Portfolio
        </h2>
      </div>
      <div className="intro-img">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt=""
            className={`scroll-image ${hide ? `hide-${img.direction}` : `show-${img.direction}`}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;
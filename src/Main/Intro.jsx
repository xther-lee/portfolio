import { useEffect, useState } from "react";
import "../Style/Intro.scss";

const Intro = () => {
  const images = [
    { src: "/img/bottom.png", direction: "bottom" },
    { src: "/img/left.png", direction: "left" },
    { src: "/img/right.png", direction: "right" },
    { src: "/img/top.png", direction: "top" },
  ];

  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHide(true); // 50px 이상 스크롤 → 이미지 사라짐
      } else {
        setHide(false); // 다시 올라오면 → 이미지 다시 나타남
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

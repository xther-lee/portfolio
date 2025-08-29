import { useEffect, useRef } from 'react';
import '../Style/Project.scss';

const Project = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
  const elts = {
    text1: text1Ref.current,
    text2: text2Ref.current
  };

  const texts = ["My", "Project", "My Project"];
  const morphTime = 1;

  let textIndex = 0; // 현재 글자 인덱스
  let start = null;

  // 초기 세팅
  elts.text1.textContent = texts[textIndex];
  elts.text2.textContent = texts[textIndex + 1];

  function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;

    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex];
    elts.text2.textContent = texts[textIndex + 1] || texts[textIndex]; // 배열 끝 처리
  }

  function animate(timestamp) {
    if (!start) start = timestamp;
    const elapsed = (timestamp - start) / 1000;
    const fraction = Math.min(elapsed / morphTime, 1);

    setMorph(fraction);

    if (fraction < 1) {
      requestAnimationFrame(animate);
    } else {
      // 다음 글자가 있으면 한 번 더 모핑
      textIndex++;
      if (textIndex < texts.length - 1) {
        start = null;
        requestAnimationFrame(animate);
      }
    }
  }

  requestAnimationFrame(animate);
}, []);


  return (
    <div className="project">
      <div id="container">
        <span id="text1" ref={text1Ref}></span>
        <span id="text2" ref={text2Ref}></span>
      </div>
      <svg id="filters">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Project;
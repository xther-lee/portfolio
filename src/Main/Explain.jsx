import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import tape1first from "../img/tape01-first.png"
import tape1middle from "../img/tape01-middle.png"
import tape1last from "../img/tape01.png"
import tape10first from "../img/tape10-first.png"
import tape10middle from "../img/tape10-middle.png"
import tape10last from "../img/tape10.png"

import '../Style/Explain.scss'

const Tape = ({ images, subText }) => {
  const [src, setSrc] = useState(images[0]);
  const [showSub, setShowSub] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);
  const enterTimeoutRef = useRef(null);
  const leaveTimeoutRef = useRef(null);
  const isHoveredRef = useRef(false);

  // 진행 중인 애니메이션을 모두 정리하는 함수
  const clearAnimations = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = null;
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  const startAnimation = () => {
    if (isAnimating || !isHoveredRef.current) return;
    
    setIsAnimating(true);
    setShowSub(false);
    
    let i = 0;
    setSrc(images[0]);

    intervalRef.current = setInterval(() => {
      // 애니메이션 중에 마우스가 나갔으면 중단
      if (!isHoveredRef.current) {
        clearAnimations();
        setSrc(images[0]);
        setShowSub(false);
        setIsAnimating(false);
        return;
      }

      i++;
      if (i < images.length) {
        setSrc(images[i]);
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        if (isHoveredRef.current) {
          setShowSub(true);
        }
        setIsAnimating(false);
      }
    }, 200);
  };

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    clearAnimations();
    
    // 100ms 후에 애니메이션 시작 (debounce 효과)
    enterTimeoutRef.current = setTimeout(() => {
      if (isHoveredRef.current) {
        startAnimation();
      }
    }, 100);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    clearAnimations();
    
    // 50ms 후에 초기화 (너무 빠른 복귀 방지)
    leaveTimeoutRef.current = setTimeout(() => {
      if (!isHoveredRef.current) {
        setSrc(images[0]);
        setShowSub(false);
        setIsAnimating(false);
      }
    }, 50);
  };

  return (
    <div className="tape-rela" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={src} alt="테이프 애니메이션" />
      <h2 className={`sub ${showSub ? 'show' : ''}`}>{subText}</h2>
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
                        tape1first,
                        tape1middle, 
                        tape1last,]}
                        subText="그동안 만든 사이트와 작업과정이 담겨있습니다."/>
                    </button>
                </Link>
            </div>
            <div className="explain-about tape-box">
                <Link to='/about'>
                    <button>
                        <Tape className='tape-rela'
                        images={[
                        tape10first,
                        tape10middle, 
                        tape10last,]} 
                        subText="저의 소개와 가치관, 개발자로써 나아갈 방향이 담겨있습니다."/>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  );
}
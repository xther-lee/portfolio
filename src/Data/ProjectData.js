import mainCalendar from '../img/mainCalendar.png';
import thekimchi from '../img/project-thekimchi.png';
import theedit from '../img/project-the-edit.png';
import osulloc from '../img/project-osulloc.png';
import kolon from '../img/project-kolon.png';
import supermatcha from '../img/project-supermatcha.png';
import ollio from '../img/project-ollio.png';
import portfolio from '../img/project-portfolio.png';

import calendarproto from '../img/swiper-calendar01.png';
import calendarwire from '../img/swiper-calendar02.png';
import portproto from '../img/swiper-portfolio01.png';
import portwire from '../img/swiper-portfolio02.png';
import osullocproto from '../img/swiper-osullo02.png';
import osullocwire from '../img/swiper-osullo01.png';
import supermatchaproto from '../img/swiper-supermatcha01.png';
import supermatchawire from '../img/swiper-supermatcha02.png';
import kolonproto from '../img/swiper-kolon02.png';
import kolonawire from '../img/swiper-kolon01.png';
import ollioproto from '../img/swiper-ollio01.png';
import olliowire from '../img/swiper-ollio02.png';

export const projectData = [
  { 
    id: 1, 
    type: "Team",
    title: "MY CALENDER", 
    desc: "캘린더를 꾸미고 공유가 가능한 사이트", 
    img: mainCalendar,
    type: "Team",
    swiperWireImg: calendarwire,
    swiperProImg: calendarproto,
    date: "2025.07 ~ 2025.09",
    skill: " 마우스 하버 효과, 요소에 드래그와 회전, 크기조절 설정, 사진 공유 설정, 글자 입력 및 크기 조절, 드래그 가능",
    language: "HTML, CSS, JAVASCRIPT",
    contribute: "50%",
    deploy: "Github",
    detail: "HTML, CSS, JavaScript를 활용한 react 프로젝트로 사진 불러오기, 스티커나 테이프 요소들을 통해 캘린더를 커스텀하여 꾸미고 저장할 수 있게 제작하였습니다.",
    link: "https://xther-lee.github.io/my-calendar/",
  },
  { 
    id: 2, 
    title: "Portfolio", 
    desc: "포트폴리오 사이트", 
    img: portfolio,
    type: "Solo",
    swiperWireImg: portwire,
    swiperProImg: portproto,
    date: "2025.08 ~ 2025.08",
    skill: " 마우스 하버 효과, 비디오 삽입, 아코디언 애니메이션, 스와이퍼 ",
    language: "HTML, CSS, JAVA",
    contribute: "100%",
    deploy: "Github",
    detail: "이 프로젝트는 React Hook을 사용해서 만든 개인 프로젝트입니다.",
    link: "https://xther-lee.github.io/portfolio/",
  },
  { 
    id: 3, 
    title: "OSULLOC", 
    desc: "오설록 사이트를 리디자인한 반응형 사이트", 
    img: osulloc,
    type: "Solo",
    swiperWireImg: osullocwire,
    swiperProImg: osullocproto,
    date: "2025.04 ~ 2025.05",
    skill: " 마우스 하버 효과, 비디오 삽입, 아코디언, 스와이퍼 ",
    language: "HTML, CSS, JAVA",
    contribute: "100%",
    deploy: "Github",
    detail: "화승 사이트를 벤치마킹하여 리디자인 한 오설록 사이트입니다. 사용자가 브랜드의 소개, 스토리를 보고 제품도 확인 할 수 있게 한 사이트입니다. 90% 웹표준으로 제작하여 HTML과 CSS를 숙지하는데 사용하였습니다.",
    link: "https://xther-lee.github.io/osulloc/",
    realLink: "https://www.osulloc.com/?srsltid=AfmBOopFNbqFTI7vDoUQmYIFdrGYVeF0Ydyp8oPKx6TRDsSWVrplTZCL",
  },
  { 
    id: 4, 
    title: "KOLON ENP COLON",
    desc: "코오롱 ENP 반응형 클론 사이트", 
    img: kolon,
    type: "Solo", 
    swiperWireImg: kolonawire,
    swiperProImg: kolonproto,
    date: "2025.04 ~ 2025.05",
    skill: " 마우스 하버 효과, 비디오 삽입, 스크롤트리거, 스와이퍼 ",
    language: "HTML, CSS, JAVA",
    contribute: "100%",
    deploy: "Dothome",
    detail: "HTML, CSS, JavaScript를 활용한 웹표준 프로젝트.",
    link: "http://hohome.dothome.co.kr/24-08-06-kolon-portfolio/",
    realLink: "https://kolonenp.com/",
  },
  { 
    id: 5, 
    title: "SUPERMATCHA", 
    desc: "슈퍼말차를 리디자인하고 위시리스트, 장바구니 등의 기능을 구현한 사이트", 
    img: supermatcha,
    type: "Solo",
    swiperWireImg: supermatchawire,
    swiperProImg: supermatchaproto,
    date: "2025.04 ~ 2025.05",
    skill: " 마우스 하버 효과, 스크롤트리거, , 게시판, 파이어베이스를 이용한 데이터베이스  ",
    language: "HTML, CSS, JAVA",
    contribute: "100%",
    deploy: "Firebase",
    detail: "슈퍼말차 사이트로 컨버스 사이트를 벤치마킹하여 리디자인하였습니다. 사용자가 회원가입, 로그인, 제품 위시리스트 저장, 장바구니 저장 등을 사용할 수 있고 게시판 기능을 활용하여 공지사항과 자주 묻는 질문을 만들었습니다.",
    link: "https://react-project-631a0.web.app/",
    realLink: "https://supermatcha.com/",
  },
  { 
    id: 6, 
    title: "OLLIO MOBILE", 
    desc: "올리오 모바일 리디자인 사이트", 
    img: ollio,
    type: "Solo",
    swiperWireImg: olliowire,
    swiperProImg: ollioproto,
    date: "2025.04 ~ 2025.05",
    skill: " 마우스 오버 애니메이션, 비디오 삽입, 아코디언 애니메이션, 스와이퍼 ",
    language: "HTML, CSS, JAVA",
    contribute: "100%",
    deploy: "Github",
    detail: "HTML, CSS, JavaScript를 활용한 웹표준 프로젝트.",
    link: "https://xther-lee.github.io/ollio/",
    realLink: "https://ollio.kr/",
  },
  // { 
  //   id: 7, 
  //   title: "THE EDIT CLONE", 
  //   desc: "디 에디트 매거진 클론 사이트", 
  //   img: theedit,
  //   type: "Solo",
  //   swiperWireImg: "/img/",
  //   swiperProImg: "/img/",
  //   date: "2025.04 ~ 2025.05",
  //   skill: " 마우스 오버 애니메이션, Top 버튼 사용, ScrollTriger 사용 ",
  //   language: "HTML, CSS",
  //   contribute: "100%",
  //   deploy: "Dothome",
  //   detail: "이 프로젝트는 GSAP의 ScrollTriger를 사용해서 만든 The Edit 클론 사이트입니다.",
  //   link: "http://hohome.dothome.co.kr/the-edit/",
  //   realLink: "https://the-edit.co.kr/",
  // },
  // { 
  //   id: 8, 
  //   title: "THE KIMCHI CLONE", 
  //   desc: "더 김치 클론 사이트", 
  //   img: thekimchi,
  //   type: "Solo",
  //   swiperWireImg: "/img/",
  //   swiperProImg: "/img/",
  //   date: "2025.04 ~ 2025.05",
  //   skill: " 마우스 오버 애니메이션, 비디오 삽입, 아코디언 애니메이션, 스와이퍼 ",
  //   language: "HTML, CSS, JAVA",
  //   contribute: "100%",
  //   deploy: "Dothome",
  //   detail: "리덕스를 적용하여 상태관리를 한 프로젝트입니다.",
  //   link: "http://hohome.dothome.co.kr/the_kimchi/",
  //   realLink: "https://thekimchi.co.kr/",
  // },
];

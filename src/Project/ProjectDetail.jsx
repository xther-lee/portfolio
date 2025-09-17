import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { projectData } from '../Data/ProjectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules"; 

import '../Style/ProjectDetail.scss';
import 'swiper/css';
import 'swiper/css/pagination';

// 데이터 값 있으면 버튼 나타남, 데이터 값 없으면 버튼 없어짐
function renderButton(label, condition, href, 
    { className = "button", style = {}, onClick } = {}) {
  if (!condition) return null; // 조건이 없으면 아예 렌더링 안됨 → 스타일도 적용 안됨

  return href ? (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={className} 
      style={style}
    >
      {label}
    </a>
  ) : (
    <button 
      className={className} 
      style={style} 
      onClick={onClick}
    >
      {label}
    </button>
  );
}



const ProjectDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const project = projectData.find((p) => p.id === parseInt(id));

    if (!project) return <p>해당프로젝트를 찾을 수 없습니다.</p>;

    return (
        <div className="project-detail">
            <div className="detail-container">
                <h2>{project.title}</h2>
                 <Swiper
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    >
                    <SwiperSlide>
                        <img src={project.swiperProImg} alt="Prototype" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={project.swiperWireImg} alt="Wireframe" />
                    </SwiperSlide>
                </Swiper>
                <div className="detail-info">
                    <table>
                        <tbody>
                        <tr>
                            <td>기간</td>
                            <td>{project.date}</td>
                        </tr>
                        <tr>
                            <td>주요 기능</td>
                            <td>{project.skill}</td>
                        </tr>
                        <tr>
                            <td>주요 언어</td>
                            <td>{project.language}</td>
                        </tr>
                        <tr>
                            <td>기여도</td>
                            <td>{project.contribute}</td>
                        </tr>
                        <tr>
                            <td>배포</td>
                            <td>{project.deploy}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="detail-box">
                    <p>{project.detail}</p>
                </div>
                <div className="detail-button">
                    <a href={project.link} className="real-button" target='_blank' rel='noopener noreferrer'>제작사이트 보기</a>
                    {renderButton("원본 사이트 보기", project.realLink, project.realLink, { className: "real-button" })}
                    <button onClick={() => navigate(-1)}>뒤로 가기</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { projectData } from '../Data/ProjectData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules"; //

import '../Style/ProjectDetail.scss';
import 'swiper/css';

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
                    <h2 className="swiper-txt">Prototype</h2>
                    <img src={project.swiperProImg} alt="Prototype" />
                </SwiperSlide>
                <SwiperSlide>
                    <h2 className="swiper-txt">Wireframe</h2>
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
                        </tbody>
                    </table>
                </div>
                <div className="detail-box">
                    <p>{project.detail}</p>
                </div>
                <div className="detail-button">
                    <button><a href={project.link} target='_blank' rel='noopener noreferrer'>사이트 더보기</a></button>
                    <button onClick={() => navigate(-1)}>뒤로 가기</button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
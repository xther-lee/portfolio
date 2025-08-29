import { Link } from 'react-router-dom';

import '../Style/Home.scss';

const Home = () => {
    return (
        <div className="home">
            <section id="home" className="section home-section">
                <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                    안녕하세요! <span className="highlight"><br />프론트엔드 개발자 <br />이에스더</span>입니다
                    </h1>
                    <p className="hero-subtitle">
                    React를 사용하여 사용자 친화적인 웹 프론트엔드를 개발합니다. 
                    </p>
                    <div className="hero-buttons">
                    <Link to='/project'>
                        <p className="btn btn-primary">프로젝트 보기</p>
                    </Link>
                    <Link to='/Contact'>
                        <p className="btn btn-secondary">연락하기</p>
                    </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="profile-card">
                    <div className="profile-avatar">
                        <span>👨‍💻</span>
                    </div>
                    <h3>웹 개발자</h3>
                    <p>React • Node.js • JavaScript</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
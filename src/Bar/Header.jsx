import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../Style/Header.scss';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header">
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">
                        <a href="https://xther-lee.github.io/portfolio/"  className='logo-text'>이에스더 | 개발자</a>
                    </div>
                    {/* 480px 이하 시 나타나는 햄버거 */}
                    <button className='hamburger' 
                    onClick={toggleMenu} 
                    aria-label='메뉴'>
                        <span className={isMenuOpen ? "active" : ""}></span>
                        <span className={isMenuOpen ? "active" : ""}></span>
                        <span className={isMenuOpen ? "active" : ""}></span>
                    </button>
                    <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                        <Link to='/project' onClick={() => setIsMenuOpen(false)}>
                            Project
                        </Link>
                        <Link to='/about' onClick={() => setIsMenuOpen(false)}>
                            About me
                        </Link>
                        <a href="https://github.com/xther-lee" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='git'>Github</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
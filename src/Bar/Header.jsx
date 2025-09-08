import { Link } from 'react-router-dom';

import '../Style/Header.scss';

const Header = () => {
    return (
        <div className="nav">
            <nav className="navbar">
                <div className="nav-container">
                <div className="nav-logo">
                    <a href="https://xther-lee.github.io/portfolio/"  className='logo-text'>이에스더 | 프론트엔드</a>
                </div>
                <div className='nav-menu'>
                    <Link to='/project'>
                        Project
                    </Link>
                    <Link to='/about'>
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
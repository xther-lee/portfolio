import { Link } from 'react-router-dom';

import '../Style/Header.scss';

const Header = () => {
    return (
        <div className="nav">
            <nav className="navbar">
                <div className="nav-container">
                <div className="nav-logo">
                    <Link to='/'><button className="logo-text">이에스더 | 프론트엔드</button></Link>
                </div>
                <div className='nav-menu'>
                    <Link to='/project'>Project</Link>
                    <Link to='/about'>About me</Link>
                    <a href="#" 
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
import { Link } from 'react-router-dom';

import '../Style/Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
            <div className="left-footer">
              <Link to='/contact'>Contact</Link>
              <p>저의 포트폴리오를 봐주셔서 감사합니다!</p>
            </div>
            <div className="right-footer">
              <p>© 2025 Portfolio. All rights reserved.</p>
            </div>
          </div>
      </footer>
    );
}

export default Footer;
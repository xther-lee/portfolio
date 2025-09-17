import '../Style/Contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <section id="contact" className="section contact-section">
                <div className="container">
                <h2 className="section-title">Contact</h2>
                <div className="contact-content">
                    <div className="contact-info">
                    <h3>Let's work together!</h3>
                    <p>프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.</p>
                    
                    <div className="contact-items">
                        <div className="contact-item">
                        <span className="contact-icon">📧</span>
                        <div>
                            <h4>Email</h4>
                            <p>flakdhkakfl@naver.com</p>
                        </div>
                        </div>
                        
                        <div className="contact-item">
                        <span className="contact-icon">📱</span>
                        <div>
                            <h4>Phone</h4>
                            <p>+82 10-9876-8745</p>
                        </div>
                        </div>
                        
                        <div className="contact-item">
                        <span className="contact-icon">📍</span>
                        <div>
                            <h4>Location</h4>
                            <p>인천, 대한민국</p>
                        </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="#" className="social-link">GitHub</a>
                    </div>
                    </div>

                    <div className="contact-form">
                    <form>
                        <div className="form-group">
                        <input type="text" placeholder="이름" required />
                        </div>
                        <div className="form-group">
                        <input type="email" placeholder="이메일" required />
                        </div>
                        <div className="form-group">
                        <input type="text" placeholder="제목" required />
                        </div>
                        <div className="form-group">
                        <textarea placeholder="메시지" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">메시지 보내기</button>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
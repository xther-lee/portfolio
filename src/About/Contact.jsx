import '../Style/Contact.scss';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');
        try {
            // EmailJS로 이메일 전송
            const result = await emailjs.sendForm(
                'service_m1y68he',           //  Service ID
                'template_27kvkyb',          //  Template ID
                form.current,
                'nhnJzkxvWxD0JMQsI'            //  Public Key
            );

            console.log('이메일 전송 성공:', result);
            setSubmitMessage('메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('이메일 전송 실패:', error);
            setSubmitMessage('메시지 전송에 실패했습니다. 다시 시도해주세요.');
        }

        setIsSubmitting(false);
        setTimeout(() => setSubmitMessage(''), 5000);
    };

    return (
        <div className="contact">
            <section id="contact" className="section contact-section">
                <div className="container">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3> Let's work together! </h3>
                            <p> 프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요. </p>
                            
                            <div className="contact-items">
                                <div className="contact-item">
                                    <span className="contact-icon">📧</span>
                                    <div>
                                        <h4>Email</h4>
                                        <p>1205est@naver.com</p>
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
                                <a href="https://github.com/xther-lee" 
                                    target="_blank" 
                                    className="social-link">GitHub</a>
                            </div>
                        </div>

                        <div className="contact-form">
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="이름" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="이메일" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="subject"
                                        placeholder="제목" 
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        name="message"
                                        placeholder="메시지" 
                                        rows="5" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? '전송 중...' : '메시지 보내기'}
                                </button>
                                {submitMessage && (
                                    <div className={`submit-message ${submitMessage.includes('성공') ? 'success' : 'error'}`}>
                                        {submitMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
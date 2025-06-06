import React from 'react'; 
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="homepage">
                <div className="left-section">
                    <h1>
                        Hướng dẫn giáo viên <br />
                        <span>sử dụng <span className="highlight">Google Classroom</span></span>
                    </h1>

                    <p>
                        <strong>EduCoach</strong> là nền tảng số hướng dẫn giáo viên sử dụng thành thạo Google Classroom thông qua các bài học được cập nhật liên tục.
                        Với <strong>EduCoach</strong>, việc giảng dạy trực tuyến trở nên thông minh, đơn giản, hiệu quả và phù hợp hơn với mọi cấp học.
                    </p>
                    <label className="search-label">Hãy tìm kiếm từ khóa bạn quan tâm:</label>
                    <div className="search-box">
                        <input type="text" placeholder="Cách tạo lớp học,..." />
                        <button>🔍</button>
                    </div>
                    <div className="cta-buttons">
                        <Link to="/lessons" className="cta-btn start">Bắt đầu học ngay</Link>
                    </div>
                </div>

                <div className="right-section">
                    <div className="image-container">
                        <img src="/ảnh.png" alt="Google Classroom" className="single-img" />
                    </div>
                </div>

                {/* PHẦN 1 */}
                <section className="features">
                    <h2>Lợi ích khi sử dụng EduCoach</h2>
                    <div className="features-list">
                        <div className="feature-item">
                            <span role="img" aria-label="easy">📚</span>
                            <h4>Dễ sử dụng</h4>
                            <p>Hướng dẫn chi tiết từng bước, đơn giản cho mọi giáo viên.</p>
                        </div>
                        <div className="feature-item">
                            <span role="img" aria-label="efficient">🚀</span>
                            <h4>Hiệu quả</h4>
                            <p>Bài học ngắn gọn, dễ hiểu, áp dụng ngay vào lớp học.</p>
                        </div>
                        <div className="feature-item">
                            <span role="img" aria-label="personal">🎯</span>
                            <h4>Cá nhân hóa</h4>
                            <p>Lộ trình học phù hợp với từng đối tượng giáo viên.</p>
                        </div>
                    </div>
                </section>

                {/* PHẦN 2 */}
                <section className="highlighted-courses">
                    <h2>Khóa học nổi bật</h2>
                    <p>
                        Bạn muốn nắm vững kỹ năng giảng dạy trực tuyến? Hãy khám phá các khóa học ngắn hạn giúp bạn ứng dụng Google Classroom một cách hiệu quả.
                    </p>

                    <div className="course-list">
                        <div className="course-card">
                            <img src="/khoahoc1.jpg" alt="Tạo lớp học và mời học sinh" />
                            <h3>Tạo lớp học và mời học sinh</h3>
                            <p>Hướng dẫn chi tiết cách tạo lớp học, thêm học sinh bằng email hoặc mã lớp.</p>
                            <Link to="/courses/1" className="course-btn">Xem chi tiết</Link>
                        </div>

                        <div className="course-card">
                            <img src="/khoahoc2.jpg" alt="Giao bài tập và chấm điểm" />
                            <h3>Giao bài tập và chấm điểm</h3>
                            <p>Tìm hiểu cách đăng bài tập, đính kèm tài liệu và sử dụng tính năng chấm điểm tự động.</p>
                            <Link to="/courses/2" className="course-btn">Xem chi tiết</Link>
                        </div>

                        <div className="course-card">
                            <img src="/khoahoc3.jpg" alt="Tổ chức lớp học hiệu quả" />
                            <h3>Tổ chức lớp học hiệu quả</h3>
                            <p>Chiến lược quản lý bài đăng, trao đổi và theo dõi tiến độ học tập của học sinh.</p>
                            <Link to="/courses/3" className="course-btn">Xem chi tiết</Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* === PHẦN FOOTER === */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <h3>EduCoach</h3>
                        <p>Hướng dẫn giáo viên sử dụng Google Classroom hiệu quả và thông minh.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Liên kết nhanh</h4>
                        <ul>
                            <li><Link to="/">Trang chủ</Link></li>
                            <li><Link to="/lessons">Bài học</Link></li>
                            <li><Link to="/test">Quizz</Link></li>
                            <li><Link to="/contact">Diễn đàn</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Liên hệ</h4>
                        <p>Email: support@educoach.vn</p>
                        <p>Hotline: 0378 006 400</p>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/educoach" target="_blank" rel="noopener noreferrer">
                                <img src="/fb.png" alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/educoach" target="_blank" rel="noopener noreferrer">
                                <img src="/ig.png" alt="Instagram" />
                            </a>
                            <a href="https://www.youtube.com/educoach" target="_blank" rel="noopener noreferrer">
                                <img src="/yt.png" alt="YouTube" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} EduCoach. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Home;

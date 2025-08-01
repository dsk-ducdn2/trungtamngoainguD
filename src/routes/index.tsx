import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const currentSlide = useSignal(0);
  const coursesPerSlide = 3;
  
  const courses = [
    {
      title: "Tiếng Nhật cơ bản N5-N4",
      description: "Khóa học dành cho người mới bắt đầu, từ bảng chữ cái Hiragana, Katakana đến ngữ pháp cơ bản. Chuẩn bị tốt cho kỳ thi JLPT N5-N4.",
      image: "/api/placeholder/350/200",
      duration: "6 tháng",
      level: "Cơ bản"
    },
    {
      title: "Tiếng Nhật nâng cao N3-N2",
      description: "Phát triển kỹ năng nghe, nói, đọc, viết nâng cao. Học các chủ đề phức tạp, ngữ pháp chuyên sâu chuẩn bị cho JLPT N3-N2.",
      image: "/api/placeholder/350/200", 
      duration: "8 tháng",
      level: "Nâng cao"
    },
    {
      title: "Luyện thi JLPT N1",
      description: "Khóa học chuyên sâu cho kỳ thi JLPT N1, bao gồm từ vựng, ngữ pháp, đọc hiểu và nghe hiểu ở trình độ cao nhất.",
      image: "/api/placeholder/350/200",
      duration: "10 tháng", 
      level: "Chuyên sâu"
    },
    {
      title: "Tiếng Đức giao tiếp A1-A2",
      description: "Học tiếng Đức từ con số không, tập trung vào giao tiếp hàng ngày, phát âm chuẩn và ngữ pháp cơ bản.",
      image: "/api/placeholder/350/200",
      duration: "5 tháng",
      level: "Cơ bản"
    },
    {
      title: "Tiếng Đức du học B1-B2", 
      description: "Chuẩn bị cho việc du học Đức với các kỹ năng học thuật, viết luận, thuyết trình và giao tiếp chuyên nghiệp.",
      image: "/api/placeholder/350/200",
      duration: "7 tháng",
      level: "Trung cấp"
    },
    {
      title: "Luyện thi Goethe C1-C2",
      description: "Khóa học cao cấp nhất, chuẩn bị cho các kỳ thi Goethe-Institut, phát triển khả năng sử dụng tiếng Đức thành thạo.",
      image: "/api/placeholder/350/200", 
      duration: "12 tháng",
      level: "Cao cấp"
    }
  ];

  const totalSlides = Math.ceil(courses.length / coursesPerSlide);



  return (
    <>
      {/* Header */}
      <header class="header">
        {/* Main Header */}
        <div class="main-header">
          <div class="header-container">
            <div class="logo">
              <span class="logo-center">Trung tâm ngoại ngữ</span>
              <span class="logo-brand">Nhật Đức</span>
            </div>
            <nav class="main-nav">
              <a href="#" class="nav-link">Trang chủ</a>
              <a href="#" class="nav-link">Giới thiệu</a>
              <a href="#" class="nav-link">Khóa học</a>
              <a href="#" class="nav-link">Lịch học</a>
              <a href="#" class="nav-link">Tin tức</a>
              <a href="#" class="nav-link">Liên hệ</a>
              <div class="social-links">
                <a href="#" class="social-link">f</a>
                <a href="#" class="social-link">📷</a>
                <a href="#" class="social-link">t</a>
              </div>
            </nav>
          </div>
        </div>
        
        {/* Sub Navigation */}
        <div class="sub-nav-container">
          <div class="sub-nav">
            <div class="sub-nav-item">
              <div class="sub-nav-title">TIẾNG NHẬT<br/>CƠ BẢN - NÂNG CAO</div>
            </div>
            <div class="sub-nav-item">
              <div class="sub-nav-title">TIẾNG ĐỨC<br/>GIAO TIẾP - DU HỌC</div>
            </div>
            <div class="sub-nav-item">
              <div class="sub-nav-title">LUYỆN THI<br/>JLPT - GOETHE</div>
            </div>
            <div class="sub-nav-item">
              <div class="sub-nav-title">TƯ VẤN<br/>DU HỌC</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section class="hero">
        <div class="hero-container">
          <div class="hero-content">
            <div class="content-box">
              <h1 class="hero-title">
                Học tiếng Nhật và tiếng Đức hiệu quả cùng đội ngũ giảng viên bản ngữ
              </h1>
              <p class="hero-text">
                Khởi đầu hành trình chinh phục tiếng Nhật và tiếng Đức cùng trung tâm ngoại ngữ Nhật Đức. Chương trình học chuẩn quốc tế, giảng viên bản ngữ giàu kinh nghiệm.
              </p>
              <button class="cta-btn">
                Xem thêm <span class="arrow">→</span>
              </button>
            </div>
          </div>
          <div class="hero-image">
            <img src="/api/placeholder/600/400" alt="Học viên học tiếng Nhật và tiếng Đức" class="student-image" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section class="about-section">
        <div class="about-container">
          <div class="about-image">
            <div class="house-illustration">
              <div class="house-body"></div>
              <div class="house-roof"></div>
              <div class="house-door"></div>
              <div class="house-windows">
                <div class="window window-1"></div>
                <div class="window window-2"></div>
              </div>
              <div class="house-sign">Ngoại ngữ TOÀN</div>
            </div>
          </div>
          <div class="about-content">
            <h2 class="about-title">
              Trung tâm ngoại ngữ Nhật Đức<br/>
              <span class="about-subtitle">Chúng tôi là ai</span>
            </h2>
            <p class="about-text">
              Trung tâm ngoại ngữ Nhật Đức là địa chỉ tin cậy cho những ai muốn học tiếng Nhật và tiếng Đức chuyên nghiệp. Với đội ngũ giảng viên bản ngữ có trình độ cao và nhiều năm kinh nghiệm, chúng tôi mang đến chương trình học chuẩn quốc tế, phù hợp với mọi trình độ từ cơ bản đến nâng cao. Hãy cùng chúng tôi khám phá thế giới ngôn ngữ phong phú và mở ra cơ hội du học, làm việc tại Nhật Bản và Đức.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="features-section">
        <div class="features-container">
          <div class="feature-card">
            <div class="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </div>
            <h3 class="feature-title">Các quyền lợi hấp dẫn</h3>
            <p class="feature-description">
              Chương trình học bổng, ưu đãi học phí cho học viên xuất sắc và nhiều quyền lợi khác khi học tại trung tâm.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23,12L20.56,14.78L20.9,18.46L17.29,19.28L15.4,22.46L12,21L8.6,22.46L6.71,19.28L3.1,18.46L3.44,14.78L1,12L3.44,9.22L3.1,5.54L6.71,4.72L8.6,1.54L12,3L15.4,1.54L17.29,4.72L20.9,5.54L20.56,9.22L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
              </svg>
            </div>
            <h3 class="feature-title">Cam kết chất lượng</h3>
            <p class="feature-description">
              Cam kết 100% đạt kết quả học tập mong muốn với chương trình đào tạo chuẩn quốc tế và đội ngũ giảng viên chuyên nghiệp.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
              </svg>
            </div>
            <h3 class="feature-title">Phương pháp Quick Reaction</h3>
            <p class="feature-description">
              Phương pháp học tập tiên tiến giúp học viên phản xạ nhanh, giao tiếp tự nhiên và thành thạo ngôn ngữ trong thời gian ngắn.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
              </svg>
            </div>
            <h3 class="feature-title">Đội ngũ giảng viên chuyên nghiệp</h3>
            <p class="feature-description">
              100% giảng viên bản ngữ với trình độ cao, kinh nghiệm giảng dạy phong phú và phương pháp giảng dạy hiện đại.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M8.93,12.22H16V16.36H9L8.93,12.22M8.93,11.27V8.44L11.07,10.18L8.93,11.27M16.23,7.75L10.05,10.18L16.23,7.75Z"/>
              </svg>
            </div>
            <h3 class="feature-title">Cảm nhận học viên</h3>
            <p class="feature-description">
              Hàng nghìn học viên đã thành công với mục tiêu du học và làm việc tại Nhật Bản, Đức sau khi hoàn thành khóa học.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
              </svg>
            </div>
            <h3 class="feature-title">Cơ sở vật chất hiện đại</h3>
            <p class="feature-description">
              Phòng học được trang bị đầy đủ thiết bị hiện đại, môi trường học tập thoải mái và chuyên nghiệp.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section class="courses-section">
        <div class="courses-container">
          <h2 class="courses-title">Các khóa học</h2>
          <div class="courses-slider">
            <button class="slider-btn prev-btn" onClick$={() => {
              currentSlide.value = currentSlide.value === 0 ? totalSlides - 1 : currentSlide.value - 1;
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/>
              </svg>
            </button>
            
            <div class="courses-track" style={`transform: translateX(-${currentSlide.value * 100}%)`}>
              {courses.map((course, index) => (
                <div key={index} class="course-card">
                  <div class="course-image">
                    <img src={course.image} alt={course.title} />
                    <div class="course-level">{course.level}</div>
                  </div>
                  <div class="course-content">
                    <h3 class="course-title">{course.title}</h3>
                    <p class="course-description">{course.description}</p>
                    <div class="course-meta">
                      <span class="course-duration">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
                        </svg>
                        {course.duration}
                      </span>
                    </div>
                    <button class="course-btn">Xem thêm</button>
                  </div>
                </div>
              ))}
            </div>
            
            <button class="slider-btn next-btn" onClick$={() => {
              currentSlide.value = (currentSlide.value + 1) % totalSlides;
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
              </svg>
            </button>
          </div>
          
          <div class="slider-dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button 
                key={index}
                class={`dot ${index === currentSlide.value ? 'active' : ''}`}
                onClick$={() => currentSlide.value = index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Activities & News Section */}
      <section class="activities-section">
        <div class="activities-container">
          <h2 class="activities-title">Các hình ảnh hoạt động & và tin tức</h2>
          <div class="activities-grid">
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Hoạt động học tiếng Nhật" />
              <div class="activity-overlay">
                <h3>Học tiếng Nhật trong rừng</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Sinh viên thuyết trình" />
              <div class="activity-overlay">
                <h3>Thuyết trình bằng tiếng Đức</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Hoạt động nhóm" />
              <div class="activity-overlay">
                <h3>Hoạt động nhóm</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Lễ tốt nghiệp" />
              <div class="activity-overlay">
                <h3>Lễ tốt nghiệp</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Lớp học tiếng Đức" />
              <div class="activity-overlay">
                <h3>Lớp học tương tác</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Thư viện học tập" />
              <div class="activity-overlay">
                <h3>Không gian học tập</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Học viên thảo luận" />
              <div class="activity-overlay">
                <h3>Thảo luận nhóm</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Giảng viên hướng dẫn" />
              <div class="activity-overlay">
                <h3>Hướng dẫn cá nhân</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Hoạt động văn hóa" />
              <div class="activity-overlay">
                <h3>Giao lưu văn hóa</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Phòng máy tính" />
              <div class="activity-overlay">
                <h3>Học trực tuyến</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Hội thảo" />
              <div class="activity-overlay">
                <h3>Hội thảo chuyên đề</h3>
              </div>
            </div>
            <div class="activity-item">
              <img src="/api/placeholder/300/300" alt="Lễ khai giảng" />
              <div class="activity-overlay">
                <h3>Lễ khai giảng</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section class="contact-form-section">
        <div class="contact-form-container">
          <div class="form-content">
            <div class="form-text">
              <h2 class="form-title">Bạn muốn tư vấn học tiếng Nhật & Đức?</h2>
              <p class="form-subtitle">
                Hãy để <span class="highlight">Trung tâm ngoại ngữ Nhật Đức</span> giúp bạn 
                <span class="highlight">Vượt qua rào cản</span> - cần bước 
                <span class="highlight">thành công</span>
              </p>
            </div>
            
            <div class="form-wrapper">
              <form class="consultation-form">
                <div class="form-row">
                  <div class="form-group">
                    <input 
                      type="text" 
                      placeholder="Họ và tên" 
                      class="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      class="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <input 
                      type="tel" 
                      placeholder="Số điện thoại" 
                      class="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <select class="form-select" required>
                      <option value="">Chi nhánh</option>
                      <option value="hanoi">Hà Nội</option>
                      <option value="hcm">TP. Hồ Chí Minh</option>
                      <option value="danang">Đà Nẵng</option>
                      <option value="haiphong">Hải Phòng</option>
                    </select>
                  </div>
                </div>
                
                <div class="form-row">
                  <div class="form-group">
                    <select class="form-select" required>
                      <option value="">Lớp bạn muốn học</option>
                      <option value="japanese-basic">Tiếng Nhật cơ bản (N5-N4)</option>
                      <option value="japanese-advanced">Tiếng Nhật nâng cao (N3-N2)</option>
                      <option value="japanese-jlpt">Luyện thi JLPT N1</option>
                      <option value="german-basic">Tiếng Đức giao tiếp (A1-A2)</option>
                      <option value="german-study">Tiếng Đức du học (B1-B2)</option>
                      <option value="german-goethe">Luyện thi Goethe (C1-C2)</option>
                    </select>
                  </div>
                </div>
                
                <button type="submit" class="submit-btn">GỬI</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-brand">
              <div class="footer-logo">
                <span class="footer-logo-center">Trung tâm</span>
                <span class="footer-logo-brand">Ngoại ngữ</span>
                <span class="footer-logo-name">Nhật Đức</span>
              </div>
              <p class="footer-description">
                Trung tâm học tiếng Nhật và tiếng Đức chuyên nghiệp với đội ngũ giảng viên bản ngữ. 
                Chương trình chuẩn quốc tế cho người Việt Nam - Hà Nội và TP.HCM
              </p>
            </div>

            <div class="footer-branches">
              <div class="branch">
                <h3 class="branch-title">CN HÀ NỘI</h3>
                <div class="branch-info">
                  <p class="branch-address">
                    319 C16 Lý Thường Kiệt,<br/>
                    Phường 15, Quận Hoàn Kiếm, Hà Nội
                  </p>
                  <p class="branch-phone">(+84) 126 - 922 - 0162 (Hưng)</p>
                  <p class="branch-email">contact@nhatduc.edu.vn</p>
                </div>
              </div>

              <div class="branch">
                <h3 class="branch-title">CN TP.HCM</h3>
                <div class="branch-info">
                  <p class="branch-address">
                    319 C16 Lý Thường Kiệt,<br/>
                    Phường 15, Quận 11, Tp.HCM
                  </p>
                  <p class="branch-phone">(+84) 126 - 922 - 0162 (Hưng)</p>
                  <p class="branch-email">hcm@nhatduc.edu.vn</p>
                </div>
              </div>
            </div>

            <div class="footer-hours">
              <h3 class="hours-title">GIỜ LÀM VIỆC</h3>
              <div class="hours-info">
                <div class="hour-item">
                  <span class="hour-day">Thứ hai - thứ sáu</span>
                  <span class="hour-time">08:00am - 21:00pm</span>
                </div>
                <div class="hour-item">
                  <span class="hour-day">Thứ bảy</span>
                  <span class="hour-time">09:00am - 21:00pm</span>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="footer-copyright">
              © 2024 Trung tâm ngoại ngữ Nhật Đức. All rights reserved.
            </p>
            <div class="footer-social">
              <a href="#" class="footer-social-link">Facebook</a>
              <a href="#" class="footer-social-link">Instagram</a>
              <a href="#" class="footer-social-link">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Trung tâm ngoại ngữ Nhật Đức - Học tiếng Nhật và tiếng Đức chuyên nghiệp",
  meta: [
    {
      name: "description",
      content: "Trung tâm ngoại ngữ Nhật Đức - Khởi đầu hành trình chinh phục tiếng Nhật và tiếng Đức cùng đội ngũ chuyên gia. Giảng viên bản ngữ, chương trình chuẩn quốc tế.",
    },
    {
      name: "keywords",
      content: "học tiếng nhật, học tiếng đức, JLPT, Goethe, du học nhật, du học đức, trung tâm ngoại ngữ, giảng viên bản ngữ",
    },
  ],
};

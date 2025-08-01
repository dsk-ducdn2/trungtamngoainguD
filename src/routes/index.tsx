import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Header */}
      <header class="header">
        <div class="header-container">
          <div class="logo">
            <div class="logo-img">🚀</div>
            <span class="logo-text">FutureLang</span>
          </div>
          <nav class="nav">
            <a href="#" class="nav-link">Trang chủ</a>
            <a href="#" class="nav-link">Giới thiệu</a>
            <a href="#" class="nav-link">Giảng viên</a>
            <a href="#" class="nav-link">Báo giá</a>
            <a href="#" class="nav-link">Đánh giá</a>
            <a href="#" class="nav-link">Liên hệ</a>
          </nav>
          <button class="cta-button">TƯ VẤN NGAY</button>
        </div>
      </header>

      {/* Hero Section */}
      <section class="hero">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="hero-subtitle">FUTURELANG - ỨNG DỤNG HỌC TIẾNG ANH 4.0</span>
              <span class="hero-main">Đạt được mục tiêu cá nhân</span>
              <span class="hero-main">với khóa học tiếng Anh</span>
              <span class="hero-main">dành riêng cho bạn</span>
            </h1>
            
            <div class="download-buttons">
              <button class="download-btn google-play">
                <div class="download-icon">📱</div>
                <div>
                  <span class="download-text">Tải ứng dụng trên</span>
                  <span class="download-store">GOOGLE PLAY</span>
                </div>
              </button>
              <button class="download-btn app-store">
                <div class="download-icon">📲</div>
                <div>
                  <span class="download-text">Tải ứng dụng trên</span>
                  <span class="download-store">APP STORE</span>
                </div>
              </button>
              <button class="download-btn desktop">
                <div class="download-icon">💻</div>
                <div>
                  <span class="download-text">Cài đặt trên</span>
                  <span class="download-store">MÁY TÍNH</span>
                </div>
              </button>
            </div>

            <button class="learn-more-btn">TÌM HIỂU NGAY →</button>
          </div>

          <div class="hero-phones">
            <div class="phone phone-1">
              <div class="phone-mockup">
                <div class="phone-screen">
                  <div class="app-interface">
                    📚 FutureLang<br/>
                    🎯 Lessons<br/>
                    📊 Progress<br/>
                    🏆 Achievements
                  </div>
                </div>
              </div>
            </div>
            <div class="phone phone-2">
              <div class="phone-mockup">
                <div class="phone-screen">
                  <div class="app-interface">
                    🗣️ Speaking<br/>
                    📖 Reading<br/>
                    🎧 Listening<br/>
                    ✍️ Writing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section class="features">
        <div class="features-container">
          <div class="feature-card">
            <div class="feature-icon">📈</div>
            <h3>Học tập thông minh</h3>
            <p>AI cá nhân hóa lộ trình học</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👥</div>
            <h3>Cộng đồng học tập</h3>
            <p>Kết nối với học viên toàn cầu</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Luyện tập tương tác</h3>
            <p>Gamification và thực hành</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏆</div>
            <h3>Chứng chỉ quốc tế</h3>
            <p>Được công nhận toàn cầu</p>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div class="floating-buttons">
        <button class="floating-btn zalo" title="Chat Zalo">
          💬
        </button>
        <button class="floating-btn phone" title="Gọi điện">
          📞
        </button>
        <button class="floating-btn messenger" title="Messenger">
          💌
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "FutureLang - Ứng dụng học tiếng Anh 4.0",
  meta: [
    {
      name: "description",
      content: "FutureLang - Ứng dụng học tiếng Anh 4.0. Đạt được mục tiêu cá nhân với khóa học tiếng Anh dành riêng cho bạn.",
    },
    {
      name: "keywords",
      content: "FutureLang, học tiếng anh, ứng dụng học tiếng anh, tiếng anh 4.0, khóa học tiếng anh",
    },
  ],
};

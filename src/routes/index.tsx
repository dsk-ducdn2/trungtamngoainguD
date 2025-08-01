import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="hero">
        <div class="hero-container">
          <div class="hero-content">
            <h1 class="hero-title">
              <span class="hero-subtitle">TRUNG TÂM NGOẠI NGỮ NHẬT ĐỨC</span>
              <span class="hero-main">Khởi đầu hành trình chinh phục</span>
              <span class="hero-main">tiếng Nhật và tiếng Đức</span>
              <span class="hero-main">cùng đội ngũ chuyên gia</span>
            </h1>
            
            <div class="download-buttons">
              <button class="download-btn google-play">
                <div class="download-icon">🇯🇵</div>
                <div>
                  <span class="download-text">Khóa học</span>
                  <span class="download-store">TIẾNG NHẬT</span>
                </div>
              </button>
              <button class="download-btn app-store">
                <div class="download-icon">🇩🇪</div>
                <div>
                  <span class="download-text">Khóa học</span>
                  <span class="download-store">TIẾNG ĐỨC</span>
                </div>
              </button>
              <button class="download-btn desktop">
                <div class="download-icon">👨‍🏫</div>
                <div>
                  <span class="download-text">Lớp học</span>
                  <span class="download-store">ONLINE</span>
                </div>
              </button>
            </div>

            <button class="learn-more-btn">ĐĂNG KÝ NGAY →</button>
          </div>

          <div class="hero-phones">
            <div class="phone phone-1">
              <div class="phone-mockup">
                <div class="phone-screen">
                  <div class="app-interface">
                    🇯🇵 Nihongo<br/>
                    📝 N5-N1 JLPT<br/>
                    🗾 Văn hóa Nhật<br/>
                    🏮 Du học Nhật
                  </div>
                </div>
              </div>
            </div>
            <div class="phone phone-2">
              <div class="phone-mockup">
                <div class="phone-screen">
                  <div class="app-interface">
                    🇩🇪 Deutsch<br/>
                    📜 A1-C2 Goethe<br/>
                    🏰 Văn hóa Đức<br/>
                    🎓 Du học Đức
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
            <div class="feature-icon">👨‍🏫</div>
            <h3>Giảng viên bản ngữ</h3>
            <p>100% giáo viên người Nhật và Đức</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📚</div>
            <h3>Chương trình chuẩn</h3>
            <p>Theo tiêu chuẩn JLPT và Goethe</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎓</div>
            <h3>Hỗ trợ du học</h3>
            <p>Tư vấn và chuẩn bị hồ sơ du học</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🏮</div>
            <h3>Văn hóa đặc sắc</h3>
            <p>Trải nghiệm văn hóa Nhật - Đức</p>
          </div>
        </div>
      </section>

      {/* Current Problems Section */}
      <section class="problems-section">
        <div class="problems-container">
          <h2 class="problems-title">Thực trạng học ngoại ngữ hiện nay</h2>
          
          <div class="problems-content">
            <div class="problems-cards">
              <div class="problem-card yellow-card">
                <div class="problem-icon">📚</div>
                <h3>MẤT GỐC LÂU NĂM</h3>
                <p>Không biết bắt đầu từ đâu. Đã học nhiều chương trình nhưng vẫn thất bại.</p>
              </div>
              
              <div class="problem-card blue-card">
                <div class="problem-icon">🧠</div>
                <h3>HỌC TRƯỚC QUÊN SAU</h3>
                <p>Không có phương pháp học đúng, quá chú trọng vào ngữ pháp đơn điệu việc học trước quên sau.</p>
              </div>
              
              <div class="problem-card blue-card">
                <div class="problem-icon">⚙️</div>
                <h3>THỤ ĐỘNG TRONG VIỆC HỌC</h3>
                <p>Không rèn luyện mỗi ngày các kỹ năng nghe, nói, đọc, viết.</p>
              </div>
              
              <div class="problem-card blue-card">
                <div class="problem-icon">🎯</div>
                <h3>KHÔNG CÓ ĐỊNH HƯỚNG</h3>
                <p>Không có mục tiêu rõ ràng và định hướng cụ thể để học khiến bạn không bao giờ đạt được đích đến.</p>
              </div>
            </div>
            
            <div class="problems-image">
              <div class="student-stress">
                <div class="student-avatar">😩</div>
                <div class="study-elements">
                  <div class="element element-1">📖</div>
                  <div class="element element-2">🌍</div>
                  <div class="element element-3">✏️</div>
                  <div class="element element-4">📝</div>
                  <div class="element element-5">🎒</div>
                </div>
                <div class="english-text">
                  <span class="lang-text japanese">日本語</span>
                  <span class="lang-text german">DEUTSCH</span>
                </div>
              </div>
            </div>
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

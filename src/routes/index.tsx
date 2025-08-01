import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "../components/starter/hero/hero";
import Infobox from "../components/starter/infobox/infobox";

export default component$(() => {
  return (
    <>
      <Hero />
      
      {/* About Section */}
      <div class="container container-center container-spacing-xl">
        <h2>Về Trung tâm ngoại ngữ D</h2>
        <p class="intro-text">
          Trung tâm ngoại ngữ D là địa chỉ tin cậy để học ngoại ngữ chất lượng cao. 
          Với đội ngũ giảng viên giàu kinh nghiệm và phương pháp giảng dạy hiện đại, 
          chúng tôi cam kết mang đến cho học viên trải nghiệm học tập tốt nhất.
        </p>
      </div>

      <div role="presentation" class="ellipsis"></div>

      {/* Courses Section */}
      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-apps">
            Tiếng Anh
          </div>
          <ul>
            <li>Tiếng Anh giao tiếp</li>
            <li>Tiếng Anh học thuật</li>
            <li>Luyện thi IELTS, TOEIC</li>
            <li>Tiếng Anh cho trẻ em</li>
          </ul>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-community">
              Tiếng Trung
            </div>
            <ul>
              <li>Tiếng Trung giao tiếp</li>
              <li>Tiếng Trung thương mại</li>
              <li>Luyện thi HSK</li>
              <li>Tiếng Trung cho người mới bắt đầu</li>
            </ul>
          </Infobox>

          <Infobox>
            <div q:slot="title" class="icon icon-cli">
              Tiếng Nhật
            </div>
            <ul>
              <li>Tiếng Nhật giao tiếp</li>
              <li>Tiếng Nhật du học</li>
              <li>Luyện thi JLPT</li>
              <li>Văn hóa Nhật Bản</li>
            </ul>
          </Infobox>
        </div>
      </div>

      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      {/* Teachers Section */}
      <div class="container container-center container-spacing-xl">
        <h2>Đội ngũ giảng viên</h2>
        <p class="intro-text">
          Tất cả giảng viên tại trung tâm đều có bằng cấp chuyên môn cao, 
          kinh nghiệm giảng dạy nhiều năm và được đào tạo phương pháp sư phạm hiện đại.
        </p>
        <div class="features-grid">
          <div class="feature-item">
            <h4>100% Native Speaker</h4>
            <p>Giảng viên bản ngữ từ các nước</p>
          </div>
          <div class="feature-item">
            <h4>Chứng chỉ quốc tế</h4>
            <p>TESOL, TEFL, JLPT N1, HSK Level 6</p>
          </div>
          <div class="feature-item">
            <h4>Kinh nghiệm 5+ năm</h4>
            <p>Giảng dạy cho mọi lứa tuổi và trình độ</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-community">
            Liên hệ đăng ký
          </div>
          <ul>
            <li>
              <strong>Địa chỉ:</strong> 123 Đường ABC, Quận XYZ, TP.HCM
            </li>
            <li>
              <strong>Điện thoại:</strong> 0123.456.789
            </li>
            <li>
              <strong>Email:</strong> info@languagecenter-d.com
            </li>
            <li>
              <strong>Website:</strong> www.languagecenter-d.com
            </li>
          </ul>
        </Infobox>

        <Infobox>
          <div q:slot="title" class="icon icon-apps">
            Thời gian hoạt động
          </div>
          <ul>
            <li><strong>Thứ 2 - Thứ 6:</strong> 8:00 - 21:00</li>
            <li><strong>Thứ 7 - Chủ nhật:</strong> 8:00 - 18:00</li>
            <li><strong>Tư vấn online:</strong> 24/7</li>
          </ul>
        </Infobox>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Trung tâm ngoại ngữ D - Học ngoại ngữ chất lượng cao",
  meta: [
    {
      name: "description",
      content: "Trung tâm ngoại ngữ D - Địa chỉ tin cậy để học tiếng Anh, tiếng Trung, tiếng Nhật với đội ngũ giảng viên chuyên nghiệp và phương pháp giảng dạy hiện đại.",
    },
    {
      name: "keywords",
      content: "học tiếng anh, học tiếng trung, học tiếng nhật, trung tâm ngoại ngữ, IELTS, TOEIC, HSK, JLPT",
    },
  ],
};

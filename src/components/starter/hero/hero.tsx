import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "../../../media/thunder.png?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} alt="Language Center D Logo" />
      <h1>
        Chào mừng đến với <span class="highlight">Trung tâm</span>
        <br />
        ngoại ngữ <span class="highlight">D</span>
      </h1>
      <p>Nơi khởi đầu hành trình chinh phục ngôn ngữ của bạn với chất lượng giảng dạy hàng đầu.</p>
      <div class={styles["button-group"]}>
        <button
          onClick$={async () => {
            // Scroll to contact section
            const contactSection = document.querySelector('.container-flex:last-of-type');
            if (contactSection) {
              contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }
          }}
          class="button"
        >
          Đăng ký ngay
        </button>
        <a
          href="#courses"
          class="button button-dark"
        >
          Xem khóa học
        </a>
      </div>
    </div>
  );
});

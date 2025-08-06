import "../assets/css/home.css";
import doctor3 from "../assets/images/doctor3.webp";
import doctor2 from "../assets/images/doctor2.jpg";
import doctor4 from "../assets/images/doctor4.avif";

export default function GuestHome() {
  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">Phòng Khám Đa Khoa</div>
        <nav className="navbar">
          <a href="#">Trang chủ</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Bác sĩ</a>
          <a href="#">Liên hệ</a>
        </nav>
        <div className="contact-button">0326.040.037</div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="sub-title">CAM KẾT VÌ SỨC KHỎE</p>
          <h1>
            Chúng tôi đồng hành chăm sóc{" "}
            <span className="highlight">sức khỏe</span> toàn diện cho bạn
          </h1>
          <p className="description">
            Với đội ngũ bác sĩ chuyên môn cao, nhiều năm kinh nghiệm và tận tâm
            trong nghề, phòng khám của chúng tôi cam kết mang đến dịch vụ y tế
            chất lượng, an toàn và hiệu quả. Chúng tôi không chỉ điều trị, mà
            còn đồng hành cùng bạn trên hành trình chăm sóc sức khỏe lâu dài.
          </p>
          <button className="btn-book">Đặt lịch ngay</button>
        </div>
        <div className="hero-images">
          <img src={doctor3} alt="Doctor Team 1" />
          <img src={doctor2} alt="Doctor Team 2" />
        </div>
      </section>

      <section className="services-section">
        <h2 className="services-title">Dịch vụ của chúng tôi</h2>
        <p className="services-subtitle">
          Tìm hiểu thêm về các dịch vụ tại phòng khám của chúng tôi và cách
          chúng tôi mang lại sự chăm sóc y tế chất lượng.
        </p>
        <div className="services-container">
          <div className="services-column">
            <div className="service-item">
              <h3>Siêu âm tim</h3>
              <p>
                Quan sát hoạt động và cấu trúc tim một cách chính xác, không xâm
                lấn.
              </p>
            </div>
            <div className="service-item">
              <h3>Chăm sóc trẻ em</h3>
              <p>
                Dành cho trẻ sơ sinh, trẻ nhỏ — theo dõi sức khỏe định kỳ sau
                sinh.
              </p>
            </div>
            <div className="service-item">
              <h3>Phụ khoa</h3>
              <p>
                Chẩn đoán và điều trị các vấn đề về sức khỏe sinh sản nữ giới.
              </p>
            </div>
          </div>

          <div className="services-image">
            <img src={doctor4} alt="Bác sĩ đại diện" />
          </div>

          <div className="services-column">
            <div className="service-item">
              <h3>Da liễu</h3>
              <p>
                Chăm sóc và điều trị các vấn đề da liễu từ cơ bản đến chuyên
                sâu.
              </p>
            </div>
            <div className="service-item">
              <h3>Xét nghiệm</h3>
              <p>
                Hệ thống xét nghiệm hiện đại, cho kết quả nhanh chóng & chính
                xác.
              </p>
            </div>
            <div className="service-item">
              <h3>Chụp CT</h3>
              <p>
                Chẩn đoán hình ảnh bằng công nghệ CT tiên tiến, không gây đau.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

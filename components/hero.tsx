export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div>
          <div className="eyebrow">Webasto R25 &amp; R20 · Điều hòa đỗ xe</div>
          <h1>
            ĐẲNG CẤP <span className="red">ĐỨC</span>
            <br />
            CHO <span className="out">CABIN</span> XE TẢI VIỆT
          </h1>
          <p className="lead">
            Điều hòa không cần nổ máy. Làm lạnh sâu cực nhanh ngay cả khi xe đỗ dưới nắng 40°C — cho tài xế đường dài một
            giấc ngủ thật, tiết kiệm dầu, giữ đồ cơ.
          </p>
          <div className="cta-row">
            <a href="#cta" className="btn btn-primary">
              Nhận báo giá &amp; tư vấn lắp »
            </a>
            <a href="#products" className="btn btn-ghost">
              Xem 2 dòng sản phẩm
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <b>2 dòng máy</b>
              <span>R25 2 quạt · R20 1 quạt</span>
            </div>
            <div className="stat">
              <b>2000–2500W</b>
              <span>Công suất làm lạnh</span>
            </div>
            <div className="stat">
              <b>24V</b>
              <span>Chuẩn điện xe tải</span>
            </div>
            <div className="stat">
              <b>100% Đức</b>
              <span>Thương hiệu Webasto</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="pill">
            <b>22°C</b>
            <span>từ 40°C nắng gắt ↓</span>
          </div>
          <div className="stack">
            <div className="card big">
              <img src="/webasto-r25-red.jpg" alt="Webasto R25 — 2 quạt, đỏ Trung Hoa" />
              <div className="lbl">Webasto R25 — 2 quạt, đỏ Trung Hoa</div>
            </div>
            <div className="card">
              <img src="/webasto-r20.jpg" alt="Webasto R20 — 1 quạt" />
              <div className="lbl">Webasto R20 — 1 quạt</div>
            </div>
            <div className="card">
              <img src="/webasto-cassette.jpg" alt="Dàn lạnh Webasto lắp trong cabin" />
              <div className="lbl">Dàn lạnh trong cabin</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

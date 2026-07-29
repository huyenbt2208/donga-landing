export function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-logo">
              <img src="/logo.jpg" alt="Đông Á JSC" className="mark" />
              <div className="name" style={{ color: "#fff", fontFamily: "var(--font-oswald), sans-serif", fontSize: 18, fontWeight: 600 }}>
                ĐÔNG Á
              </div>
            </div>
            <p>
              Công ty CP Đầu tư và Phát triển TM Tổng hợp Đông Á Group — nhà phân phối điều hòa đỗ xe Webasto chính hãng
              cho xe tải tại Việt Nam.
            </p>
          </div>
          <div>
            <h5>Liên kết</h5>
            <ul>
              <li>
                <a href="#why">Vì sao chọn Webasto</a>
              </li>
              <li>
                <a href="#products">Sản phẩm R25 / R20</a>
              </li>
              <li>
                <a href="#specs">Thông số kỹ thuật</a>
              </li>
              <li>
                <a href="#trucks">Xe thực tế đã lắp</a>
              </li>
              <li>
                <a href="#gallery">Hàng có sẵn</a>
              </li>
            </ul>
          </div>
          <div>
            <h5>Hệ thống</h5>
            <ul>
              <li>Trụ sở Hà Nội</li>
              <li>Chi nhánh Bắc Giang</li>
              <li>Chi nhánh Vinh</li>
              <li>Chi nhánh Hà Nam, Quảng Trị</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">Copyright 2026 © ĐÔNG Á — Bản quyền thông tin sản phẩm thuộc Webasto</div>
      </div>
    </footer>
  )
}

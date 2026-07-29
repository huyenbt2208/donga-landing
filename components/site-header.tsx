export function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <div>Nhà phân phối xe tải &amp; điều hòa chính hãng — Phụ kiện cabin cao cấp</div>
          <div className="hot">
            Hotline: <span>0906.02.04.99</span> &nbsp;·&nbsp; ndtuan.da@gmail.com
          </div>
        </div>
      </div>

      <header className="main">
        <div className="wrap">
          <a href="#top" className="logo" aria-label="Đông Á — Điều hòa Webasto chính hãng">
            <span className="mark" aria-hidden="true">
              ĐA
            </span>
            <span className="name">
              ĐÔNG Á<small>ĐIỀU HÒA WEBASTO CHÍNH HÃNG</small>
            </span>
          </a>
          <nav className="links" aria-label="Điều hướng chính">
            <a href="#why">Vì sao chọn</a>
            <a href="#products">Sản phẩm</a>
            <a href="#specs">Thông số</a>
            <a href="#trucks">Xe thực tế</a>
            <a href="#gallery">Hàng có sẵn</a>
          </nav>
          <a href="#cta" className="btn btn-primary">
            Nhận báo giá ngay
          </a>
        </div>
      </header>
    </>
  )
}

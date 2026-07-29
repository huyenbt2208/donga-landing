export function Products() {
  return (
    <section className="products" id="products">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Chọn đúng máy cho đúng dòng xe</div>
          <h2>2 sản phẩm đang chạy quảng cáo</h2>
          <p>
            Webasto phân phối 2 phiên bản phù hợp hai nhu cầu khác nhau: R25 hai quạt cho cabin giường nằm, xe đầu kéo
            đường dài — và R20 một quạt cho xe tải thùng, xe ben tự đổ tiết kiệm chi phí.
          </p>
        </div>

        {/* R25 */}
        <div className="product-block">
          <div className="p-media">
            <span className="badge">Bán chạy · Cao cấp nhất</span>
            <img className="m-main" src="/webasto-r25-red.jpg" alt="Webasto R25 2 quạt màu đỏ Trung Hoa" />
            <img className="m-small" src="/webasto-r25-ivory.jpg" alt="Webasto R25 2 quạt màu trắng ngà" />
            <img className="m-small" src="/webasto-cassette.jpg" alt="Dàn lạnh Webasto trong cabin" />
          </div>
          <div className="p-info">
            <div className="eyebrow">Dòng cao cấp nhất</div>
            <h3>WEBASTO R25 — 2 QUẠT</h3>
            <div className="sub">Dành cho xe đầu kéo, cabin giường nằm</div>
            <p className="desc">
              Hai quạt thổi gió lạnh ra cabin mạnh và nhanh hơn bản 1 quạt — làm mát tức thì cho khoang lái rộng của xe
              đầu kéo. Lựa chọn tối ưu cho tài xế chạy đường dài, ngủ đêm trên xe.
            </p>
            <div className="tags">
              <span>Xe đầu kéo cabin lớn</span>
              <span>Chạy đường dài, ngủ đêm</span>
              <span>2 màu: đỏ / trắng ngà</span>
            </div>
            <div className="quick">
              <div>
                <b>2300/2500W</b>
                <span>Công suất định mức/tối đa</span>
              </div>
              <div>
                <b>380/450 m³/h</b>
                <span>Lưu lượng gió</span>
              </div>
              <div>
                <b>24V</b>
                <span>Điện áp</span>
              </div>
            </div>
            <a href="#cta" className="btn btn-primary">
              Nhận báo giá R25 »
            </a>
          </div>
        </div>

        {/* R20 */}
        <div className="product-block reverse">
          <div className="p-media">
            <span className="badge">Tối ưu chi phí</span>
            <img className="m-main" src="/webasto-r20.jpg" alt="Webasto R20 1 quạt màu trắng ngà" />
            <img className="m-small" src="/webasto-r25-ivory.jpg" alt="Webasto dàn nóng gọn trên nóc" />
            <img className="m-small" src="/webasto-cassette.jpg" alt="Dàn lạnh Webasto trong cabin" />
          </div>
          <div className="p-info">
            <div className="eyebrow">Dòng gọn nhẹ</div>
            <h3>WEBASTO R20 — 1 QUẠT</h3>
            <div className="sub">Dành cho xe tải thùng &amp; xe ben tự đổ</div>
            <p className="desc">
              Thiết kế gọn, làm mát vừa đủ và tiết kiệm chi phí cho cabin tiêu chuẩn của xe tải thùng và xe ben tự đổ.
              Cùng chất lượng Đức, cùng độ bền — phù hợp ngân sách vận tải.
            </p>
            <div className="tags">
              <span>Xe tải thùng</span>
              <span>Xe ben tự đổ</span>
              <span>Ngoại thất 16cm, 26kg</span>
            </div>
            <div className="quick">
              <div>
                <b>2000W</b>
                <span>Công suất làm lạnh</span>
              </div>
              <div>
                <b>330 m³/h</b>
                <span>Lưu lượng gió tuần hoàn</span>
              </div>
              <div>
                <b>24V</b>
                <span>Điện áp</span>
              </div>
            </div>
            <a href="#cta" className="btn btn-primary">
              Nhận báo giá R20 »
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

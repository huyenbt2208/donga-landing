const cards = [
  {
    num: "01 · KIỂM SOÁT CHẤT LƯỢNG",
    title: "Kiểm soát chất lượng nghiêm ngặt",
    body: "Áp dụng quy trình kiểm định tiêu chuẩn Đức trên từng lô hàng. Sản phẩm đến tay khách hàng ổn định, ít lỗi vặt, giảm chi phí sửa chữa.",
    tag: "Lỗi thấp hơn 5–10 lần",
  },
  {
    num: "02 · MÁY NÉN INVERTER",
    title: "Máy nén Inverter hiệu suất cao",
    body: "Làm lạnh sâu, nhanh chóng ngay cả khi đỗ dưới nắng trên 40°C, giúp tài xế hồi phục sức khỏe nhanh nhất sau mỗi chặng đường.",
    tag: "Làm lạnh sâu ở 40°C",
  },
  {
    num: "03 · ĐỘ BỀN LINH KIỆN",
    title: "Độ bền linh kiện vượt trội",
    body: "Dàn nóng, dàn lạnh, ống dẫn xử lý chống ăn mòn muối biển và rung chuyển liên tục — yếu tố sống còn với xe tải chạy đường dài.",
    tag: "Chống ăn mòn · chịu rung",
  },
]

export function WhyWebasto() {
  return (
    <section className="why" id="why">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Vì sao chọn Webasto</div>
          <h2>Giá cao hơn — nhưng &quot;rẻ&quot; hơn về lâu dài</h2>
          <p>
            Khác với điều hòa nội địa chạy giá rẻ, Webasto giữ trọn &quot;DNA kỹ thuật&quot; Đức trong từng chi tiết.
            Đây là lý do tài xế và chủ xe tin dùng.
          </p>
        </div>
        <div className="why-grid">
          {cards.map((c) => (
            <div className="why-card" key={c.num}>
              <div className="num">{c.num}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <span className="tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

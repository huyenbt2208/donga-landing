const r25 = [
  ["Công suất làm mát định mức", "2300 W"],
  ["Khả năng làm mát tối đa", "2500 W"],
  ["Công suất tiêu thụ điện", "850 W"],
  ["Lưu lượng gió", "380 m³/h"],
  ["Hệ số hiệu suất năng lượng (EER)", "2.6 W/W"],
  ["Kích thước dàn nóng (ngoài mui)", "960 × 730 × 185 mm"],
  ["Kích thước dàn lạnh (trong cabin)", "465 × 265 mm"],
  ["Lượng chất làm lạnh nạp vào", "560 ± 5% g"],
  ["Loại chất làm lạnh", "R134a"],
  ["Điện áp thích ứng", "24 V"],
  ["Loại máy nén", "Máy nén rôto kép biến tần DC"],
  ["Phạm vi nhiệt độ có thể điều chỉnh", "16 – 32 °C"],
  ["Trọng lượng", "30 kg"],
  ["Độ ồn", "65 dB(A)"],
  ["Xếp hạng chống nước", "IPX6"],
]

const r20 = [
  ["Công suất làm lạnh định mức", "2000 W"],
  ["Công suất tiêu thụ định mức", "840 W"],
  ["Dòng điện định mức", "35 A"],
  ["Lưu lượng gió tuần hoàn", "330 m³/h"],
  ["Điện áp định mức", "24 V"],
  ["Hệ số hiệu suất năng lượng (EER)", "> 2.2 W/W"],
  ["Độ ồn", "< 65 dB(A)"],
  ["Môi chất lạnh", "R134a"],
  ["Kích thước tổng (dài × rộng × cao ngoài+trong)", "860 × 644 × (162+120) mm"],
  ["Màu sắc", "Trắng ngà / Đỏ Trung Hoa"],
  ["Trọng lượng", "26 kg"],
  ["Loại máy nén", "Con lăn (Rotary)"],
]

export function Specs() {
  return (
    <section className="specs" id="specs">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Thông số kỹ thuật</div>
          <h2>Webasto R25 &amp; R20 — Chi tiết đầy đủ</h2>
          <p>Toàn bộ thông số đã được biên dịch sang tiếng Việt từ tài liệu kỹ thuật chính hãng Webasto.</p>
        </div>
        <div className="spec-grid">
          <div className="spec-card">
            <div className="head">
              <img src="/webasto-r25-red.jpg" alt="Webasto R25" />
              <div>
                <h4>Webasto R25 — 2 quạt</h4>
                <span>R25 Series</span>
              </div>
            </div>
            <table>
              <tbody>
                {r25.map(([k, v]) => (
                  <tr key={k}>
                    <td className="k">{k}</td>
                    <td className="v">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="spec-card">
            <div className="head">
              <img src="/webasto-r20.jpg" alt="Webasto R20" />
              <div>
                <h4>Webasto R20 — 1 quạt</h4>
                <span>Cool Top 20 RT-E</span>
              </div>
            </div>
            <table>
              <tbody>
                {r20.map(([k, v]) => (
                  <tr key={k}>
                    <td className="k">{k}</td>
                    <td className="v">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

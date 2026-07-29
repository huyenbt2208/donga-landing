const rows = [
  ["Đối tượng xe phù hợp", "Xe đầu kéo, cabin giường nằm", "Xe tải thùng, xe ben tự đổ"],
  ["Số quạt tản nhiệt", "2 quạt", "1 quạt"],
  ["Công suất làm lạnh", "2300 / 2500 W", "2000 W"],
  ["Lưu lượng gió", "380 / 450 m³/h", "330 m³/h"],
  ["Trọng lượng", "30 kg", "26 kg"],
  ["Điện áp", "24 V", "24 V"],
  ["Ưu tiên", "Làm lạnh mạnh, ngủ đêm thoải mái", "Gọn nhẹ, tối ưu chi phí đầu tư"],
]

export function Compare() {
  return (
    <section className="compare">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">So sánh nhanh</div>
          <h2>R25 (2 quạt) và R20 (1 quạt) — nên chọn máy nào?</h2>
        </div>
        <table className="cmp-table">
          <tbody>
            <tr>
              <th>Tiêu chí</th>
              <th>Webasto R25 — 2 quạt</th>
              <th>Webasto R20 — 1 quạt</th>
            </tr>
            {rows.map(([lbl, a, b]) => (
              <tr key={lbl}>
                <td className="lbl">{lbl}</td>
                <td className="r25">{a}</td>
                <td className="r20">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

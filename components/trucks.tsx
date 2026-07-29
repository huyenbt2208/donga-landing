const trucks = [
  { src: "/truck-howo-ts7.jpg", tag: "HOWO TS7", cap: "Lắp điều hòa đỗ xe trên nóc cabin" },
  { src: "/truck-howo-orange.jpg", tag: "SINOTRUK", cap: "Dàn nóng Webasto gọn trên nóc xe" },
  { src: "/truck-beijing-red.jpg", tag: "BẮC KINH · CTOY 2024", cap: "Dàn nóng nhìn từ đầu xe đầu kéo" },
  { src: "/truck-brands.png", tag: "Đối tác", cap: "HOWO · SHACMAN · CIMC · SOOSAN" },
]

export function Trucks() {
  return (
    <section className="trucks" id="trucks">
      <div className="wrap">
        <div className="sec-head" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            HOWO · SHACMAN · SINOTRUK — xe đầu kéo, xe tải nặng
          </div>
          <h2>Đã lắp thực tế trên xe đầu kéo</h2>
        </div>
        <p className="lead">
          Điều hòa đỗ xe Webasto R25 / R20 lắp trực tiếp lên nóc cabin xe đầu kéo và xe tải chuyên dụng — làm mát cả đêm
          khi tắt máy, không nổ máy hao dầu, không ồn.
        </p>
        <div className="truck-grid">
          {trucks.map((t) => (
            <div className="truck-card" key={t.tag}>
              <img src={t.src || "/placeholder.svg"} alt={`${t.tag} — ${t.cap}`} />
              <span className="tag">{t.tag}</span>
              <div className="cap">{t.cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

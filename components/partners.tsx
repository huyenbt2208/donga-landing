const partners = [
  { name: "HOWO", sub: "SINOTRUK", src: "/partner-howo.webp" },
  { name: "SHACMAN", sub: "Đông Á", src: "/partner-shacman.webp" },
  { name: "CIMC", sub: "Đông Á", src: "/partner-cimc.webp" },
  { name: "SOOSAN", sub: "Vina Motor", src: "/partner-soosan.webp" },
]

export function Partners() {
  return (
    <section className="partners">
      <div className="wrap">
        <div className="sec-head" style={{ margin: "0 auto 40px", textAlign: "center" }}>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Đối tác phân phối xe tải
          </span>
          <h2>Đông Á — nhà phân phối xe tải hàng đầu Việt Nam</h2>
          <p>
            Điều hòa Webasto R25 / R20 được lắp thực tế trên các dòng xe đầu kéo và xe tải chính hãng do Đông Á Group
            phân phối.
          </p>
        </div>

        <div className="partner-grid">
          {partners.map((p) => (
            <div className="partner-card" key={p.name}>
              <div className="p-logo">
                <img src={p.src || "/placeholder.svg"} alt={`Logo ${p.name}`} loading="lazy" />
              </div>
              <div className="p-name">{p.name}</div>
              <div className="p-sub">{p.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

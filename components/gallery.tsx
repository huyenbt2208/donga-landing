const items = [
  { src: "/webasto-r25-red.jpg", cap: "R25 — nguyên đai nguyên kiện" },
  { src: "/webasto-r25-ivory.jpg", cap: "R25 — bản trắng ngà 2 quạt" },
  { src: "/webasto-r20.jpg", cap: "R20 — dàn nóng lắp mui cabin" },
  { src: "/webasto-cassette.jpg", cap: "Điều khiển từ xa, dàn lạnh trên nóc cabin" },
]

export function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Sản phẩm thực tế tại kho Đông Á</div>
          <h2>Hàng có sẵn, giao lắp nhanh</h2>
        </div>
        <div className="g-grid">
          {items.map((it) => (
            <div className="g-item" key={it.cap}>
              <img src={it.src || "/placeholder.svg"} alt={it.cap} />
              <div className="cap">{it.cap}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

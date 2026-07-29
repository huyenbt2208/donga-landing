import { Phone } from "lucide-react"

const PHONES = [
  { number: "0906.02.04.99", tel: "0906020499", variant: "orange" },
  { number: "0973981766", tel: "0973981766", variant: "green" },
] as const

export function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Liên hệ nhanh">
      <a
        href="https://zalo.me/0906020499"
        target="_blank"
        rel="noopener noreferrer"
        className="fc-zalo"
        aria-label="Chat Zalo"
      >
        Zalo
      </a>
      {PHONES.map((p) => (
        <a key={p.tel} href={`tel:${p.tel}`} className={`fc-phone fc-phone--${p.variant}`} aria-label={`Gọi ${p.number}`}>
          <span className="fc-phone-number">{p.number}</span>
          <span className="fc-phone-icon">
            <Phone size={18} fill="currentColor" strokeWidth={0} />
          </span>
        </a>
      ))}
    </div>
  )
}

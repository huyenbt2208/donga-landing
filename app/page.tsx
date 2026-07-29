import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { WhyWebasto } from "@/components/why-webasto"
import { Products } from "@/components/products"
import { Specs } from "@/components/specs"
import { Compare } from "@/components/compare"
import { Gallery } from "@/components/gallery"
import { Trucks } from "@/components/trucks"
import { Partners } from "@/components/partners"
import { CtaBand } from "@/components/cta-band"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="da">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <WhyWebasto />
        <Products />
        <Specs />
        <Compare />
        <Gallery />
        <Trucks />
        <Partners />
        <CtaBand />
      </main>
      <SiteFooter />
    </div>
  )
}

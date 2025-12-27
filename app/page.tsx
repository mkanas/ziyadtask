import HeroSection from '@/components/HeroSection'
import ProductLists from '@/components/product/ProductLists'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section id="product">
        <ProductLists />
      </section>
    </div>
  )
}

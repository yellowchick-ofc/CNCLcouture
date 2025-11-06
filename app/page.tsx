import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import NewArrivals from "@/components/new-arrivals"
import Categories from "@/components/categories"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <NewArrivals />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  )
}

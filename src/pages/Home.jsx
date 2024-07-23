import Header from "../common/Header"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"

export default function Home() {
  return (
    <div className="px-16 py-6 bg-[#06050f]">
      <Header />
      <Hero />
      <HowItWorks />
    </div>
  )
}
import Header from "../common/Header"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Benefits from "../components/Benefits"
import Team from "../components/Team"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="px-16 py-6 bg-[#06050f]">
      <Header />
      <Hero />
      <HowItWorks />
			<Benefits />
      <Team />
      <ContactUs />
      <Footer />
    </div>
  )
}
import { Header } from "./components/Header"
import { AboutSection } from "./sections/AboutSection"
import { HomeSection } from "./sections/HomeSection"
import { PortfolioSection } from "./sections/PortfolioSection"

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
    </div>
  )
}

export default App

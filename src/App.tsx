import { Header } from "./components/Header"
import { AboutSection } from "./sections/AboutSection"
import { HomeSection } from "./sections/HomeSection"

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Header />
      <HomeSection />
      <AboutSection />
      
    </div>
  )
}

export default App

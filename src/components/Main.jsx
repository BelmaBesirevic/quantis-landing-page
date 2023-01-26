import Brands from "./Brands/Brands"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import Plans from "./Plans/Plans"
import Services from "./Services/Services"
import Team from "./Team/Team"
import Testimonials from "./Testimonials/Testimonials"

const Main = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Brands />
      <Testimonials />
      <Plans />
      <Team />
      <Contact />
    </main>
  )
}
export default Main
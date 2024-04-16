import Header from "./components/modules/Header/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/modules/Footer/Footer";
import ContactUs from "./components/modules/Sections/ContactUsSection/ContactUs";
import HeroBanner from "./components/modules/Sections/HeroBannerSection/HeroBanner";
import ExpAndSkills from "./components/modules/Sections/ExpAndSkillsSection/ExpAndSkills";

function App() {
  return (
    <Container fluid className="p-0 m-0">
      <Header />
      <section id="home">
        <HeroBanner />
      </section>
      <section id="about">
        <Footer />
      </section>
      <section id="experience">
        <ExpAndSkills />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </Container>
  );
}

export default App;

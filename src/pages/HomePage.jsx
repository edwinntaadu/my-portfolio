import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import PortfolioSection from "../components/home/PortfolioSection";
import ContactSection from "../components/home/ContactSection";
import personalInfo from "../data/personalInfo";

function HomePage() {
  return (
    <>
      <section id="home">
        <HeroSection personalInfo={personalInfo} />
      </section>

      <section id="about">
        <AboutSection personalInfo={personalInfo} />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="contact">
        <ContactSection personalInfo={personalInfo} />
      </section>
    </>
  );
}

export default HomePage;

import services from "../../data/services";
import ServiceCard from "../cards/ServiceCard";

function ServicesSection() {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <p className="section-subtitle">Services</p>
          <h2 className="mb-3">What I Can Help With</h2>
          <p className="mx-auto services-section-text">
            I help individuals and small businesses build clean, responsive, and
            practical web experiences — from frontend interfaces to backend
            integrations.
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={service.id}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

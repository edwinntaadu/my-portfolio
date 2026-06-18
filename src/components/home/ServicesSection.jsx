import services from "../../data/services";
import ServiceCard from "../cards/ServiceCard";

function ServicesSection() {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <p className="section-subtitle">What I Build</p>
          <h2 className="mb-3">How I Can Help</h2>
          <p className="mx-auto services-section-text">
            I build responsive web applications with clean interfaces, practical
            backend features, and user-focused design.
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

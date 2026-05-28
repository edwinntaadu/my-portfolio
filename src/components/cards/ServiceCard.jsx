function ServiceCard({ service }) {
  return (
    <div className="card h-100 service-card shadow-sm">
      <div className="card-body p-4 text-center">
        <div className="service-icon mb-3">
          <i className={`${service.icon} fs-1`}></i>
        </div>
        <h3 className="h5 mb-3">{service.title}</h3>
        <p className="mb-0">{service.description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;

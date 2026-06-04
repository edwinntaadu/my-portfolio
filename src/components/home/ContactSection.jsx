import { useEffect, useRef, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import SocialLinks from "../common/SocialLinks";

const initialFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactSection({ personalInfo }) {
  const [state, submitToFormspree] = useForm("mreryvpe");
  const [formValues, setFormValues] = useState(initialFormValues);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const fadeTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setHasInteracted(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitToFormspree(formValues);
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormValues(initialFormValues);
      setShowSuccessMessage(true);
      setIsFadingOut(false);
      setHasInteracted(false);

      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

      fadeTimeoutRef.current = setTimeout(() => {
        setIsFadingOut(true);
      }, 3000);

      hideTimeoutRef.current = setTimeout(() => {
        setShowSuccessMessage(false);
        setIsFadingOut(false);
      }, 4000);
    }
  }, [state.succeeded]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="section-heading text-center mb-5" data-aos="fade-up">
          <p className="section-subtitle">Contact</p>
          <h2>Let’s Work Together</h2>
          <p className="mx-auto contact-section-text">
            Have a project idea, collaboration, or freelance opportunity? Send
            me a message and I’ll get back to you.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-card card h-100">
              <div className="card-body p-4">
                <span className="contact-status">Open to Opportunities</span>

                <h3 className="mt-3 mb-2">Let's Build Something Great</h3>

                <p className="mb-4">
                  Whether you're looking to build a new web application, improve
                  an existing product, or discuss a potential collaboration, I'd
                  love to hear from you.
                </p>

                <div className="contact-detail mb-3">
                  <span className="contact-detail-icon">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <div>
                    <h4>Email</h4>
                    <p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="contact-link"
                      >
                        {personalInfo.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail mb-3">
                  <span className="contact-detail-icon">
                    <i className="bi bi-whatsapp"></i>
                  </span>
                  <div>
                    <h4>WhatsApp</h4>
                    <p>
                      <a
                        href={`https://wa.me/${personalInfo.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="contact-link"
                      >
                        {personalInfo.whatsappDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail mb-4">
                  <span className="contact-detail-icon">
                    <i className="bi bi-geo-alt"></i>
                  </span>
                  <div>
                    <h4>Location</h4>
                    <p>{personalInfo.location}</p>
                  </div>
                </div>

                <SocialLinks socials={personalInfo.socials} />
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="150">
            <div className="contact-form-card card h-100">
              <div className="card-body p-4">
                <h3 className="mb-4">Send a Message</h3>

                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="_subject"
                    value="New portfolio contact form submission"
                  />

                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your name"
                        required
                        value={formValues.name}
                        onChange={handleChange}
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="validation-error"
                      />
                    </div>

                    <div className="col-md-6">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Your email"
                        required
                        value={formValues.email}
                        onChange={handleChange}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="validation-error"
                      />
                    </div>

                    <div className="col-12">
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Project type or subject"
                        required
                        value={formValues.subject}
                        onChange={handleChange}
                      />
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                        className="validation-error"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        className="form-control"
                        placeholder="Tell me about your project, idea, or how I can help..."
                        required
                        value={formValues.message}
                        onChange={handleChange}
                      ></textarea>
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="validation-error"
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-dark contact-submit-btn"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Sending..." : "Let's Talk"}
                      </button>
                    </div>

                    {showSuccessMessage && (
                      <div className="col-12">
                        <div
                          className={`alert alert-success mb-0 success-alert ${
                            isFadingOut ? "fade-out" : ""
                          }`}
                          role="alert"
                        >
                          Thanks — your message has been sent successfully.
                        </div>
                      </div>
                    )}

                    {state.errors &&
                      state.errors.length > 0 &&
                      !state.succeeded &&
                      !hasInteracted && (
                        <div className="col-12">
                          <div className="alert alert-danger mb-0" role="alert">
                            Something went wrong. Please check your details and
                            try again.
                          </div>
                        </div>
                      )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

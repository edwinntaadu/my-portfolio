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

      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }

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
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }

      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="contact-section py-5">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-card card h-100">
              <div className="card-body p-4">
                <h2 className="mb-3">Get In Touch</h2>
                <p className="mb-4">
                  I’m open to frontend, React, and software development
                  opportunities, and I’m also happy to connect with other
                  developers, collaborators, and recruiters.
                </p>

                <div className="mb-3">
                  <h3 className="h6 mb-1">Email</h3>
                  <p className="mb-0">{personalInfo.email}</p>
                </div>

                <div className="mb-3">
                  <h3 className="h6 mb-1">Phone</h3>
                  <p className="mb-0">{personalInfo.phone}</p>
                </div>

                <div className="mb-4">
                  <h3 className="h6 mb-1">Location</h3>
                  <p className="mb-0">{personalInfo.location}</p>
                </div>

                <SocialLinks socials={personalInfo.socials} />
              </div>
            </div>
          </div>

          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="150">
            <div className="contact-form-card card">
              <div className="card-body p-4">
                <h2 className="mb-4">Send a Message</h2>

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
                        placeholder="Your Name"
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
                        placeholder="Your Email"
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
                        placeholder="Subject"
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
                        placeholder="Tell me about your message"
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
                        className="btn btn-dark"
                        disabled={state.submitting}
                      >
                        {state.submitting ? "Sending..." : "Send Message"}
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

                <p className="small mt-3 mb-0">
                  Messages are delivered through Formspree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

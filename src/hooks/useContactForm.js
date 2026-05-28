import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email);
}

function useContactForm() {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setStatus({
      loading: false,
      success: "",
      error: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formValues.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formValues.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formValues.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const resetForm = () => {
    setFormValues(initialValues);
    setErrors({});
    setStatus({
      loading: false,
      success: "",
      error: "",
    });
  };

  const handleSubmit = async (submitAction) => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setStatus({
      loading: true,
      success: "",
      error: "",
    });

    try {
      await submitAction(formValues);

      setStatus({
        loading: false,
        success: "Your message was sent successfully.",
        error: "",
      });

      setFormValues(initialValues);
    } catch (error) {
      setStatus({
        loading: false,
        success: "",
        error: "Something went wrong while sending your message.",
      });
    }
  };

  return {
    formValues,
    errors,
    status,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useContactForm;

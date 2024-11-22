import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Forms = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Valid email is required";
    }
    if (!message.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    emailjs
      .sendForm(
        "service_q3bxirq",
        "template_bje5uli",
        form.current,
        "VvoNfkEs-nI8wTqaY"
      )
      .then(
        () => {
          setIsSent(true);
          setTimeout(() => setIsSent(false), 5000);
          form.current.reset();
          setMessage("");
          setEmail("");
          setName("");
          setErrors({});
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;

    if (field === "name") {
      setName(value);
    } else if (field === "email") {
      setEmail(value);
    } else if (field === "message") {
      setMessage(value);
    }

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <div className="grid grid-flow-row gap-4 p-4 max-w-lg mx-auto w-full px-8 md:px-12 lg:px-16">
      <h3 className="font-rob font-normal text-xl w-full text-center md:text-start">
        Leave us a message
      </h3>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="grid grid-flow-row gap-4"
      >
        <div className="flex flex-col">
          <label
            htmlFor="to_name"
            className="text-sm font-medium text-primary mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="to_name"
            id="to_name"
            value={name}
            onChange={(e) => handleInputChange(e, "name")}
            placeholder={errors.name ? errors.name : "Your Name"}
            className={`w-full border-2 p-3 rounded-md focus:outline-none ${
              errors.name
                ? "border-red-500 placeholder-red-500"
                : "border-gray-300"
            }`}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="from_name"
            className="text-sm font-medium text-primary mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="from_name"
            id="from_name"
            value={email}
            onChange={(e) => handleInputChange(e, "email")}
            placeholder={errors.email ? errors.email : "Your Email"}
            className={`w-full border-2 p-3 rounded-md focus:outline-none ${
              errors.email
                ? "border-red-500 placeholder-red-500"
                : "border-gray-300"
            }`}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-medium text-primary mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => handleInputChange(e, "message")}
            placeholder={errors.message ? errors.message : "Your Message"}
            rows={5}
            className={`w-full border-2 p-3 rounded-md focus:outline-none resize-y ${
              errors.message
                ? "border-red-500 placeholder-red-500"
                : "border-gray-300"
            }`}
          />
        </div>

        <button
          type="submit"
          className={`bg-primary text-white font-bold h-12 md:h-14 w-full rounded-md ${
            isSent ? "animate-pulse" : ""
          }`}
        >
          {isSent ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Forms;

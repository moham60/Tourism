import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "message" && e.target.value.trim() !== "") {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.message.trim() === "") {
      setError("Message is required.");
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll get back to you.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="bg-gray-100 py-22 px-6 mt-5 " id="contact">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Have a question or want to work with us? Fill out the form or reach
            us directly.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Email:</strong> hello@example.com
            </li>
            <li>
              <strong>Phone:</strong> +123 456 7890
            </li>
            <li>
              <strong>Location:</strong> Cairo, Egypt
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Write your message..."
              className={`w-full border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}></textarea>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-50 hover:text-blue-700 cursor-alias transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;

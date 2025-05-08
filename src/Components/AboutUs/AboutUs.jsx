import aboutImg from "/assets/images/cairo-egypt-7x3-DBfK6OpW.jpg";
export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-22 mt-5   px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src={aboutImg} alt="About Us" className="rounded-2xl shadow-md" />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a passionate team specializing in modern web development
            using technologies like React and Tailwind CSS. Our goal is to
            deliver creative and responsive solutions that help you build a
            strong online presence.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether a business website or a personal project, we focus on high
            quality, great user experience, and fast performance. Client
            satisfaction is always our top priority.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

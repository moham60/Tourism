import logoImg from "../../assets/images/travel_18240216-DelLDBoX.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-8" id="footer">
      
      {/* Logo */}
      <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
  <div className="flex items-center space-x-3">
    <img className="w-10" src={logoImg} alt="LogoImg" />
    <span className="text-2xl font-semibold uppercase">Tourism</span>
  </div>
  <p className="mt-4 text-gray-200">
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Lorem, ipsum dolor sit amet consectetur
    adipisicing elit. Doloribus iure quos fugiat,
    rerum consequuntur, vel fuga nihil facilis, ab corporis
  </p>
</div>

    

      {/* Quick Links */}
      <div className="text-center md:text-left">
        <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2">
          {["Home", "Tours","Services", "Blogs", "About Us", "Contact Us"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="relative inline-block text-white hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      

<div className="social">
  <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
  <ul className="flex gap-4">
    <li>
      <a href="https://www.facebook.com" className="hover:text-blue-500 transition-all duration-300  text-2xl" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-facebook-f"></i>
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" className="hover:text-red-600 transition-all duration-300 text-2xl" target="_blank" rel="noopener noreferrer"> 
        <i className="fa-brands fa-youtube"></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" className="hover:text-pink-700 transition-all duration-300 text-2xl" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-instagram"></i>
      </a>
    </li>
  </ul>
</div>


    </footer>
  );
}


import tour1 from "../../assets/images/articles_01-570x450-BR0kEju-.jpg";
import tour2 from "../../assets/images/cairo-egypt-7x3-DBfK6OpW.jpg";
import tour3 from "../../assets/images/a73cbfbcf18054bf31ee42e6453c5d94-L8BdFmTg.jpg";
import tour4 from "../../assets/images/images-BQRi0Yav.jpeg";
 
import video from "/WhatsApp Video 2025-04-21 at 17.43.53_cd538169.mp4";
import BlogSection from "./BlogSection";
import ContactUs from "./ContactUs";
import video from " ../../public/WhatsApp Video 2025-04-21 at 17.43.53_cd538169.mp4";

 
export default function MainComponent() {
  return (
    <>
      <section
        id="home"
        className="h-[95vh]  flex items-center justify-center text-white text-center ">
        <video
          autoPlay
          muted
          loop
          playsInline
          src={video}
          className="absolute top-0 left-0 w-full h-[110vh] object-cover z-[-1]">
          Your browser does not support the video tag.
        </video>

        <div className="content">
          <h1 className=" uppercase text-5xl font-bold">Discover the world</h1>
          <button className="mt-6 border border-white transition-all duration-500  cursor-pointer hover:bg-transparent hover:text-white px-4 py-2  bg-white shadow text-black rounded-2xl capitalize">
            Explore our trips
          </button>
        </div>
      </section>

      <section className="tours h-auto py-16 bg-gray-100" id="tours">
        <h1 className="text-4xl font-bold text-center mb-10">Our Tours</h1>
        <div className="container mx-auto flex flex-wrap justify-center gap-6 ">
          <div className="card w-[300px] bg-white shadow-xl hover:shadow-none transition-all rounded-lg ">
            <img className="w-full h-52 object-cover" src={tour1} alt="tour1" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Tour Name</h2>
              <div className="prices flex justify-start g-6">
                <p className="text-gray-600">Tour Price</p>
                <s className="text-gray-600 ml-2">old prices</s>
              </div>
            </div>
          </div>
          <div className="card w-[300px] bg-white shadow-xl hover:shadow-none transition-all rounded-lg ">
            <img className="w-full h-52 object-cover" src={tour2} alt="tour2" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Tour Name</h2>
              <div className="prices flex justify-start g-6">
                <p className="text-gray-600">Tour Price</p>
                <s className="text-gray-600 ml-2">old prices</s>
              </div>
            </div>
          </div>
          <div className="card w-[300px] bg-white shadow-xl hover:shadow-none transition-all rounded-lg  ">
            <img className="w-full h-52 object-cover" src={tour3} alt="tour3" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Tour Name</h2>
              <div className="prices flex justify-start g-6">
                <p className="text-gray-600">Tour Price</p>
                <s className="text-gray-600 ml-2">old prices</s>
              </div>
            </div>
          </div>
          <div className="card w-[300px] bg-white shadow-xl hover:shadow-none transition-all rounded-lg  ">
            <img className="w-full h-52 object-cover" src={tour4} alt="tour4" />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">Tour Name</h2>
              <div className="prices flex justify-start g-6">
                <p className="text-gray-600">Tour Price</p>
                <s className="text-gray-600 ml-2">old prices</s>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services h-auto py-16" id="services">
        <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
        <div className="container mx-auto text-center flex flex-wrap justify-center gap-6">
          <div className="box    cursor-pointer w-[300px] p-3 bg-white shadow-2xl hover:shadow-none transition-all rounded-lg">
            <i className="fa-solid fa-plane-departure text-blue-800 text-3xl text-center p-2 " />
            <div className="p-4">
              <h2 className="font-semibold text-blue-800 text-lg mb-2">
                Service Name
              </h2>
              <p className=" text-gray-500">Service Description</p>
            </div>
          </div>
          <div className="box  cursor-pointer  w-[300px] p-3 bg-white shadow-2xl hover:shadow-none transition-all rounded-lg">
            <i className="fa-solid fa-plane-departure text-blue-800 text-3xl text-center p-2 " />
            <div className="p-4">
              <h2 className="font-semibold text-blue-800 text-lg mb-2">
                Service Name
              </h2>
              <p className=" text-gray-500">Service Description</p>
            </div>
          </div>
          <div className="box cursor-pointer  w-[300px] p-3 bg-white shadow-2xl hover:shadow-none transition-all rounded-lg">
            <i className="fa-solid fa-plane-departure text-blue-800 text-3xl text-center p-2 " />
            <div className="p-4">
              <h2 className="font-semibold text-blue-800 text-lg mb-2">
                Service Name
              </h2>
              <p className="  text-gray-500">Service Description</p>
            </div>
          </div>
        </div>
      </section>

<section id="blogs">
<BlogSection />
</section>

<section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
        <img
          src=" src/assets/images/cairo-egypt-7x3-DBfK6OpW.jpg "
          alt="About Us"
          className="rounded-2xl shadow-md"
        />

        
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            We are a passionate team specializing in modern web development using technologies like React and Tailwind CSS. Our goal is to deliver creative and responsive solutions that help you build a strong online presence.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Whether a business website or a personal project, we focus on high quality, great user experience, and fast performance. Client satisfaction is always our top priority.
          </p>
          <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>

    <section id="contact">
      <ContactUs />
    </section>





    </>
  );
}

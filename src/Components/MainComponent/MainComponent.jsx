import video from "../../../public/WhatsApp Video 2025-04-21 at 17.43.53_cd538169.mp4";
import BlogSection from "./../Blogs/BlogSection";
import Contact from "../Contact/Contact";
import Tours from "./../Tours/Tours";
import Services from "./../Services/Services";
import AboutUs from "./../AboutUs/AboutUs";

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

      <Tours />
      <Services />
      <BlogSection />
      <AboutUs />

      <Contact />
    </>
  );
}

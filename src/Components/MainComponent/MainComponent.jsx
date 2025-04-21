import tour1 from "../../assets/images/articles_01-570x450-BR0kEju-.jpg";
import tour2 from "../../assets/images/cairo-egypt-7x3-DBfK6OpW.jpg";
import tour3 from "../../assets/images/a73cbfbcf18054bf31ee42e6453c5d94-L8BdFmTg.jpg";
import tour4 from "../../assets/images/images-BQRi0Yav.jpeg";
export default function MainComponent() {
  return (
    <>
      <section
        id="home"
        className="h-[100vh]  bg-black flex items-center justify-center text-white text-center ">
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
        <div className="container mx-auto flex flex-wrap justify-center gap-6">
          <div className="box w-[300px] shadow-2xl hover:shadow-none transition-all rounded-lg">
            <i className="fa-solid fa-plane-departure text-cyan-700 text-3xl text-center p-2 " />
            <div className="p-4">
              <h2 className="font-semibold text-cyan-700 text-lg mb-2">
                Service Name
              </h2>
              <p className=" text-gray-900">Service Description</p>
            </div>
          </div>
          <div className="box w-[300px] shadow-2xl hover:shadow-none transition-all rounded-lg">
            <i className="fa-solid fa-plane-departure text-cyan-700 text-3xl text-center p-2 " />
            <div className="p-4">
              <h2 className="font-semibold text-blue text-lg mb-2">
                Service Name
              </h2>
              <p className=" text-gray-900">Service Description</p>
            </div>
          </div>
          <div className="box w-[300px] shadow-2xl hover:shadow-none transition-all rounded-lg">
            <i className="fa-solid fa-plane-departure text-cyan-700 text-3xl text-center p-2 " />
            <div className="p-4">
              <h2 className="font-semibold text-cyan-700 text-lg mb-2">
                Service Name
              </h2>
              <p className="  text-gray-900">Service Description</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

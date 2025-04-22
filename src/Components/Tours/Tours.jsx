import tour1 from "../../assets/images/articles_01-570x450-BR0kEju-.jpg";
import tour2 from "../../assets/images/cairo-egypt-7x3-DBfK6OpW.jpg";
import tour3 from "../../assets/images/a73cbfbcf18054bf31ee42e6453c5d94-L8BdFmTg.jpg";
import tour4 from "../../assets/images/images-BQRi0Yav.jpeg";
export default function Tours() {
  return (
    <section
      className="tours  w-full  min-h-[100vh] py-25 flex flex-col  justify-center   bg-gray-100"
      id="tours">
      <h1 className="text-4xl font-bold text-center relative top-10 mb-20">
        Our Tours
      </h1>
      <div className="container mx-auto flex flex-wrap  justify-center gap-6 ">
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
  );
}

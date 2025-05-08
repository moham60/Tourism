export default function Services() {
  return (
    <section className="services w-full  py-22 mt-5 " id="services">
      <h1 className="text-4xl font-bold text-center relative top-10 mb-20">
        Our Services
      </h1>
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
  );
}

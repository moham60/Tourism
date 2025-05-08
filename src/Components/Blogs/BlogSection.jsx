const blogs = [
  {
    id: 1,
    title: " Blogs for Travel Enthusiasts",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    image: "assets/images/a73cbfbcf18054bf31ee42e6453c5d94-L8BdFmTg.jpg",
    date: "May 1, 2025",
  },
  {
    id: 2,
    title: "Blogs for Travel Enthusiasts",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    image: "assets/images/cairo-egypt-7x3-DBfK6OpW.jpg",
    date: "April 24, 2025",
  },
  {
    id: 3,
    title: "Blogs for Travel Enthusiasts",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    image: "assets/images/articles_01-570x450-BR0kEju-.jpg",
    date: "April 10, 2025",
  },
];

const BlogSection = () => {
  return (
    <section id="blogs" className="py-22 mt-5 px-6  relative    bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4"> Blogs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a href="#" className="text-blue-600 font-medium ">
                  Read More <span className="ml-2 ">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

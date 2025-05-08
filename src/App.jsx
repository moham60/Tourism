import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import MainComponent from "./Components/MainComponent/MainComponent";
import Tours from "./Components/Tours/Tours";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import AboutUs from "./Components/AboutUs/AboutUs";
import BlogSection from "./Components/Blogs/BlogSection";
const hashRouter = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainComponent />,
      },
      {
        path: "/home",
        element: <MainComponent />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "tours",
        element: <Tours />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <BlogSection />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={hashRouter} />;
}

export default App;

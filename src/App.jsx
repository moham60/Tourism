import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import MainComponent from "./Components/MainComponent/MainComponent";
import Tours from "./Components/Tours/Tours";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Blogs from "./Components/Blogs/Blogs";
import AboutUs from "./Components/AboutUs/AboutUs";
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
        element: <Blogs />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={hashRouter} />;
}

export default App;

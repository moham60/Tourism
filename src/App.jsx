import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import MainComponent from "./Components/MainComponent/MainComponent";
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
    ],
  },
]);
function App() {
  return <RouterProvider router={hashRouter} />;
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
// import About from "../pages/About";
import NotFound from "../pages/NotFound";
import GenerateQrCode from "../pages/GenerateQrCode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      // { index: true, element: <Landing /> },
      // { path: "/about", element: <About /> },
    ],
  },
]);
const AddRoutes = () => {
  return (
    <>
      <GenerateQrCode/>
      <RouterProvider router={router} />
    </>
  );
};

export default AddRoutes;

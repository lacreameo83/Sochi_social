import React from "react";
// import Home from "./components/navbar/Home";
import { Homepage, Mainpage, DisplayUserProfile } from "./pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Guestprofile from "./components/outlet/Guestprofile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: <Mainpage />,
      },
      {
        path: "userprofile",
        element: <DisplayUserProfile />,
      },
      {
        path: "guestprofile/:id",
        element: <Guestprofile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

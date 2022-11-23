import { createBrowserRouter } from "react-router-dom";
import AllCategoryProducts from "../AllCategoryProducts/AllCategoryProducts";
import AddProducts from "../DashBoard/AddProducts";
import DashBoard from "../DashBoard/DashBoard";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/addproducts/:id",
        element: <AllCategoryProducts></AllCategoryProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addproducts/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "/dashboard/addservice",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
]);

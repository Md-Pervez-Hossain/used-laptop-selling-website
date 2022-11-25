import { createBrowserRouter } from "react-router-dom";
import AllCategoryProducts from "../AllCategoryProducts/AllCategoryProducts";
import ProductBooking from "../AllCategoryProducts/ProductBooking";
import SingleCategory from "../AllCategoryProducts/SingleCategory";
import AddProducts from "../DashBoard/AddProducts";
import DashBoard from "../DashBoard/DashBoard";
import MyBookings from "../DashBoard/MyBookings";
import MyBuyers from "../DashBoard/MyBuyers/MyBuyers";
import MyProduct from "../DashBoard/MyProduct/MyProduct";
import Mysellers from "../DashBoard/MySellers/Mysellers";
import Advertisement from "../Home/Advertisement/Advertisement";
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
        path: "/advertisement",
        element: <Advertisement></Advertisement>,
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
        path: "/productbooking/:id",
        element: <ProductBooking></ProductBooking>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addproduct/${params.id}`),
      },
      {
        path: "/addproducts/:id",
        element: <AllCategoryProducts></AllCategoryProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addproducts/${params.id}`),
      },
      {
        path: "/addproduct/:id",
        element: <SingleCategory></SingleCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addproduct/${params.id}`),
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
      {
        path: "/dashboard/myorders",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/dashboard/myservice",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/mybuyers",
        element: <MyBuyers></MyBuyers>,
      },
      {
        path: "/dashboard/mysellers",
        element: <Mysellers></Mysellers>,
      },
    ],
  },
]);

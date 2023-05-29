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
import MyWishList from "../DashBoard/MyWishList/MyWishList";
import Payment from "../DashBoard/Payment/Payment";
import ErrorPage from "../ErrorPage/ErrorPage";
import Advertisement from "../Home/Advertisement/Advertisement";
import Blog from "../Home/Blog/Blog";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import DashBoadCommonInfo from "../DashBoard/DashBoadCommonInfo";
import SellerBookedProducts from "../DashBoard/SellerBookedProducts/SellerBookedProducts";
import SellerOrderPage from "../SellerOrderPage/SellerOrderPage";
import BuyersOrderPage from "../BuyersOrderPage/BuyersOrderPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/productbooking/:id",
        element: <ProductBooking></ProductBooking>,
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/addproduct/${params.id}`
          ),
      },
      {
        path: "/addproducts/:id",
        element: <AllCategoryProducts></AllCategoryProducts>,
        loader: async ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/addproducts/${params.id}`
          ),
      },
      {
        path: "/addproduct/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/addproduct/${params.id}`
          );
        },
        element: <SingleCategory></SingleCategory>,
      },
      {
        path: "/advertisement/singleProduct/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/advertisement/singleProduct/${params.id}`
          );
        },
        element: <SingleCategory></SingleCategory>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <DashBoadCommonInfo></DashBoadCommonInfo>,
      },
      {
        path: "/dashboard/addservice",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/sellerBookedProduct",
        element: <SellerBookedProducts></SellerBookedProducts>,
      },
      {
        path: "/dashboard/sellerOrderProduct",
        element: <SellerOrderPage></SellerOrderPage>,
      },
      {
        path: "/dashboard/buyerOrderProduct",
        element: <BuyersOrderPage></BuyersOrderPage>,
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
      {
        path: "/dashboard/mywishlist",
        element: <MyWishList></MyWishList>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://b612-used-products-resale-server-side-md-pervez-hossain.vercel.app/buyer-booking/${params.id}`
          ),
      },
    ],
  },
]);

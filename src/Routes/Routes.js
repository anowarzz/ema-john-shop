import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import Orders from "../components/Orders/Orders";
import Shipping from "../components/Shipping/Shipping";
import Shop from "../components/Shop/Shop";
import SignUp from "../components/SignUp/SignUp";
import Main from "../layouts/Main";
import { ProductsAndCardLoader } from "../loaders/ProductsAndCartLoader";
import PrivateRoute from "../RequireAuth/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage /> ,
      children: [
        {
          path: "/",
          loader: () => fetch('products.json'),
          element: <Shop />,
        },
        {
          path: '/orders',
          loader: ProductsAndCardLoader,
          element: <Orders
           />,
        },
        {
          path: '/inventory',
          element: <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        },

        {
          path: '/shipping',
          element: <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        },

        { path: 'about', element: <About /> },
        {
          path:'/login',
          element: <Login /> 
        },
        {
          path:'/signup',
          element: <SignUp /> 
        }
      ],
    },
  ]);

  export default router;
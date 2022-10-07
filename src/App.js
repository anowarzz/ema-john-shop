import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory"
import Main from "./layouts/Main";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
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
          loader: () => fetch('products.json'),
          element: <Orders />,
        },
        {
          path: '/inventory',
          element: <Inventory />
        },
        { path: 'about', element: <About /> }
      ],
    },

    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

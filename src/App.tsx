import { createBrowserRouter, NavLink, RouterProvider } from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import PrivateRoute from "./utils/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";
import { Children } from "react";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{
      path:"/floor/:index",
      element:<Floor/> 
    },
    {
      path:"/",
      element:<Reception/>
    }
  ]
  },
 

]);

function App() {
  return (
   
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

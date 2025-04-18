import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Error from "./pages/Error";


const routes = [
   {
    path:"/",
    element:<Home />,
    errorElement:<Error />
   },
   {
    path:"/directors",
    element:<Directors />,
    errorElement:<Error />
   },
   {
    path:"/actors",
    element:<Actors />,
    errorElement:<Error />
   },
   {
    path:"/movie/:id",
    element:<Movie />,
    errorElement:<Error />
   }
  ];

export default routes;
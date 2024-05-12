import Details from "./Details/Details";
import Home from "./home/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/details/:postID", element: <Details /> },
];

export default routes;

import ComntPage from "./CommentPage/ComntPage";
import Details from "./Details/Details";
import Home from "./home/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/details/:postID", element: <Details /> },
  { path: "/comments", element: <ComntPage /> },
];

export default routes;

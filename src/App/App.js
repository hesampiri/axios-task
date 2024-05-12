import { useRoutes } from "react-router-dom";
import routes from '../Routers';

function App() {
  let router = useRoutes(routes);
  return router
}

export default App;

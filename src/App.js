import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appRoutes from "./routes/appRoutes";

function App() {
  return <RouterProvider router={createBrowserRouter(appRoutes)} />;
}

export default App;

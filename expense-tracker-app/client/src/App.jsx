import { HomeLayout, DashboardLayout } from "./pages";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

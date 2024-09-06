import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Logout } from "./pages/Logout";
// import Hero from "./pages/Hero";
import CreatePost from "./pages/CreatePost";
import { Postpage } from "./pages/Postpage";
import { EditPost } from "./pages/EditPost";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        // {
        //   path: "/",
        //   element: <Hero />,
        // },
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/signin",
          element: <Signin />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
        {
          path: "/createpost",
          element: <CreatePost />,
        },
        {
          path: "/post/:id",
          element: <Postpage />,
        },
        {
          path: "/edit/:id",
          element: <EditPost />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

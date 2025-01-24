import { RouterProvider } from "react-router";
import { router } from "./config/routes";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

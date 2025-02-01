import { RouterProvider } from "react-router";
import { router } from "./config/routes";
import ErrorBoundary from "./components/error";

export const App = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};

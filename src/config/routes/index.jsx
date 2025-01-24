import { createBrowserRouter } from "react-router";
import { Layout } from "../../layout";
import { Home } from "../../pages/Home";
import { CuatroXMil } from "../../pages/CuatroXMil";
import { InteresCompuesto } from "../../pages/InteresCompuesto";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '', element: <Home />},
      {path: 'interesCompuesto', element: <InteresCompuesto />},
      {path: 'cuatroxmil', element: <CuatroXMil />},
    ]
  }
], {
  future: { v7_startTransition: true },
})
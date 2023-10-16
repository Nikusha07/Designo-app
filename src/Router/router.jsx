import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../Components/layout/MainLayout";
import { HomeSection } from "../Components/styled";
import About from "../Pages/Abouth";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <About />,
  },
  
]);
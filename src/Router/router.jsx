import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/Abouth";
import PageNotFound from '../Pages/404'
import LocationLayout from "../Pages/Location";
import ContactForm from "../Pages/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <About />,
  },
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path:'location',
    element:<LocationLayout/>
  },
  {
    path:'contact',
    element:<ContactForm/>
  }

]);
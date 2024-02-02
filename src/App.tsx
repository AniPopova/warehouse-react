import {
  RouterProvider
} from "react-router-dom";

import { router } from "./utils/utils";
import Footer from "./components/BasicView/Footer/Footer";
import NavBar from "./components/navbar/NavBar";


const App = () => {
  return (
    <>
    <NavBar navItems={[]}/>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;

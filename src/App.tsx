import {
  RouterProvider,
} from "react-router-dom";

import { router } from "./utils/utils";
import Footer from "./components/BasicView/Footer/Footer";

  


const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;

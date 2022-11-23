import { RouterProvider } from "react-router-dom";

import { router } from "../src/Components/Routes/router.js";
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

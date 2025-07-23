import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Wrapper from "./Wrapper.jsx";
createRoot(document.getElementById("root")).render(
//   <>
//     <App />
//   </>
<>
<Wrapper App={<App/>}/>
<ToastContainer position="top-center" />
</>

);

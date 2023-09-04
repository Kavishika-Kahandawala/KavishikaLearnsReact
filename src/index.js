import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { inject } from "@vercel/analytics";
import { RouterProvider } from "react-router-dom";

// components imports
import { routers } from "./routes/router_junction"; // router import

// const router = createBrowserRouter([mainRoutes]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routers} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
inject();

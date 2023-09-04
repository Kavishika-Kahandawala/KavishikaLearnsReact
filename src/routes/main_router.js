import NavBar from "../components/navbar"
import Main from "../components/main"
//styling
import "../assets/css/main.css";
export const main = [
  {
    path: "/",
    element: (
      <div className="container-home">
        <NavBar/>
        <Main/>
      </div>
    ),
  },
];

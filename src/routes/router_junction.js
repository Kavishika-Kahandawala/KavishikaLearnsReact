import { createBrowserRouter } from "react-router-dom";

// components imports

import { main } from "./main_router";
import {project_main} from "./projects_router"

export const routers = createBrowserRouter([...main,...project_main]);

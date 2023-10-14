import { Navigate } from "react-router-dom";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    component: () => <Navigate to="/Home"></Navigate>,
    name: "root",
    meta: {
      title: "问卷调查App",
    },
  },
  {
    path: "/Home",
    component: Home,
    name: "Home",
    meta: {
      title: "问卷调查App",
    },
  },
  {
    path: "/login/:code?",
    component: Home,
    name: "Home",
    meta: {
      title: "问卷调查App",
    },
  },
];

export default routes;
import { Navigate } from "react-router-dom";
import Home from "../views/Home";

const routes = [
  {
    path: "/",
    component: () => <Navigate to="/Home"></Navigate>,
    name: "root",
    meta: {
      title: "心理树洞App",
    },
  },
  {
    path: "/Home",
    component: Home,
    name: "Home",
    meta: {
      title: "心理树洞App",
    },
  },
  {
    path: "/login/:code?",
    component: Home,
    name: "Home",
    meta: {
      title: "心理树洞App",
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: Home,
    meta: {
      title: "心理树洞App",
    },
  },
];

export default routes;

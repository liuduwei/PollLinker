import { lazy } from "react";
const routes = [
  {
    path: "/Profile/Edit",
    name: "Edit",
    component: lazy(() => import("../views/Edit")),
    meta: {
      title: "知乎日报:webApp-编辑个人信息",
    },
  },
];
export default routes;

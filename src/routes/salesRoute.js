import React from "react";
import salesSubRoute from "./salesSubRoute";
const Today = React.lazy(() => import("../views/sales/Today"));
const PrevMonth = React.lazy(() => import("../views/sales/PrevMonth"));

const salesRoutes = [
  { path: "today", name: "Today", component: Today },
  {
    path: "prev-month",
    name: "PreMonth",
    salesSubRoute: [...salesSubRoute],
    component: PrevMonth,
  },
];
export default salesRoutes;

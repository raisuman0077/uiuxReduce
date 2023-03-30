import React from "react";

const Today = React.lazy(() => import("../views/sales/Today"));
const PrevMonth = React.lazy(() => import("../views/sales/PrevMonth"));

const salesRoutes = [
  { path: "today", name: "Today", component: Today },
  { path: "prev-month", name: "PreMonth", component: PrevMonth },
];
export default salesRoutes;

import React from "react";
import salesRoutes from "./salesRoute";
const SalesDetails = React.lazy(() => import("../views/SalesDetails"));

const AddOrders = React.lazy(() => import("../views/AddOrders"));
const routes = [
  { path: "/add-orders", name: "AddOrders", component: AddOrders },
  {
    path: "/sales-details",
    name: "SalesDetails",
    subRoutes: [...salesRoutes],
    component: SalesDetails,
  },
];

export default routes;

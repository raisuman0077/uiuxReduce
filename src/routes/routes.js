import React from "react";

const SalesDetails = React.lazy(() => import("../views/SalesDetails"));

const AddOrders = React.lazy(() => import("../views/AddOrders"));
const routes = [
  { path: "/", name: "AddService", component: AddOrders },
  { path: "sales-details", name: "SalesDetails", component: SalesDetails },
];

export default routes;

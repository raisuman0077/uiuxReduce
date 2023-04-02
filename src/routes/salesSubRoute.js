import React from "react";
const Invoice = React.lazy(() => import("../views/sales/Invoice"));
const ClosingReport = React.lazy(() => import("../views/sales/ClosingReport"));
const salesSubRoute = [
  { path: "invoice", name: "invoice", component: Invoice },
  { path: "closing-report", name: "closing-report", component: ClosingReport },
];

export default salesSubRoute;

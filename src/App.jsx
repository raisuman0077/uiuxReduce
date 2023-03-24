import React from "react";
import OverAllSummary from "./components/OverAllSummary";
import OrderDetails from "./views/OrderDetails";
import demo from "../demo.js";

function App({ data }) {
  const sales = demo(data);
  console.log(sales, "demo");
  return (
    <>
      <OverAllSummary sales={sales} />
      <OrderDetails order={sales.filteredReceipts} />
    </>
  );
}

export default App;

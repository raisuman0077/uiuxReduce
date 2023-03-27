import React from "react";
import OverAllSummary from "./components/OverAllSummary";
import OrderDetails from "./views/OrderDetails";
import demoData from "../getDemoData.js";

function App({ data }) {
  const salesData = demoData(data);

  return (
    <>
      <OverAllSummary salesData={salesData} />
      <OrderDetails orderData={salesData.filteredReceipts} />
    </>
  );
}

export default App;

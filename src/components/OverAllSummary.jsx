import React from "react";

import { Box, Typography } from "@mui/material";

const style = {
  box: {
    paddingTop: 4,
    paddingLeft: 15,
    marginBottom: 2,
  },
};

const OverAllSummary = ({ salesData }) => {
  return (
    <>
      <Box sx={{ ...style.box, color: "#00c805" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total Sales: Rs.{" "}
          {salesData.totalSales.toLocaleString({
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Net Sales : Rs. {salesData.total.toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Discount : Rs.{salesData.discount.toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Non-Chargable : Rs.{salesData.totalNonChargeable.toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Taxable : Rs.
          {(salesData.total - salesData.totalNonChargeable).toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Delivery Charges Rs.{salesData.charges.deliveryCharges.toFixed(2)}
        </Typography>
      </Box>
    </>
  );
};

export default OverAllSummary;

import React from "react";

import { Box, Typography } from "@mui/material";

const style = {
  box: {
    paddingTop: 4,
    paddingLeft: 15,
    marginBottom: 2,
  },
};

const OverAllSummary = ({ sales }) => {
  return (
    <>
      <Box sx={{ ...style.box, color: "#00c805" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total Sales : Rs. {sales.totalSales.toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Net Sales : Rs. {sales.total.toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Discount : Rs.{sales.discount.toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Non-Chargable : Rs.{sales.totalNonChargeable.toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Taxable : Rs.
          {(sales.total - sales.totalNonChargeable).toFixed(2)}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Delivery Charges Rs.{sales.charges.deliveryCharges.toFixed(2)}
        </Typography>
      </Box>
    </>
  );
};

export default OverAllSummary;

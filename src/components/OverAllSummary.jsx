import React from "react";

import { Box, Typography } from "@mui/material";

const style = {
  box: {
    paddingTop: 10,
    paddingLeft: 30,
  },
};

const OverAllSummary = ({ sales }) => {
  return (
    <>
      <Box sx={{ ...style.box }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Total Sales : Rs. {sales.totalSales}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Net Sales : Rs. {sales.total}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Discount : Rs.{sales.discount}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Non-Chargable : Rs.{sales.totalNonChargeable}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Total Taxable : Rs.{sales.total - sales.totalNonChargeable}
        </Typography>
        <Typography sx={{ fontWeight: "bold" }}>
          Delivery Charges Rs.{sales.charges.deliveryCharges}
        </Typography>
      </Box>
    </>
  );
};

export default OverAllSummary;

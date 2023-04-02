import React from "react";
import style from "../../style/ClosingReportStyle";
import _productData from "../../../productsData.js";
import getProductData from "../../../getProductData";
import getSalesData from "../../../getData";
import _salesData from "../../../data";
import { Stack, Typography, Box } from "@mui/material";

const ClosingReport = () => {
  const productData = getProductData(_productData);
  const salesData = getSalesData(_salesData);
  const noInvoice = Object.values(_salesData).length;

  return (
    <Box sx={style.box}>
      <Stack sx={style.stack}>
        <Typography sx={{ fontWeight: "700" }}>Closing Report</Typography>
        <Typography>Ranga Kitchen Pvt. Ltd.</Typography>
        <Typography>9818372734</Typography>
        <Typography>PAN: 827494827</Typography>
        <Box sx={{ textAlign: "left" }}>
          <Typography>Date: 2079/11/23</Typography>
          <Typography sx={{ paddingRight: "100px" }}>
            Printed At:2079/11/23 12:23 PM
          </Typography>
        </Box>
        <Typography sx={style.title}>Sales Statement</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ textAlign: "left" }}>
            <Typography>No of Invoices</Typography>
            <Typography>KOT*</Typography>
            <Typography>BOT*</Typography>
            <Typography>COT*</Typography>
            <Typography>None</Typography>
            <Typography>Discout</Typography>
            <Typography>Service Charge</Typography>
            <Typography>VAT</Typography>
            <Typography>Occupancy</Typography>
            <Typography>Canceled Count</Typography>
            <Typography sx={{ fontSize: "0.7rem" }}>
              *Includes N.C. sales
            </Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography>{noInvoice}</Typography>
            <Typography>84ff</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
            <Typography>Rs. {salesData?.discount.toFixed(2)}</Typography>
            <Typography>
              Rs. {salesData?.charges?.serviceCharge.toFixed(2)}
            </Typography>
            <Typography>9284</Typography>
            <Typography>jiijf</Typography>
            <Typography>9284</Typography>
          </Box>
        </Box>
        <Typography sx={style.title}>Group wise sales</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ textAlign: "left" }}>
            <Typography>KOT*</Typography>
            <Typography>BOT*</Typography>
            <Typography>COT*</Typography>
            <Typography>None</Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography>9284</Typography>
            <Typography>84</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
          </Box>
        </Box>
        <Typography sx={style.title}>Payment Method</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ textAlign: "left" }}>
            <Typography>Cash</Typography>
            <Typography>Static QR</Typography>
            <Typography>Fonepay Dynamic QR</Typography>
            <Typography>Card</Typography>
            <Typography>eSewa</Typography>
            <Typography>Khalti</Typography>
            <Typography>Credit</Typography>
            <Typography>Other</Typography>
            <Typography>Non-Chargeable</Typography>
          </Box>
          <Box sx={{ textAlign: "right" }}>
            <Typography>9284</Typography>
            <Typography>84</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
            <Typography>9284</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ClosingReport;

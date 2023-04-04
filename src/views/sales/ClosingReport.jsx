import React from "react";
import style from "../../style/ClosingReportStyle";
import _productData from "../../../productsData.js";
import getProductData from "../../../getProductData";
import getSalesData from "../../../getData";
import _salesData from "../../../data";
import { Stack, Typography, Box } from "@mui/material";

const getNum = (data) => {
  const canceledItemsNo = data.filteredReceipts.reduce((total, receipt) => {
    if (receipt.orderStatus === "canceled") {
      return total + receipt.orderItems.length;
    }
    const canceledItems = receipt.orderItems.filter(
      (item) => item.status === "canceled"
    );
    return total + canceledItems.length;
  }, 0);

  const occupancyNo = data.filteredReceipts.reduce((total, receipt) => {
    if (receipt.orderStatus !== "canceled") {
      return total + receipt.peopleCount;
    }
    return total;
  }, 0);

  return { canceledItemsNo, occupancyNo };
};

const getTotal = (saleData, items) => {
  const multiKot = items.multiDepItems
    .filter((item) => item.multiDepartment.some((dep) => dep === "kitchen"))
    .map((item) => item.productCode);
  const multiBot = items.multiDepItems
    .filter((item) => item.multiDepartment.some((dep) => dep === "bar"))
    .map((item) => item.productCode);

  const result = saleData.reduce(
    (acc, sale) => {
      const { orderItems, orderStatus } = sale;
      orderItems.forEach((item) => {
        if (orderStatus !== "canceled" && item.status !== "canceled") {
          const { productCode, amount } = item;

          if (
            items.kotProductCode.includes(productCode) ||
            multiKot.includes(productCode)
          ) {
            acc.kotAmount += multiKot.includes(productCode)
              ? amount / 2
              : amount;
          } else if (
            items.botProductCode.includes(productCode) ||
            multiBot.includes(productCode)
          ) {
            acc.botAmount += multiBot.includes(productCode)
              ? amount / 2
              : amount;
          } else if (items.cotProductCode.includes(productCode)) {
            acc.cotAmount += isNaN(amount) ? 0 : amount;
          } else if (items.noneDepCode.includes(productCode)) {
            acc.noneDepAmount += isNaN(amount) ? 0 : amount;
          }
        }
      });
      return acc;
    },
    { kotAmount: 0, botAmount: 0, cotAmount: 0, noneDepAmount: 0 }
  );
  return result;
};

const ClosingReport = () => {
  const items = getProductData(_productData);

  const salesData = getSalesData(_salesData);
  console.log(salesData, "data");
  const { kotAmount, botAmount, cotAmount, noneDepAmount } = getTotal(
    salesData.filteredReceipts,
    items
  );

  const noInvoice = Object.values(_salesData).length;
  const { canceledItemsNo, occupancyNo } = getNum(salesData);

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
            <Typography>Discount</Typography>
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
            <Typography>Rs. {kotAmount.toFixed(2)}</Typography>
            <Typography>Rs.{(botAmount + 132.74335 * 2).toFixed(2)}</Typography>
            <Typography>Rs. {cotAmount.toFixed(2)}</Typography>
            <Typography>Rs.{noneDepAmount.toFixed(2)}</Typography>
            <Typography>Rs. {salesData?.discount.toFixed(2)}</Typography>
            <Typography>
              Rs. {salesData?.charges?.serviceCharge.toFixed(2)}
            </Typography>
            <Typography>Rs. {salesData.charges?.vat.toFixed(2)}</Typography>
            <Typography>{occupancyNo}</Typography>
            <Typography>{canceledItemsNo}</Typography>
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

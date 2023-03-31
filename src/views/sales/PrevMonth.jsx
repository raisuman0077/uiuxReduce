import React from "react";
import data from "../../../data";
import demoData from "../../../getDemoData";
import style from "../../style/PrevMonthStyle";
import {
  Stack,
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  Tooltip,
  Popper,
  Fade,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PrintIcon from "@mui/icons-material/Print";
import NepaliDate from "nepali-date-converter";

const PrevMonth = () => {
  const salesData = demoData(data);
  const orderData = salesData.filteredReceipts;

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const NepaliDateConverter = ({ englishDate }) => {
    const nepaliDate = new NepaliDate(new Date(englishDate));
    return <span>{nepaliDate.format("MMMM DD YYYY")}</span>;
  };

  const ItemList = ({ items }) => {
    const canceledItems = {};
    const nonCanceledItems = items.reduce((acc, curr) => {
      const { productName, amount, reasonForCancelation } = curr;
      if (curr.status === "canceled") {
        canceledItems[productName] = canceledItems[productName] || {
          count: 0,
          reasonForCancelation,
        };
        canceledItems[productName].count++;
      } else {
        acc[productName] = acc[productName] || { count: 0, totalAmount: 0 };
        acc[productName].count++;
        acc[productName].totalAmount += amount;
      }
      return acc;
    }, {});

    return (
      <Box>
        {Object.entries(canceledItems).map(
          ([productName, { count, reasonForCancelation }]) => (
            <Typography
              title={reasonForCancelation}
              key={productName}
              sx={style.primFontSize}
            >
              {productName} x {count}{" "}
              <ReportProblemIcon
                sx={{ fontSize: 20, mb: "-3px", color: "rgb(178 39 23)" }}
              />
            </Typography>
          )
        )}
        {Object.entries(nonCanceledItems).map(
          ([productName, { count, totalAmount }]) => (
            <Typography key={productName} sx={style.primFontSize}>
              {productName} x {count} - {totalAmount.toFixed(2)}
            </Typography>
          )
        )}
      </Box>
    );
  };

  return (
    <>
      <Box sx={{ p: 2 }} display="flex" flexDirection="column">
        <Box sx={style.totalColor}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Total Sales : Rs. {salesData.totalSales.toFixed(2)}
          </Typography>
          <Typography sx={{ ...style.primFontSize, fontWeight: 700 }}>
            Net Sales : Rs. {salesData.total.toFixed(2)}
          </Typography>
          <Typography sx={{ ...style.primFontSize, fontWeight: 700 }}>
            Total Discount : Rs. {salesData.discount.toFixed(2)}
          </Typography>
          <Typography sx={{ ...style.primFontSize, fontWeight: 700 }}>
            Total Non-Chargeables : Rs. {salesData.totalNonChargeable}
          </Typography>
          <Typography sx={{ ...style.primFontSize, fontWeight: 700 }}>
            Total Taxable Amount : Rs.{" "}
            {(salesData.total - salesData.totalNonChargeable).toFixed(2)}
          </Typography>
          <Typography sx={{ ...style.primFontSize, fontWeight: 700 }}>
            Delivery Charges : Rs.{" "}
            {salesData.charges.deliveryCharges.toFixed(2)}
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={style.stack}>
          {orderData.slice(0, 5).map((o) => (
            <Paper
              key={o._id}
              sx={{
                ...style.paper,
              }}
              elevation={4}
            >
              <Button sx={style.moreOption} onClick={(e) => handleClick(e)}>
                <MoreHorizIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
              </Button>
              <Box sx={{ marginTop: 4 }}>
                <Popper
                  open={open}
                  anchorEl={anchorEl}
                  placement={"bottom-start"}
                  transition
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper
                        sx={{
                          border: 0,
                          p: 1,
                          fontSize: "1rem",
                          bgcolor: "white",
                        }}
                      >
                        Change Payment Method
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Box>
              <Box>
                <Typography sx={style.primFontSize}>
                  <NepaliDateConverter englishDate={o.createdAt} />{" "}
                  {new Date(o.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </Typography>

                <Typography sx={style.primFontSize}>
                  Bill No: {o.billNumber} ({o.fiscalYear})
                </Typography>
                <Typography sx={{ ...style.primFontSize, fontWeight: "700" }}>
                  Table: {o.locationIdentifier}
                </Typography>
                <Typography sx={style.primFontSize}>
                  People Count: {o.peopleCount}
                </Typography>
              </Box>
              <Box sx={{ mt: 1, mb: 1 }}>
                <ItemList items={o.orderItems} />
              </Box>

              <Divider />
              <Box sx={{ mt: 1 }}>
                <Typography sx={style.primFontSize}>
                  Sub Total:
                  {o.orderItems
                    .filter((item) => item.status !== "canceled")
                    .reduce((subTotal, item) => subTotal + item.amount, 0)
                    .toFixed(2)}
                </Typography>

                {o.discount ? (
                  <Typography sx={style.primFontSize}>
                    Discount: {Math.round(o.discount)}
                  </Typography>
                ) : null}
                {o.productPricesIncludeVATFlag && (
                  <Typography sx={style.primFontSize}>
                    VAT (
                    {o.additionalCharges.find((charge) => charge.name === "VAT")
                      ?.rate || 0}
                    %):
                    {o.additionalCharges.find((charge) => charge.name === "VAT")
                      ?.amount || 0}
                  </Typography>
                )}
                {o.additionalCharges.find(
                  (charge) => charge.name === "Delivery Charges"
                )?.amount ? (
                  <Typography sx={style.primFontSize}>
                    Delivery Charge:{" "}
                    {
                      o.additionalCharges.find(
                        (charge) => charge.name === "Delivery Charges"
                      ).amount
                    }
                  </Typography>
                ) : null}
              </Box>
              <Typography variant="h5" sx={style.totalColor}>
                {o.totalAmount}
              </Typography>
              <Box>
                <Typography sx={style.primFontSize}>Added By:</Typography>
                <Typography sx={style.primFontSize}>
                  Payement Method:
                </Typography>
                <Typography sx={style.primFontSize}>Cleared By:</Typography>
                <Typography sx={style.primFontSize}>Cleared:</Typography>
              </Box>
              <Tooltip>
                <Button
                  sx={{
                    borderRadius: "50%",
                    minWidth: "36px",
                    minHeight: "36px",
                    padding: 0,
                    mt: 1,
                  }}
                >
                  <PrintIcon sx={{ color: "rgb(204 204 204)" }} />
                </Button>
              </Tooltip>
            </Paper>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default PrevMonth;

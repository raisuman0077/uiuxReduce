import React from "react";
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
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PrintIcon from "@mui/icons-material/Print";
import NepaliDate from "nepali-date-converter";
const style = {
  stack: {
    paddingLeft: 15,
  },
  paper: {
    minWidth: 200,
    height: 450,
    padding: 3,
    margin: "auto",
    background:
      "radial-gradient(200px 210px ellipse at 75% 50%, rgb(65 221 69), rgb(50 223 54 / 50%), #ffffff)",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  },
  moreOption: {
    borderRadius: "50%",
    minWidth: "36px",
    height: "auto",
  },
  primFontSize: {
    fontSize: 14,
  },
  totalColor: {
    color: "#00c805",
  },
};

const OrderDetails = ({ order }) => {
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
  return (
    <>
      <Stack direction="row" spacing={2} sx={style.stack}>
        {order.slice(0, 5).map((o) => (
          <Paper
            key={o._id}
            sx={{
              ...style.paper,
            }}
            elevation={4}
          >
            <Box sx={{ textAlign: "right" }}>
              <Button sx={style.moreOption} onClick={(e) => handleClick(e)}>
                <MoreHorizIcon />
              </Button>
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
                      Change Payement Method
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
              {o.orderItems
                .filter((item) => item.status === "canceled")
                .reduce((accumulator, item) => {
                  const existingItem = accumulator.find(
                    (i) => i.productName === item.productName
                  );
                  if (existingItem) {
                    existingItem.amount += item.amount;
                    existingItem.count += 1;
                  } else {
                    accumulator.push({
                      productName: item.productName,
                      reason: item.reasonForCancelation,
                      count: 1,
                    });
                  }
                  return accumulator;
                }, [])
                .map((item) => (
                  <Typography
                    key={item.productName}
                    title={item.reason}
                    sx={style.primFontSize}
                  >
                    {item.productName} x {item.count}
                    <ReportProblemIcon
                      color="warning"
                      sx={{
                        fontSize: 20,
                        border: 0,
                        padding: 0,
                        marginBottom: "-4px",
                      }}
                    />
                  </Typography>
                ))}
              {o.orderItems
                .filter((item) => item.status !== "canceled")
                .reduce((accumulator, item) => {
                  const existingItem = accumulator.find(
                    (i) => i.productName === item.productName
                  );
                  if (existingItem) {
                    existingItem.amount += item.amount;
                    existingItem.count += 1;
                  } else {
                    accumulator.push({
                      productName: item.productName,
                      amount: item.amount,
                      count: 1,
                    });
                  }
                  return accumulator;
                }, [])
                .map((item) => (
                  <Typography key={item.productName} sx={style.primFontSize}>
                    {item.productName} x {item.count} - {item.amount}
                  </Typography>
                ))}
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
              <Typography sx={style.primFontSize}>Payement Method:</Typography>
              <Typography sx={style.primFontSize}>Cleared By:</Typography>
              <Typography sx={style.primFontSize}>Cleared:</Typography>
            </Box>
            <Tooltip>
              <Button>
                <PrintIcon />
              </Button>
            </Tooltip>
          </Paper>
        ))}
      </Stack>
    </>
  );
};

export default OrderDetails;

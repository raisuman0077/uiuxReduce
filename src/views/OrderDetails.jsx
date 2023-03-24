import React from "react";
import {
  Stack,
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  Tooltip,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import PrintIcon from "@mui/icons-material/Print";
const style = {
  stack: {},
  paper: {
    minWidth: 250,
    height: 500,
    padding: 2,
    margin: "auto",
    background:
      "radial-gradient(200px 210px ellipse at 75% 50%, rgb(0 200 5 / 100%), rgb(0 200 5 / 50%), #ffffff)",
  },
  moreOption: {
    borderRadius: "50%",
    minWidth: "36px",
    height: "auto",
  },
  primFontSize: {
    fontSize: 14,
  },
};

const OrderDetails = ({ order }) => {
  return (
    <>
      <Stack direction="row" spacing={2} sx={style.stack}>
        <Paper sx={{ ...style.paper }} elevation={4}>
          <Box sx={{ textAlign: "right" }}>
            <Button sx={style.moreOption}>
              <MoreHorizIcon />
            </Button>
          </Box>
          <Box>
            <Typography sx={style.primFontSize}>Date</Typography>
            <Typography sx={style.primFontSize}>Bill No:</Typography>
            <Typography sx={style.primFontSize}>Table:</Typography>
            <Typography sx={style.primFontSize}>People Count:</Typography>
          </Box>
          <Box sx={{ mt: 1, mb: 1 }}>
            <Typography sx={style.primFontSize}>Item List</Typography>
            <Typography title="cancel reason" sx={style.primFontSize}>
              Item List
              <ReportProblemIcon
                sx={{
                  padding: 0,
                  marginLeft: 1,
                  marginBottom: "-3px",
                  fontSize: "1.2rem",
                }}
              />
            </Typography>
            <Typography sx={style.primFontSize}>Item List</Typography>
            <Typography sx={style.primFontSize}>Item List</Typography>
          </Box>
          <Divider />
          <Box sx={{ mt: 1 }}>
            <Typography sx={style.primFontSize}>Sub Total</Typography>
            <Typography sx={style.primFontSize}>Discount</Typography>
            <Typography sx={style.primFontSize}>VAT</Typography>
            <Typography sx={style.primFontSize}>Delivery Charge</Typography>
          </Box>
          <Typography variant="h5">9,182</Typography>
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
      </Stack>
    </>
  );
};

export default OrderDetails;

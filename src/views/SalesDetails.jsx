import React from "react";
import style from "../style/salesDetailsStyle";
import { Box, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, Outlet } from "react-router-dom";

const sideBar = [
  { title: "Today", route: "today" },
  { title: "Yesterday", route: "yesterday" },
  { title: "2 Days ago", route: "two-days-ago" },
  { title: "This Week", route: "this-week" },
  { title: "Previous Week", route: "prev-week" },
  { title: "This Month", route: "this-month" },
  { title: "Previous Month", route: "prev-month" },
  { title: "Selected Month", route: "custom-month" },
  { title: "Selected Date", route: "selected-date" },
  { title: "Selected Range", route: "from-to" },
];
const SalesDetails = () => {
  return (
    <>
      <Box
        sx={{ ...style.box, height: "calc(100% - 61px)" }}
        display="flex"
        flexDirection="row"
      >
        <Box
          sx={{
            ...style.sideBar,
          }}
        >
          {sideBar.map((side) => (
            <Link
              to={side.route}
              key={side.title}
              style={{
                textDecoration: "none",
                width: "100%",
              }}
            >
              <Button sx={style.sideBarTabBtn}>
                {side.title} <ChevronRightIcon />
              </Button>
            </Link>
          ))}
        </Box>
        <Box>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default SalesDetails;

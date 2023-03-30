import React from "react";
import { Link } from "react-router-dom";
import style from "../style/NavbarStyle";
import { Box, Button, Typography } from "@mui/material";
const headerTitles = [
  { title: "Add Orders", route: "/" },
  { title: "Session", route: "/session" },
  { title: "Sales", route: "/sales-details" },
  { title: "KDS", route: "/kds" },
  { title: "Summary", route: "/summary" },
  { title: "Products", route: "/products" },
  { title: "Inventory", route: "/inventory" },
  { title: "Parties", route: "/parties" },
  { title: "Accounts", route: "/accounts" },
  { title: "Charts", route: "/charts" },
  { title: "More", route: "/more" },
];

const Navbar = () => {
  return (
    <Box sx={style.box}>
      <Typography>Logo</Typography>
      <Box role="tablist" sx={style.tabList}>
        {headerTitles.map((header) => (
          <Link
            key={header.title}
            to={header.route}
            style={{ textDecoration: "none" }}
          >
            <Button role="tab" sx={{ ...style.tabBtn }}>
              {header.title}
            </Button>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;

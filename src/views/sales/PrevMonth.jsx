import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const titles = [
  { title: "Invoice", route: "invoice" },
  { title: "Closing Report", route: "closing-report" },
];

const PrevMonth = () => {
  return (
    <Stack padding={2} sx={{ width: "100%" }}>
      <Box display="flex">
        {titles.map((t) => (
          <Link key={t.title} to={t.route}>
            <Button>{t.title}</Button>
          </Link>
        ))}
      </Box>
      <Outlet />
    </Stack>
  );
};

export default PrevMonth;

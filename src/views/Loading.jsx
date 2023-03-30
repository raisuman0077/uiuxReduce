import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { Box } from "@mui/material";

const styles = {
  loading: {
    position: "fixed",
    left: 0,
    right: 0,
    top: "calc(50% - 20px)",
    margin: "auto",
    height: "40px",
    width: "40px",
  },
};

const Loading = () => {
  return (
    <>
      <Box sx={styles.loading}>
        <CircularProgress />
      </Box>
    </>
  );
};

export default Loading;

const style = {
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 100,
    paddingLeft: "20px",
    paddingRight: "20px",
    gap: "12px",
    height: "61px",
    bgcolor: "rgb(245, 245, 245)",
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
  },
  tabList: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  tabBtn: {
    color: "rgb(119, 119, 119)",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "1rem",
    bgcolor: "transparent",
    width: "100%",
    margin: "0px 6px",
    border: "none",
    borderRadius: "10px",
    display: "flex",
    WebkitBoxPack: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    "&.Mui-disabled": {
      backgroundColor: "#2c4c9c",
      color: "#ffffff",
      borderRadius: "10px",
    },
  },
};
export default style;

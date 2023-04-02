const salesDetailsStyle = {
  box: {
    width: "100%",
  },
  sideBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "12px",
    WebkitBoxAlign: "center",
    boxShadow: "rgba(0, 0, 0, 0.2) 3px 0px 3px 0px",
    width: "245px",
  },

  sideBarTabBtn: {
    alignItems: "center",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: 500,
    justifyContent: "space-between",
    margin: "5px 0",
    padding: "10px 20px",
    bgcolor: "#f3f3f3",
    width: "100%",
    color: "rgb(119, 119, 119)",
    textTransform: "none",
    textAlign: "left",
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
export default salesDetailsStyle;

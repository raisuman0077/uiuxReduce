const PrevMonthStyle = {
  stack: {
    marginTop: 2,
  },
  paper: {
    position: "relative",
    width: 210,
    padding: 1,
    paddingLeft: 3,

    background:
      "radial-gradient(200px 210px ellipse at 75% 50%, rgb(65 221 69), rgb(50 223 54 / 50%), #ffffff)",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    height: "100%",
    maxHeight: 450,
  },
  moreOption: {
    position: "absolute",
    right: 0,
    top: 0,
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
  sideBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "8px",

    WebkitBoxAlign: "center",
    boxShadow: "rgba(0, 0, 0, 0.2) 3px 0px 3px 0px",
  },
  sideBarTabBtn: {
    alignItems: "center",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: 500,
    justifyContent: "space-between",
    margin: "5px 25px",
    padding: "10px 20px",
    bgcolor: "#f3f3f3",
    width: "100%",
    color: "rgb(119, 119, 119)",
    textTransform: "none",
  },
};

export default PrevMonthStyle;

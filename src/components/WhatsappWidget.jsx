import * as React from "react";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  btnWsp: {
    position: "fixed",
    padding: "5px",
    width: "50px",
    height: "50px",
    bottom: "65px",
    right: "25px",
    background: "#25d366",
    color: "#fff",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "40px",
    WebkitBoxShadow: "0px 1px 10px rgba(0, 0, 0, 0.3)",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.3)",
    zIndex: 100,
    WebkitTransition: "all 300ms ease",
    transition: "all 300ms ease",
    WebkitBorderRadius: "50px",
    MozBorderRadius: "50px",
    MsBorderRadius: "50px",
    OBorderRadius: "50px",
    "&:hover": {
      color: "#20ba5a",
      backgroundColor: "#fff",
    },
  },
});

const WhatsappWidget = () => {
    const styles = useStyles();
  return (
    <a
      className={styles.btnWsp}
      href="https://walink.co/07f9fe"
      target="_blank"
      rel="noreferrer"
      title="Mandanos un mensaje"
    >
      <WhatsappOutlinedIcon
        sx={{ display: "block", margin: "auto", fontSize: "40px" }}
        aria-hidden="true"
        draggable="true"
      />
    </a>
  );
};

export default WhatsappWidget;

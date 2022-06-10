import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  appBar: {
    border: "none",
    boxShadow: "none",
    backdropFilter: "blur(1px)",
    backgroundColor: "rgba(0,0,10,0.3)",
  },
});

const Navbar = () => {
  const styles = useStyles();
  return (
    <AppBar className={styles.appBar} position="sticky" color="transparent">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Otra Cosa
          </Typography>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Navbar;

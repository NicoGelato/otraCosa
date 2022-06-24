import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from "@mui/material/SvgIcon";
import OtraCosaSVG from "../svg/OtraCosaSVGcomponent";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

const useStyles = makeStyles({
  appBar: {
    // border: "none",
    // boxShadow: "none",
    backdropFilter: "blur(2px)",
    backgroundColor: "rgba(0,0,8,0.8)",
  },
  svgIcon: {
    height: 65,
    width: 66,
  },
});

const pages = [
  { name: "Novedades" },
  { name: "Videos", href: "#Videos" },
  { name: "Contacto", href: "#Contacto" },
];

const Navbar = () => {
  const styles = useStyles();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className={styles.appBar} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SvgIcon
            className={styles.svgIcon}
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, my: 1 }}
          >
            <OtraCosaSVG fill="#fff" width="1em" height="1em" />
          </SvgIcon>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              display: { xs: "none", md: "flex" },
              // fontFamily: "Lucida Handwriting",
              fontFamily: "Consolas",
              fontWeight: 150,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Otra Cosa
          </Typography>
          <SvgIcon
            className={styles.svgIcon}
            sx={{
              display: { xs: "flex", md: "none" },
              ml: 1,
              my: 1,
              alignContent: "center",
            }}
          >
            <OtraCosaSVG fill="#fff" width="1em" height="1em" />
          </SvgIcon>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              ml: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              // fontFamily: "Lucida Handwriting",
              fontFamily: "Consolas",
              fontWeight: 150,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Otra Cosa
          </Typography>
          <Box
            justifyContent="flex-end"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "rigth",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  sx={{ textDecoration: "none" }}
                  href={page.href}
                  key={page.name}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="right">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Link
                sx={{ textDecoration: "none" }}
                href={page.href}
                key={page.name}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontFamily: "Consolas",
                    letterSpacing: 2,
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

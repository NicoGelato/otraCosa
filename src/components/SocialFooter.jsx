import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "@mui/material/Link";
// import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  linkYouTube: {
    "&:hover": {
      color: "#c4302b",
    },
  },
  linkInstagram: {
    "&:hover": {
      color: "#c13584",
      //   background:
      //     "linear-gradient(135deg,    #f09433,    #e6683c,    #e63c3c,    #dc2743,    #e1306c,    #c13584,    #833ab4,    #5851db,    #405de6  )",
    },
  },
});

const SocialFooter = () => {
  const styles = useStyles();
  return (
    <BottomNavigation showLabels my={2}>
      <Link
        href="https://www.youtube.com/c/OtraCosa"
        target="_blank"
        title="YouTube"
      >
        <BottomNavigationAction
          className={styles.linkYouTube}
          label="YouTube/OtraCosa"
          icon={<YouTubeIcon />}
        />
      </Link>
      <Link
        href="https://www.instagram.com/otracosa.oficial/"
        target="_blank"
        title="Instagram"
      >
        <BottomNavigationAction
          className={styles.linkInstagram}
          label="Instagram/OtraCosa"
          icon={<InstagramIcon />}
        />
      </Link>
    </BottomNavigation>
  );
};

export default SocialFooter;
